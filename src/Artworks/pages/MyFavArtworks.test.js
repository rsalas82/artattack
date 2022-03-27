import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { artworksReducer } from '../reducer/artworks.reducer';
import MyFavArtworks from './MyFavArtworks';

describe('MyFavs artworks page', () => {
  it('renders Art FavAttack title', () => {
    const store = configureStore({
      reducer: {
          artworks: artworksReducer
      }
    });
    render(<Provider store={store}><MyFavArtworks /></Provider>);
    const headerText = screen.getByText(/My Favorite Artworks/i);
    expect(headerText).toBeInTheDocument();
  });  
})
