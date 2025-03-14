# Student Jobs App

A simple React Native app built with Expo that lists student job opportunities. This project was created as a learning experience to explore the fundamentals of React Native and Expo.

## Features
- List available student jobs
- Search and filter jobs
- Simple and intuitive UI

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/student-jobs-app.git
   cd student-jobs-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npx expo start
   ```

## Build the App

To create a production build, use the following command:
```sh
npx expo prebuild && npx expo run:android # For Android
npx expo prebuild && npx expo run:ios # For iOS (Mac required)
```

Alternatively, you can use EAS (Expo Application Services) for an optimized build:
```sh
npx eas build --platform android # For Android
npx eas build --platform ios # For iOS
```

## Technologies Used
- React Native
- Expo
- JavaScript/TypeScript

## License
This project is licensed under the MIT License.
