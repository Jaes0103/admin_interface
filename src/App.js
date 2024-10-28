import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner'; // Optional: A loading spinner component
import PrivateRoute from './config/PrivateRoute';
import { useAuth } from './context/AuthContext';

// Lazy load components
const Login = lazy(() => import('./components/LoginPage'));
const Register = lazy(() => import('./components/RegisterPage'));
const Dashboard = lazy(() => import('./components/DashboardPage'));
const Reports = lazy(() => import('./components/ReportsPage'));
const Adoption = lazy(() => import('./components/AdoptionRequestsPage'));
const Adoptable = lazy(() => import('./components/AdoptableAnimalPage'));
const AnimalList = lazy(() => import('./components/AnimalListPage'));
const AnimalDetails = lazy(() => import('./components/AnimalDetailsPage'));
const Events = lazy(() => import('./components/EventsManager'));
const Rescuer = lazy(() => import('./components/CreateRescuerPage'));
const MapView = lazy(() => import('./components/MapViewPage'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Router>
            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Protected Routes - Accessible only if authenticated */}
                    <Route path="/dashboard" element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    } />
                    <Route path="/adopt-animal" element={
                        <PrivateRoute>
                            <Adoptable />
                        </PrivateRoute>
                    } />
                    <Route path="/reports" element={
                        <PrivateRoute>
                            <Reports />
                        </PrivateRoute>
                    } />
                    <Route path="/adoption" element={
                        <PrivateRoute>
                            <Adoption />
                        </PrivateRoute>
                    } />
                    <Route path="/animals" element={
                        <PrivateRoute>
                            <AnimalList />
                        </PrivateRoute>
                    } />
                    <Route path="/events" element={
                        <PrivateRoute>
                            <Events />
                        </PrivateRoute>
                    } />
                    <Route path="/rescuers" element={
                        <PrivateRoute>
                            <Rescuer />
                        </PrivateRoute>
                    } />
                    <Route path="/animals/:id/details" element={
                        <PrivateRoute>
                            <AnimalDetails />
                        </PrivateRoute>
                    } />
                    <Route path="/maps" element={
                        <PrivateRoute>
                            <MapView />
                        </PrivateRoute>
                    } />

                    {/* 404 Not Found Route */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
