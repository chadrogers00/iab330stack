import { ArrowForwardIosSharp } from "@mui/icons-material";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { Colors } from "../utilities/GlobalStyles";

const RoomRow = ({room, occupancy, capacity, status, bookingEnd}) => {
  return (
    <div style={styles.mainContainer}>
      <ThemeProvider theme={theme}>
        <Button sx={styles.button}>
          <div style={styles.insideContainer}>
            <div style={styles.sectionContainer}>
              <p style={styles.roomNumberLabel}>
                #{room}
              </p>
            </div>
            <div style={styles.sectionContainer}>
              <div>
                <p style={styles.statusLabel}>
                  {occupancy}/{capacity}
                </p>
                <p style={styles.addressLabel}>
                  Avaliable at {bookingEnd}
                </p>
              </div>
            </div>
            <div style={styles.sectionContainer}>
              {status}
            </div>
            <div style={styles.sectionContainer}>
              <ArrowForwardIosSharp sx={styles.iconColor}/>
            </div>
          </div>
        </Button>
      </ThemeProvider>
    </div>
  )
  }

export default RoomRow



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
  gridTemplateColumns: '4fr 5fr 3fr 1fr',
},
sectionContainer: {
  display: 'grid',
  justifyContent:'center',
  alignItems: 'center',
  margin: '0 2rem'
},
roomNumberLabel: {
  color: Colors.fontdark,
  fontSize: 35,
  fontWeight: 700,
},
statusLabel: {
  color: Colors.white,
  fontSize: 30,
  fontWeight: 400,
  margin: 0,
},
addressLabel: {
  color: Colors.grey,
  fontSize: 23,
  fontWeight: 400,
  margin: 0,
},
margin: {
  margin: '0.5rem'
},
iconColor: {
  color: 'white',
  fontSize: 35
},
button: {
  margin: 0,
  padding: 0,
  width: '100%',
}
}

//──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const theme = createTheme({
typography: {
  button: {
    textTransform: 'none'
  }
},
});