// Import stylesheets
import './style.css';

import { dataPipe } from 'datapipe-js'
import { first, avg, sum } from 'datapipe-js/array'

import { datapipeOutputs } from './datapipe-output.js' 
import { sampleCsv } from './data/sample-data-csv.js'

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<h1>dataPipeJS examples</h1>
<p>All your results are in the console</p>
`;

const result = dataPipe()
        .fromCsv(sampleCsv)
        .tap(data => console.log('Original Parsed Data => ', data))
        .groupBy(r => r.Country)
        .select(g => ({
            orderDate: first(g).OrderDate,
            country: first(g).Country,
            sales: Math.round(dataPipe(g).sum(i => i.Sales), 2),
            averageSales: Math.round(avg(g, i => i.Sales), 2),
            count: g.length
        })
        )
        .where(r => r.sales > 5000)
        .sort("sales DESC")
        .toArray();

console.log(result)