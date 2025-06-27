import React from 'react';

/**
 * Interface for AuthLayout component props.
 */
interface AuthLayoutProps {
  /**
   * The child elements to be rendered within the layout.
   * Typically, this will be an authentication form.
   */
  children: React.ReactNode;
}

/**
 * AuthLayout is a functional component that provides a consistent layout
 * for authentication pages. It centers a content card on a full-screen background.
 * It implements the 'CenteredFormLayout' template.
 *
 * @param {AuthLayoutProps} props - The props for the component.
 * @returns {JSX.Element} A JSX element representing the authentication layout.
 */
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    // The main container that centers its content on the entire screen.
    // It uses a flexbox to align items in the center both horizontally and vertically.
    // `min-h-screen` ensures it takes up at least the full viewport height, which is more robust than `h-screen`.
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      {/*
        The card container for the authentication content.
        Styling is derived from the 'Layout Requirements' context.
        - `w-96`: Sets a fixed width as per `overall.sizing.mainContent`.
        - `rounded-md`, `bg-card`, `p-6`, `shadow-md`: Matches `mainContent.container` styles, 
          with `bg-surface` interpreted as `bg-card` from the Tailwind config.
      */}
      <div className="w-96 rounded-md bg-card p-6 shadow-md text-card-foreground">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
