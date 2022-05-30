import { ContactsPage } from '../ContactsPage';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

test("ContactsPage container is rendered successfully", () => {
    render(<ContactsPage contacts={[]} addContact={() => {}} />);
    const contactPage = screen.getByTestId('contact-page');
    expect(contactPage).toBeInTheDocument();
});

test("ContactForm component is rendered successfully", () => {
    render(<ContactsPage contacts={[]} addContact={() => {}} />);
    const contactForm = screen.getByRole('form');
    expect(contactForm).toBeInTheDocument();
});

test("TileList component is rendered successfully", () => {
    render(<ContactsPage contacts={[]} addContact={() => {}} />);
    const tileList = screen.getByTestId('tile-list');
    expect(tileList).toBeInTheDocument();
})

test("Name in the input textbox is displayed properly", () => {
    let textInput = 'Richard';

    render(<ContactsPage contacts={[]} addContact={() => {}} />);
    const nameInput = screen.getByTestId('name-input');
    userEvent.type(nameInput, textInput);

    expect(nameInput).toHaveDisplayValue(textInput);
});

test("Phone in the input textbox is displayed properly", () => {
    let textInput = '123-456-7890';

    render(<ContactsPage contacts={[]} addContact={() => {}} />);
    const phoneInput = screen.getByTestId('phone-input');
    userEvent.type(phoneInput, textInput);

    expect(phoneInput).toHaveDisplayValue(textInput);
});

test("Email in the input textbox is displayed properly", () => {
    let textInput = 'user@email.com';

    render(<ContactsPage contacts={[]} addContact={() => {}} />);
    const emailInput = screen.getByTestId('email-input');
    userEvent.type(emailInput, textInput);

    expect(emailInput).toHaveDisplayValue(textInput);
});