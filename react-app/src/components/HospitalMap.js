import { useState } from "react"
import { Colors } from "../utilities/GlobalStyles"


const HospitalMap = () => {
	const [isHover, setIsHover] = useState(false)
	const [text, setText] = useState('Hospital Layout')
	
	//───────────────────────────────────
	const styles = {
		hospitalDiv: {
			backgroundColor: isHover ? Colors.tileBackgroundDark : Colors.tileBackground,
			color: isHover ? Colors.fontColor : Colors.fontdark,
			opacity: isHover? 0.5 : 1,
			height: '30rem',
			margin: '2rem 0',
			borderRadius: '2rem',
			display: 'grid',
			justifyContent: 'center',
			alignItems: 'center',
			border: `2px solid ${Colors.blueTheme}`,
			 borderRadius: '2rem',
		}
	}

  return(
		<div
		 style={styles.hospitalDiv}
		 onMouseEnter={handleMouseEnter}
		 onMouseLeave={handleMouseLeave}
		 >
			<p style={{fontSize: 60, fontWeight: 700}}>{text}</p>
		</div>
	)
	//───────────────────────────────────
	function handleMouseEnter() {
		setIsHover(true)
		setText('Coming Soon')
	}
	
	//───────────────────────────────────
	function handleMouseLeave() {
		setIsHover(false)
		setText('Hospital Layout')
	}
}

export default HospitalMap


