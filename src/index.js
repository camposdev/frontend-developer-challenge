import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import numeral from "numeral";
import * as serviceWorker from './serviceWorker';

// load a locale
numeral.register('locale', 'br', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal : function (number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: 'R$'
  }
});

// switch between locales
numeral.locale('br');

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
