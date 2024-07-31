const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const path = require('path'); // Import path module

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
}));

// PostgreSQL connection setup
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Email setup using Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.use(bodyParser.json());

// Health check route
app.get('/health', async (req, res) => {
    try {
        await pool.query('SELECT NOW()');
        res.status(200).json({ status: 'OK', message: 'Database connection successful!' });
    } catch (err) {
        console.error('Database connection error:', err.message);
        res.status(500).json({ status: 'Error', message: 'Database connection failed!' });
    }
});

app.post('/register', async (req, res) => {
    const { useremail, password, confirmPassword } = req.body;

    // Validate request data
    if (!useremail || !password || !confirmPassword) {
        return res.status(400).json({ error: 'Email, password, and confirm password are required' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = crypto.randomBytes(32).toString('hex');

        const result = await pool.query(
            'INSERT INTO auth (useremail, password, verification_token) VALUES ($1, $2, $3) RETURNING *',
            [useremail, hashedPassword, verificationToken]
        );

        const verificationLink = `http://localhost:${port}/verify/${verificationToken}`;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: useremail,
            subject: 'Email Verification',
            html: `
                <p>Please verify your email address by clicking the button below:</p>
                <p><a href="${verificationLink}" style="
                    background-color: #4CAF50;
                    border: none;
                    color: white;
                    padding: 10px 24px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    cursor: pointer;
                    border-radius: 16px;
                ">Verify Email</a></p>
                <p>If the button above doesn't work, you can also click the link below:</p>
                <p><a href="${verificationLink}">${verificationLink}</a></p>
                <p>Best regards,<br>Your Company Team</p>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).json({ error: 'Error sending verification email', details: error.message });
            } else {
                console.log('Email sent:', info.response);
                res.status(201).json({ message: 'Registration successful! Please verify your email.' });
            }
        });
    } catch (err) {
        console.error('Error during registration:', err.message);
        res.status(500).json({ error: 'Internal server error', details: err.message });
    }
});


// Verification route
app.get('/verify/:token', async (req, res) => {
    const { token } = req.params;

    try {
        const result = await pool.query(
            'UPDATE auth SET is_verified = TRUE WHERE verification_token = $1 RETURNING *',
            [token]
        );

        if (result.rowCount === 0) {
            return res.status(400).json({ error: 'Invalid or expired token' });
        }

        // Serve the verification success page
        res.sendFile(path.join(__dirname, 'verification-success.html'));
    } catch (err) {
        console.error('Error verifying email:', err.message);
        res.status(500).json({ error: 'Internal server error', details: err.message });
    }
});
app.post('/complete-profile', async (req, res) => {
    const { useremail, userfname, userlname, username, usernumber, userimg, address, gender } = req.body;

    // Validate request data
    if (!useremail || !userfname || !userlname || !username) {
        return res.status(400).json({ error: 'Email, first name, last name, and username are required' });
    }

    try {
        const result = await pool.query(
            'UPDATE auth SET userfname = $1, userlname = $2, username = $3, usernumber = $4, userimg = $5, address = $6, gender = $7 WHERE useremail = $8 RETURNING *',
            [userfname, userlname, username, usernumber, userimg, address, gender, useremail]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'Profile updated successfully!' });
    } catch (err) {
        console.error('Error updating profile:', err.message);
        res.status(500).json({ error: 'Internal server error', details: err.message });
    }
});
// Login route (add to your server.js)
app.post('/login', async (req, res) => {
    const { useremail, password } = req.body;

    try {
        const result = await pool.query(
            'SELECT * FROM auth WHERE useremail = $1',
            [useremail]
        );

        if (result.rowCount === 0) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Generate token (use a library like jsonwebtoken)
        const token = generateToken(user.userid); // Implement this function to generate JWT

        res.status(200).json({ token });
    } catch (err) {
        console.error('Error logging in:', err.message);
        res.status(500).json({ error: 'Internal server error', details: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
