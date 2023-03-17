import './styles.css'

const RegionCard = ({region, confirmed, deaths, lastUpdate} : any) => {
  return (
    <div className="regionCard">
      <h2>{region}</h2>
      <p>Cases Confirmed: <span>{confirmed}</span></p>
      <p>Deaths: <span>{deaths}</span></p>
      <p>Last Updated: <span>{lastUpdate}</span></p>
    </div>
  )
}

export default RegionCard