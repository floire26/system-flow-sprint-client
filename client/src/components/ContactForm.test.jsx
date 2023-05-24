import { render, screen } from "@testing-library/react"
import ContactForm from "./ContactForm"
import { describe, it, expect } from 'vitest';
import { Provider } from "react-redux";
import { store } from "../stores/store";

describe('Testing Contact Form Component', () => {
    it('Should render the Contact Form component', () => {
       const { container } = render(
            <Provider store={store}>
                <ContactForm />
            </Provider>
        );
        // screen.debug()

        expect(container).toBeInTheDocument();

    })

    it('Should render all inputs', () => {
        render(
            <Provider store={store}>
                <ContactForm />
            </Provider>
        );

        const firstNameInput = screen.getByRole('textbox', { name: 'firstName' });
        const lastNameInput = screen.getByRole('textbox', { name: 'lastName' });
        const ageInput = screen.getByRole('spinbutton', { name: 'age' });
        const photoInput = screen.getByRole('textbox', { name: 'photo' });

        expect(firstNameInput).toBeInTheDocument();
        expect(lastNameInput).toBeInTheDocument();
        expect(ageInput).toBeInTheDocument();
        expect(photoInput).toBeInTheDocument();
    })

    it('Should render submit button', () => {
        render(
            <Provider store={store}>
                <ContactForm />
            </Provider>)

        const submitButton = screen.getByRole('button', { name: 'Submit' });

        expect(submitButton).toBeInTheDocument();
    })

    it('Should render all input labels', () => {
        render(
            <Provider store={store}>
                <ContactForm />
            </Provider>)

        const firstNameLabel = screen.getByText(/First Name/i);
        const lastNameLabel = screen.getByText(/Last Name/i);
        const ageLabel = screen.getByText(/Age/i);
        const photoLabel = screen.getByText(/Profile Photo URL/i);

        expect(firstNameLabel).toBeInTheDocument();
        expect(lastNameLabel).toBeInTheDocument();
        expect(ageLabel).toBeInTheDocument();
        expect(photoLabel).toBeInTheDocument();
    })

    it('Should render close button', () => {
        render(
            <Provider store={store}>
                <ContactForm />
            </Provider>
        );

    const closeButton = screen.getByTestId('closeButton');

    expect(closeButton).toBeInTheDocument();
    })
})
