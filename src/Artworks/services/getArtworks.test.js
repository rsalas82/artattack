import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import ArtworkList from "../components/ArtworkList";
import { artworksReducer } from "../reducer/artworks.reducer";

describe("ArtworkList component", () => {
    beforeAll(() => jest.spyOn(window, "fetch"));
  
    describe("when user access to the artwork list page", () => {
      it("should list artwoks", async () => {
        const store = configureStore({
            reducer: {
                artworks: artworksReducer
            }
          });
          
        const artworks = [
          {
            id: 128391,
            accessionNumber: '1951.355',
            currentLocation: '215 French, German, and Dutch',
            title: 'Portrait of a Family Playing Music',
            creators: [
              {
                id: 2633,
                description: 'Pieter de Hooch (Dutch, 1629-1684)',
                extent: null,
                qualifier: null,
                role: 'artist',
                biography: null,
                name_in_original_language: null,
                birth_year: '1629',
                death_year: '1684'
              }
            ],
            collection: 'P - Netherlandish-Dutch',
            creationDate: '1663',
            technique: 'oil on canvas',
            department: 'European Painting and Sculpture',
            type: 'Painting',
            image: 'https://openaccess-cdn.clevelandart.org/1951.355/1951.355_web.jpg',
            culture: [
              'Netherlands, 17th century'
            ],
            didYouKnow: 'During this period, the Dutch Republic was the richest, most urbanized nation.'
          },
          {
            id: 94979,
            accessionNumber: '1915.534',
            currentLocation: '204 Colonial American',
            title: 'Nathaniel Hurd',
            creators: [
              {
                id: 2409,
                description: 'John Singleton Copley (American, 1738-1815)',
                extent: null,
                qualifier: null,
                role: 'artist',
                biography: null,
                name_in_original_language: null,
                birth_year: '1738',
                death_year: '1815'
              }
            ],
            collection: 'American - Painting',
            creationDate: 'c. 1765',
            technique: 'oil on canvas',
            department: 'American Painting and Sculpture',
            type: 'Painting',
            image: 'https://openaccess-cdn.clevelandart.org/1915.534/1915.534_web.jpg',
            culture: [
              'America, 18th century'
            ],
            didYouKnow: 'The artist Copley’s in-laws were consignees for the cargo dumped during the Boston Tea Party.'
          }
        ];
  
        window.fetch.mockResolvedValueOnce({
          ok: true,
          json: async () => artworks,
        });
  
        render(<Provider store={store}><ArtworkList artworks={artworks} loading={false} /></Provider>);
        const artwork = await screen.findByText("Nathaniel Hurd");
        expect(artwork).toBeInTheDocument();
      });
    });
  });