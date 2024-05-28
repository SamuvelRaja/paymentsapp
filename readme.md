# MERN Stack Application

This project is a MERN stack application that resembles Paytm. It includes a landing page, login, signup, and dashboard functionalities. The main goal of this project is to demonstrate the JWT authentication system in a MERN stack app. Libraries like Zod are used for validation on both the frontend and backend. Protected routes are implemented using React Router, providing a better understanding of authentication in a MERN app.

## Project Structure

The project consists of two main folders:
- `Frontend`
- `Backend`

## How to Run

### Clone the Project

First, clone the repository to your local machine:
```bash
git clone <repository_url>
```

## Running the Backend

Navigate to the Backend directory:
```bash
cd Backend
```
Install the necessary dependencies:

```bash
npm install
```
Copy the contents from .example to .env:

```bash
cp .examplenv .env
```
Create your MongoDB instance and replace the URL in the .env file. Also, add your JWT secret.

Running the Frontend
Navigate to the Frontend/payit directory:

```bash
cd Frontend/payit
```
Install the necessary dependencies:

```bash
npm install
```
Start the development server:

```bash
npm run dev
```
###Features
-Landing Page: The main entry point of the application.
-Login: Allows users to log in using their credentials.
-Signup: Allows new users to create an account.
-Dashboard: A protected route that only authenticated users can access.

###Libraries Used
-Zod: For validation on both frontend and backend.
-React Router: For implementing protected routes.

###Understanding JWT Authentication
This project demonstrates how to implement JWT authentication in a MERN stack application. JWT tokens are used to protect routes and ensure that only authenticated users can access certain parts of the application.

###Conclusion
This project provides a comprehensive example of how to implement JWT authentication in a MERN stack application. By following the instructions above, you can run the application on your local machine and explore the various features implemented.

Feel free to explore the code and modify it to suit your needs. Happy coding! 😊
