import { dataPipe } from 'datapipe-js'
import { first, avg, sum } from 'datapipe-js/array'
import { sampleCsv } from './data/sample-data-csv.js'

export function datapipeOutputs() {

    const pipe = dataPipe()
        .fromCsv(sampleCsv)
        .tap(r => console.log(r))
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
        .sort("sales DESC");

      console.log('* This example shows different kind of dataPipeOutputs')
      console.log(' - array output ', pipe.toArray())
      console.log(' - object output ', pipe.toObject(r => r.country))
      console.log(' - tableDto output ', pipe.toTable())
      console.log(' - CSV output ')
      console.log(pipe.toCsv())
}