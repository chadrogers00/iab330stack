import { Colors } from "../utilities/GlobalStyles"
import Graph from "./BarGraph"

const Stats = ({title, cardID, openedTime, openedDate}) => {

  return(
    <div style={{height: '98rem', margin: '0 1rem'}}>
      <div>
        <p style={{fontSize: 50, margin: '1rem 0', fontWeight: 700}}>
        {title}
        </p>
      </div>
      <div id="test" style={{border: `2px solid ${Colors.blueTheme}`, padding: '2rem 0', borderRadius: '2rem'}}>
        <Graph/>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '2fr 3fr', margin: '1rem 0'}}>
        <div style={{height: '16rem', border: `2px solid ${Colors.blueTheme}`, borderRadius: '2rem', margin: '0 0.5rem'}}>
          <p style={{margin: '1rem', fontSize: 28, fontWeight: 700, textAlign: 'center'}}>
          Recent
          </p>
          <p style={{margin: '1rem', fontSize: 25, fontWeight: 600}}>
            Card ID: {cardID}
          </p>
          <p style={{margin: '1rem', fontSize: 25, fontWeight: 600}}>
            Time: {openedTime}
          </p>
          <p style={{margin: '1rem', fontSize: 25, fontWeight: 600}}>
            Date: {openedDate}
          </p>
        </div>
        <div style={{height: '5rem', border: `2px solid ${Colors.blueTheme}`, borderRadius: '2rem', margin: '0 0.5rem'}}>
        
        </div>
      </div>
    </div>
  )
}

export default Stats