import 'package:dio/dio.dart';

class AuthService {
  final Dio _dio = Dio();
  final String baseUrl =
      'http://localhost:3000'; // Change this to your backend URL

  Future<void> registerUser({
    required String useremail,
    required String password,
    required String confirmPassword,
  }) async {
    if (password != confirmPassword) {
      throw Exception('Passwords do not match');
    }

    try {
      final response = await _dio.post('$baseUrl/register', data: {
        'useremail': useremail,
        'password': password,
      });
      // Handle the response or log the message
      print(response.data['message']);
    } catch (e) {
      print('Error: $e');
      throw Exception('Failed to register user');
    }
  }

  Future<void> loginUser({
    required String useremail,
    required String password,
  }) async {
    try {
      final response = await _dio.post('$baseUrl/login', data: {
        'useremail': useremail,
        'password': password,
      });
      // Handle login response, such as storing the token
      print(response.data['token']);
    } catch (e) {
      print('Error: $e');
      throw Exception('Failed to login user');
    }
  }

  Future<void> updateUserProfile({
    required String token,
    required String userfname,
    required String userlname,
    required String username,
    String? usernumber,
    String? address,
    String? gender,
  }) async {
    try {
      final response = await _dio.post(
        '$baseUrl/update-profile',
        data: {
          'userfname': userfname,
          'userlname': userlname,
          'username': username,
          'usernumber': usernumber,
          'address': address,
          'gender': gender,
        },
        options: Options(
          headers: {'Authorization': 'Bearer $token'},
        ),
      );
      // Handle the response
      print(response.data['message']);
    } catch (e) {
      print('Error: $e');
      throw Exception('Failed to update profile');
    }
  }
}
