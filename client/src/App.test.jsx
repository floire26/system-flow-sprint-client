import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store, testStore } from "./stores/store";

describe('Testing App', () => {
    it('Should render the App', () => {
        const { container } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(container).toBeInTheDocument();
    })

    it('Should show loading screen before all data have been fetched', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
    })

    it('Should have a table element and its children', () => {
        render(
            <Provider store={testStore}>
                <App />
            </Provider>
        );

        const table = screen.getByRole('table');
        expect(table).toBeInTheDocument();
    })

    it('Should have a table head for each columns', async () => {
        render(
            <Provider store={testStore}>
                <App />
            </Provider>
        );

        const theads = await screen.findAllByRole('columnheader');

        expect(theads).toHaveLength(5);
    })

    it('Should have a modal section', () => {
        render(
            <Provider store={testStore}>
                <App />
            </Provider>
        );

        const modalToggle = screen.getByRole('checkbox', { name: 'contact-modal' });
        const modalContent = screen.getByTestId('contact-modal');

        expect(modalToggle).toBeInTheDocument();
        expect(modalContent).toBeInTheDocument();
    })

    it('Should have an add post button', () => {
        render(
            <Provider store={testStore}>
                <App />
            </Provider>
        );

        const addButton = screen.getByText(/Add Contact/i);

        expect(addButton).toBeInTheDocument();
    })
})
