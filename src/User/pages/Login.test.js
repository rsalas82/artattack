import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';

describe('User Login page', () => {
    it.only('renders Access button', async() => {
        render(<Login />);
        const accessButton = screen.getByRole('button', {
            name: /Access/i
          })
        expect(accessButton).toBeInTheDocument()
      });  

    it('renders error message', async() => {
        render(<Login />);
        fireEvent.click(screen.getByText(/Access/i))
        const errorMessage = await screen.findByText(/Username was not found/i)
        expect(errorMessage).toBeInTheDocument()
      });      
})