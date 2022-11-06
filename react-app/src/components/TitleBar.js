import { Colors } from "../utilities/GlobalStyles"

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
const TitleBar = ({title}) => {
  return (
    <div style={styles.container}>
      {title}
    </div>
  )
}

export default TitleBar

//──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const styles = {
  container: {
    display: 'flex',
    width: '100vw',
    height: '9rem',
    backgroundColor: Colors.blueTheme,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '550',
    fontSize: '4rem'
  }
}