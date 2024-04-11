import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from '../card';

describe('Card component', () => {
  const mockOffer = {
    id: '1',
    title: 'Mock Offer',
    previewImage: 'mock_image.jpg',
    price: 100,
    rating: 4,
    type: 'Apartment',
    isFavorite: false,
    isPremium: false,
  };

  test('renders card correctly', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <Card elementType="offers" offer={mockOffer} />
      </Router>
    );

    expect(getByText(mockOffer.title)).toBeInTheDocument();
    expect(getByAltText('Place image')).toBeInTheDocument();
    expect(getByText(`€${mockOffer.price}`)).toBeInTheDocument();
    expect(getByText('/ night')).toBeInTheDocument();
    expect(getByText(mockOffer.type)).toBeInTheDocument();
  });

  test('clicking on bookmark button invokes handleFavClick function', () => {
    const handleFavClick = jest.fn();
    const { getByRole } = render(
      <Router>
        <Card elementType="offers" offer={mockOffer} />
      </Router>
    );

    fireEvent.click(getByRole('button', { name: /To bookmarks/ }));
    expect(handleFavClick).toHaveBeenCalledTimes(1);
  });

  test('hovering over card invokes handleMouseEnter and handleMouseLeave functions', () => {
    const handleMouseEnter = jest.fn();
    const handleMouseLeave = jest.fn();
    const { getByTestId } = render(
      <Router>
        <Card elementType="offers" offer={mockOffer} onCardHover={handleMouseEnter} />
      </Router>
    );

    fireEvent.mouseEnter(getByTestId('card'));
    expect(handleMouseEnter).toHaveBeenCalledTimes(1);

    fireEvent.mouseLeave(getByTestId('card'));
    expect(handleMouseLeave).toHaveBeenCalledTimes(1);
  });
});
