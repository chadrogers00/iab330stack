import { Grid } from '@mui/material'
import { container } from '../utilities/GlobalStyles'
import { Colors } from '../utilities/GlobalStyles'

const Subheadings = () => {
  return (
    <div style={container}>
      <Grid sx={styles.container} container spacing={4}>
        <Grid xs={4}>
          <div style={styles.text}>Avaliable</div>
        </Grid>
        <Grid xs={4}>
          <div style={styles.text}>Unavaliable</div>
        </Grid>
        <Grid xs={4}>
          <div style={styles.text}>Empty</div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Subheadings

const styles = {
  container: {
    background: Colors.greenTheme,
    marginTop: '2rem',
    height: '3rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '1rem'
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    color: Colors.fontdark,
    fontSize: '1.5rem'
  }
}