import { Colors } from '../utilities/GlobalStyles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Button, createTheme} from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const LogsRow = ({room, time, date, status}) => {
  return (
    <div style={styles.mainContainer}>
      <ThemeProvider theme={theme}>
        <div style={styles.insideContainer}>
          <div style={styles.sectionContainer}>
            <p style={styles.roomLabel}>
              {room}
            </p>
          </div>
          <div style={styles.sectionContainer}>
            <div>
              <p style={styles.timeLabel}>
                {time}
              </p>
              <p style={styles.dateLabel}>
                {date}
              </p>
            </div>
          </div>
          <div style={styles.sectionContainer}>
            <p style={styles.statusLabel}>
              {status}
            </p>
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default LogsRow


//──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const styles = {
  mainContainer: {
    width: '100%',
    height: 'auto',
    backgroundColor: Colors.tileBackground,
    borderRadius: '0.5rem',
    margin: '1rem 0'
  },
  insideContainer: {
    display: 'grid',
    gridTemplateColumns: '2fr 2fr 6fr',
  },
  sectionContainer: {
    display: 'grid',
    justifyContent:'center',
    alignItems: 'center',
    margin: '0 2rem'
  },
  roomLabel: {
    fontSize: 35,
    fontWeight: 700,
  },
  timeLabel: {
    fontSize: 30,
    fontWeight: 700,
    margin: 0,
    padding: 0
  },
  dateLabel: {
    fontSize: 19,
    fontWeight: 500,
    margin: 0,
    padding: 0
  },
  statusLabel: {
    fontSize: 30,
    fontWeight: 400,
    margin: 0,
    textAlign: 'center'
  },
  addressLabel: {
    fontSize: 23,
    fontWeight: 400,
    margin: 0,
  },
  
}

//──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
});