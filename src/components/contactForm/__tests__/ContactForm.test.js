import { ContactForm } from '../ContactForm';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test("Contact form is rendered successfully", () => {
    render(<ContactForm />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
});
