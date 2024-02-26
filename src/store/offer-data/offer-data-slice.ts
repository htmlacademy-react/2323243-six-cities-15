import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchFavoritesAction, fetchOffersAction, fetchSelectedOfferDataAction } from '../api-actions';
import { OffersData } from '../../types/sliceTypes';
import ReviewType from '../../types/review';
import { Offer } from '../../types/offer';


const initialState: OffersData = {
  offers: [],
  isLoaded: false,
  hasError: false,

  selectedOffer: null,
  nearPlaces: [],
  reviews: [],

  isReviewSending: false,

  favs: [],
};

const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    isReviewSending: (state, action: PayloadAction<boolean>) => {
      state.isReviewSending = action.payload;
    },
    setReviews: (state, action: PayloadAction<ReviewType[]>) => {
      state.reviews = action.payload;
    },
    setIsLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
    setOffers: (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
    dropFavOffer: (state, action: PayloadAction<Offer>) => {
      const index = state.favs.findIndex((offer) => offer.id === action.payload.id);
      state.favs.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoaded = false;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoaded = true;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoaded = true;
        state.hasError = true;
      })

      .addCase(fetchSelectedOfferDataAction.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchSelectedOfferDataAction.fulfilled, (state, action) => {
        const [selectedOffer, nearbyOffers, comments] = action.payload;
        state.selectedOffer = selectedOffer;
        state.nearPlaces = nearbyOffers;
        state.reviews = comments;

        state.isLoaded = true;
      })
      .addCase(fetchSelectedOfferDataAction.rejected, (state) => {
        state.isLoaded = true;
      })

      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favs = action.payload;
        state.isLoaded = true;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isLoaded = true;
      });

  },
});

const { isReviewSending, setReviews, setIsLoaded, setOffers, dropFavOffer } = offersData.actions;

export {
  offersData,

  isReviewSending,
  setReviews,
  setIsLoaded,
  setOffers,
  dropFavOffer,
};
