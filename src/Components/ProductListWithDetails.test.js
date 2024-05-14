import { render, screen } from '@testing-library/react';
import ProductListWithDetails from "./ProductListWithDetails";

const mockProducts = [{
    "id": 1,
    "title": "Product 1",
    "price": 109.95,
    "description": "Backpack",
    "category": "travelling item",
    "image": "imageurl",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}];

describe('ProductListWithDetails Component tests', () => {
    beforeEach(() => {
        // Mock the fetch response
        global.fetch = jest.fn().mockResolvedValue({
          json: () => Promise.resolve(mockProducts),
        });
      });
    it('renders without crashing', async () => {
        render(<ProductListWithDetails />);
        const product1 = await screen.findByText('Product 1');
        expect(product1).toBeInTheDocument();
    });
})