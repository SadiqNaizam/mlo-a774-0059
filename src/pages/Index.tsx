import React from 'react';
import AuthLayout from '@/components/layout/AuthLayout';
import LoginForm from '@/components/Login/LoginForm';

/**
 * Renders the main user login page.
 *
 * This component acts as a container that brings together the layout and the form.
 * It uses the `AuthLayout` to create a centered, card-based presentation on the screen,
 * and embeds the `LoginForm` within that layout for user input. This follows the
 * design pattern of composing pages from layout templates and feature-specific organisms,
 * as specified in the project requirements.
 *
 * @returns {JSX.Element} The fully composed login page.
 */
const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
