import React, { useState } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

export default function App() {
  const [screen, setScreen] =
    useState('login');

  return screen === 'login' ? (
    <LoginScreen
      goToRegister={() =>
        setScreen('register')
      }
    />
  ) : (
    <RegisterScreen
      goToLogin={() =>
        setScreen('login')
      }
    />
  );
}