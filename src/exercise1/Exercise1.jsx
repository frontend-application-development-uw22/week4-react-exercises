import React from 'react';
import CoffeeCard from './CoffeeCard';

export default function Exercise1() {
  return (
    <div>
      <h2>Exercise 1</h2>
      <p>
        In <code>Exercise1.jsx</code>, there is a component called <code>CoffeeCard.jsx</code> that is imported, but not used.
      </p>
      <ol>
        <li>Render this component four times in <code>Exercise1.jsx</code> (one for each coffee drink).</li>
        <li>Pass in the correct props.</li>
      </ol>
      <CoffeeCard price={5} drinkName="americano" />
      <CoffeeCard price={5} drinkName="espresso" />
      <CoffeeCard price={5} drinkName="latte" />
      <CoffeeCard price={5} drinkName="mocha" />
    </div>
  );
}