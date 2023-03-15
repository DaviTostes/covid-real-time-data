import axios from 'axios';

const getData = async () => {
  const result = await axios.get("https://coronavirus.m.pipedream.net/")
  return {
    summaryStats: [result.data.summaryStats.global.confirmed, result.data.summaryStats.global.deaths],
    lastUpdated: result.data.cache.lastUpdated,
    rawData: result.data.rawData
  }
}

export default getData