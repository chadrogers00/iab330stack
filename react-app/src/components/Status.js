import { Colors } from "../utilities/GlobalStyles";

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
const Status = ({status}) => {
	const styles = {
		statusPanel: {
			display: 'grid',
			backgroundColor: '',
			borderRadius: '1rem',
			width: '8rem',
			alignItems: 'center',
			justifyContent: 'center'
		},
		statusLabel: {
			color: Colors.fontWhite,
			fontSize: 25,
			textTransform: 'capitalize'
		}
	}
	if (status === 'avaliable') {
		styles.statusPanel.backgroundColor = Colors.blueTheme
	}

	else if (status === 'booked') {
		styles.statusPanel.backgroundColor = Colors.iconRed
	}

	else if (status === 'empty') {
		styles.statusPanel.backgroundColor = Colors.fontdark
	}
	
	return(
		<div style={styles.statusPanel}>
			<p style={styles.statusLabel}>{status}</p>
		</div>
	)
}

export default Status;