import React from 'react';
import Dropdown from './Dropdown';

export default function Exercise5() {
  return (
    <div>
      <h2>Exercise 5</h2>
      <p>
        This exercise will involve adding state to a component. In the file <code>Dropdown.jsx</code>, there is code that currently displays an open dropdown.
      </p>
      <ol>
        <li>Import and render the <code>Dropdown</code> in <code>Exercise5.jsx</code></li>
        <li>Add a state property called <code>isOpen</code></li>
        <li>Add a click handler called <code>toggleDropdown</code> that makes the content hide/show on click.</li>
        <li>If you have time, try writing a test to verify that the dropdown works as expected.</li>
      </ol>
      <Dropdown header={<div>Test Header</div>}>
        Test Content
      </Dropdown>
    </div>
  );
}