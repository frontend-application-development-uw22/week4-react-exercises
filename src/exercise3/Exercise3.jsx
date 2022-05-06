import React from 'react';
import InfoCard from './InfoCard';

export default function Exercise3() {
  return (
    <div>
      <h2>Exercise 3</h2>
      <p>
        In React, components have a prop called <code>children</code> that allows you to access the content passed to an element. For example, in this component:
      </p>

        <pre>
          <code>
          {'<InfoCard>\n    <div>Some custom content</div>\n</InfoCard>'}
          </code>
        </pre>

      <p>
        We would be able to access <code>{'<div>Some custom content</div>'}</code> in <code>InfoCard</code> via the prop <code>children</code>.
      </p>
      <ol>
        <li>In the file <code>InfoCard.jsx</code>, create a component that renders an info icon. You can use <a href="https://fontawesome.com/icons?d=gallery&q=info" target="_blank" rel="noopener noreferrer">FontAwesome icons</a> and set them up with React using <a href="https://github.com/FortAwesome/react-fontawesome#explicit-import" target="_blank" rel="noopener noreferrer">these instructions.</a> Replace <code>faCoffee</code> with the name of the icon you want to import (e.g. <code>faInfoCircle</code>).
        </li>
        <li>Make the component generic, where you can pass in whatever you want to the card (see code block above for an example).</li>
        <li>When passing <code>children</code> into the component, the component should display the info icon next to the children.</li>
        <li>Import and render the <code>InfoCard</code> in <code>Exercise3.jsx</code></li>
      </ol>
      <InfoCard>
        <span>Some custom content</span>
      </InfoCard>
    </div>
  );
}