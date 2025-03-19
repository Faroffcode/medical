# Medical Shop App

## Overview
The Medical Shop App is a web application designed to help users find pathology labs, medical shops, and doctors' details, along with appointment booking functionality. The application utilizes Supabase for database management and provides a user-friendly interface for seamless navigation.

## Features
- User authentication with login and signup functionality.
- Searchable directories for pathology labs, medical shops, and doctors.
- Appointment booking system for users to schedule visits with doctors.
- Responsive design for optimal viewing on various devices.

## Project Structure
```
medical-shop-app
├── public
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   └── assets
│       ├── css
│       │   └── styles.css
│       └── js
│           └── scripts.js
├── src
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── AppointmentForm.tsx
│   ├── pages
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── SignupPage.tsx
│   │   ├── PathologyLabsPage.tsx
│   │   ├── MedicalShopsPage.tsx
│   │   └── DoctorsPage.tsx
│   ├── services
│   │   └── supabaseClient.ts
│   ├── utils
│   │   └── helpers.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd medical-shop-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
- Start the development server:
  ```
  npm run dev
  ```
- Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.