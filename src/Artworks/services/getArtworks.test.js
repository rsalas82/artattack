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
            title: 'Nathaniel Hurd'
          },
        ];
  
        window.fetch.mockResolvedValueOnce({
          ok: true,
          json: async () => artworks,
        });
  
        render(<Provider store={store}><ArtworkList /></Provider>);
        const artwork = await screen.findByText("Nathaniel Hurd");
        expect(artwork).toBeInTheDocument();
      });
    });
  });