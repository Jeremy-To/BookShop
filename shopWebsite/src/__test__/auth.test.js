import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Auth from './../components/items/Auth';
import { AuthContext } from '../store/auth-context';

describe('Auth component', () => {
  afterEach(cleanup);

  it('should render the sign in page when the user is not authenticated', () => {
    const { getByText, getByPlaceholderText } = render(<Auth />);

    const signInButton = getByText(/Sign In with Google/i);
    const emailInput = getByPlaceholderText(/Email.../i);
    const passwordInput = getByPlaceholderText(/Password.../i);
    const signInEmailButton = getByText(/Sign In/i);

    expect(signInButton).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInEmailButton).toBeInTheDocument();
  });

  it('should call the `signIn` function when the sign in with email button is clicked', () => {
    const { getByText, getByPlaceholderText } = render(<Auth />);
    const signInContext = React.useContext(AuthContext);

    const signInEmailButton = getByText(/Sign In/i);
    const emailInput = getByPlaceholderText(/Email.../i);
    const passwordInput = getByPlaceholderText(/Password.../i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(signInEmailButton);

    expect(signInContext.signIn).toHaveBeenCalledWith('test@example.com', 'password');
  });

  it('should render the Home component when the user is authenticated', () => {
    jest.resetModules();
    jest.doMock('../store/auth-context', () => {
      return {
        AuthContext: React.createContext({
          updateLoginStatus: jest.fn(),
          signIn: jest.fn(),
          isAuth: true,
        }),
      };
    });
    const { getByText } = render(<Auth />);

    const homeText = getByText(/With BookShop, share and sell the books that you loved/i);

    expect(homeText).toBeInTheDocument();
  });
});
