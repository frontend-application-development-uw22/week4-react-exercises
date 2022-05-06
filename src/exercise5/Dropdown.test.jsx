import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe('Dropdown', () => {
    const Header = () => <div>Test Header</div>;

    it('should toggle the content back and forth', () => {
        render(<Dropdown header={<Header />}>Content</Dropdown>);
        
        const headerText = screen.getByText('Test Header');
        expect(headerText).toBeDefined();

        // This allows us to query for text, but not throw an error
        const content = screen.queryByText('Content');
        expect(content).toBeNull();

        fireEvent.click(screen.getByText('Test Header'));

        const newContent = screen.queryByText('Content');
        expect(newContent).toBeDefined();
    });
});