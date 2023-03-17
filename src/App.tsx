import { useEffect, useState } from 'react'
import './App.css'

import RegionCard from './components/regionCard'
import getData from './utils/getData'

function App() {
  const [data, setData] = useState<any>({ summaryStats: [], lastUpdated: '', rawData: []})

  useEffect(() => {
    const awaitData = async () => {
      setData(await getData())
    }

    awaitData()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Covid Real Time Data</h1>
      </header>
      <main>
        <div className="overall">
          <div className="summaryStats">
            <p>Cases Confirmed: <span>{data.summaryStats[0]}</span></p>
            <p>Deaths: <span>{data.summaryStats[1]}</span></p>
          </div>
          <div className="cache">
            <p>Last Updated: <span>{data.lastUpdated}</span></p>
          </div>
        </div>
        <div className="container">
          <div className="rawData">          
            {
              data.rawData.map((region: any, index: any) => 
              <RegionCard 
                key={index}
                region={region.Combined_Key} 
                confirmed={region.Confirmed} 
                deaths={region.Deaths}
                lastUpdate={region.Last_Update}
              />)
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
