// Import stylesheets
import './style.css';

import { dataPipe } from 'datapipe-js'
import { first, avg, sum } from 'datapipe-js/array'

import { datapipeOutputs } from './datapipe-output.js' 

function test(){
  alert('888')
}

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<h1>dataPipeJS </h1>
<a href="javascript:test();">datapipeOutputs</a>
`;


datapipeOutputs()

