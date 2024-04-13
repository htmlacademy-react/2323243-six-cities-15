import {vi} from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './card';
import { TestProvider, implement } from '../../testUtilities';
import { Offer } from '../../types/offer';

describe('Card component', () => {
  const mockOffer = implement<Offer>({
    id: '1',
    title: 'Mock Offer',
    previewImage: 'mock_image.jpg',
    price: 100,
    rating: 4,
    type: 'Apartment',
    isFavorite: false,
    isPremium: false,
  });

  test('renders card correctly', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <Card elementType="offers" offer={mockOffer} />
      </Router>,
      {wrapper: TestProvider}
    );

    expect(getByText(mockOffer.title)).toBeInTheDocument();
    expect(getByAltText('Place image')).toBeInTheDocument();
    expect(getByText(`€${mockOffer.price}`)).toBeInTheDocument();
    expect(getByText('/ night')).toBeInTheDocument();
    expect(getByText(mockOffer.type)).toBeInTheDocument();
  });

  test('invokes handleMouseEnter and handleMouseLeave functions when hover over card', () => {
    const handleCardHover = vi.fn();
    const { getByTestId } = render(
      <Router>
        <Card elementType="offers" offer={mockOffer} onCardHover={handleCardHover} />
      </Router>,
      {wrapper: TestProvider}
    );

    fireEvent.mouseEnter(getByTestId('card'));
    expect(handleCardHover).toHaveBeenCalledTimes(1);
    expect(handleCardHover).toHaveBeenLastCalledWith(mockOffer.id);
    
    fireEvent.mouseLeave(getByTestId('card'));
    expect(handleCardHover).toHaveBeenCalledTimes(2);
    expect(handleCardHover).toHaveBeenLastCalledWith(null);
  });
});
