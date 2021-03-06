import React from 'react';
import { render, screen } from '@testing-library/react';
import Exercise1 from './Exercise1';

describe('Exercise1', () => {
  it('should render four CoffeeCard components', async () => {
    render(<Exercise1 />);
    const coffeeCards = await screen.findAllByTestId('CoffeeCard');
    expect(coffeeCards).toHaveLength(4);
  });

  it('should have a CoffeeCard with each drink name', async () => {
    render(<Exercise1 />);
    const americano = await screen.findByText('Americano');
    expect(americano).toBeDefined();

    const espresso = await screen.findByText('Espresso');
    expect(espresso).toBeDefined();

    const latte = await screen.findByText('Latte');
    expect(latte).toBeDefined();

    const mocha = await screen.findByText('Mocha');
    expect(mocha).toBeDefined();
  });
});