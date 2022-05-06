import React from 'react';
import Orchid from './Orchid';

export default function Exercise2() {
  return (
    <div>
      <h2>Exercise 2</h2>
      <p>
        In the <code>exercise2</code> folder, there is a file called <code>Orchid.jsx</code>.
      </p>
      <ol>
        <li>Have <code>Orchid.jsx</code> render an image of an orchid (URL provided, don't forget the <code>alt</code> prop and make it the value <code>"orchid"</code>)</li>
        <li>Add the prop <code>borderColor</code> to the <code>Orchid</code> component and give the image a border with the color provided.</li>
        <li>Import and render the <code>Orchid</code> component in <code>Exercise2.jsx</code> and provide it a <code>borderColor</code></li>
      </ol>
      <Orchid borderColor="red" />
    </div>
  );
}