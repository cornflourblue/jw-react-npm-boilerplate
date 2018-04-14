import React from 'react';
import { render } from 'react-dom';

import BoilerplateComponent from '../../src/BoilerplateComponent.jsx';

render(
  <div>
    <h2>React Boilerplate Component Demo</h2>
    <BoilerplateComponent label="My boilerplate label: " onChange={val => console.log(val)} />
  </div>, 
  document.getElementById('app')
);