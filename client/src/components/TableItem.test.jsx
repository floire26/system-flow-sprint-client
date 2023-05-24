import { describe, it, expect } from "vitest";
import TableItem from "./TableItem";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../stores/store";

describe('Testing Table Item Component', () => {
    it('Should render the Table Item component', () => {
        const { container } = render(
            <Provider store={store}>
                <TableItem />
            </Provider>
        );
        expect(container).toBeInTheDocument()
    })

    it('Should have a table row element', () => {
        render(
            <Provider store={store}>
                <TableItem />
            </Provider>
        );

        const row = screen.getByRole('row');

        expect(row).toBeInTheDocument();
    })

    it('Should have a table cell for each columns', async () => {
        render(
            <Provider store={store}>
                <TableItem />
            </Provider>
        );

        const cols = await screen.findAllByRole('cell');

        expect(cols).toHaveLength(5)
    })

    it('Should render edit & delete buttons', () => {
        render(
            <Provider store={store}>
                <TableItem />
            </Provider>
        );

        const editButton = screen.getByText(/Edit/i);
        const deleteButton = screen.getByText(/Delete/i);

        expect(editButton).toBeInTheDocument();
        expect(deleteButton).toBeInTheDocument();
    })
,
    it('should have an img element to display profile picture', () => {
        render(
            <Provider store={store}>
                <TableItem />
            </Provider>
        );

        const photo = screen.getByRole('img');

        expect(photo).toBeInTheDocument();
    })
})
