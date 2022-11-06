import { Colors } from "../utilities/GlobalStyles"
import _ from 'lodash'
import {Divider, Scroll} from '../utilities/GlobalStyles';
import Status from "./Status";
import { useState, useEffect } from "react";
import axios from 'axios';
import LogsRow from "./LogsRow"
import moment from "moment";

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
const RoomStats = ({id}) => {
	const [filterText, setMessage] = useState('');
	const [logData, setLogData] = useState([]);
	const [rooms, setRooms] = useState([])
	const [room, setRoom] = useState([])

	//Get Inital Log Data
	useEffect(() => {
    axios.get('/log/limit/100').then((response) => {
      setLogData(response.data.data)
    })
    axios.get('/room/all/status').then((response) => {
      setRooms(response.data.data)
			getRooms(response.data.data)
    })

  }, [])

	//Get Log Data Every 10 Second
  useEffect(() => {
    setInterval(() => {
      axios.get('/log/limit/100').then((response) => {
        setLogData(response.data.data)
      })
    }, 10000)
  }, [])


	const filteredData = _.filter(logData, rec => {
    const result = roomNumber(rec.roomID) === id
    return result
  })
  const handleChange = event => {
    setMessage(event.target.value);
  };

  return(
		<div style={styles.mainContainer}>
			<div style={Divider}></div>
			<div style={styles.insideContainer}>
				<div style={styles.sectionContainer}>
					<p style={styles.roomNumberLabel}>
						#{room.floor}{room.ward}{room.roomID}
					</p>
				</div>
				<div style={styles.sectionContainer}>
					<p style={styles.occupancyLabel}>
						Capacity: 1/20
					</p>
				</div>
				<div style={styles.sectionContainer}>
          <Status status={'avaliable'} />
        </div>
			</div>
			<div style={Divider}></div>
			<div style={styles.insideContainer}>
				<div style={styles.sectionContainer}>
					<p style={styles.roomNumberLabel}>
						Dr Jensen
					</p>
				</div>
				<div style={styles.sectionContainer}>
					<p style={styles.occupancyLabel}>
						Door State: Open
					</p>
				</div>
				<div style={styles.sectionContainer}>
					<p style={styles.headCountLabel}>
						Head Count: 1 People
					</p>
        </div>
			</div>
			<div style={Divider}></div>
			<div>
				<p style={styles.logHeading}>
					Logs
				</p>
				<div style={styles.logList}>
				{filteredData.map((log, index) => {
					return (
						<LogsRow key={index} room={roomNumber(log.roomID)} time={moment(log.timestamp).format('h:mm')} date={moment(log.timestamp).format('MM/DD/YYYY')} sensor={log.sensor} val={log.val} />
					)
				})}
				</div>
			</div>
			
		</div>
  )

	function roomNumber(id) {
    let room = rooms.find(e => e.roomID = id)
    if (room) {
      return `${room.floor}${room.ward}${room.roomID}`
    } else {
      return 'loading'
    }
  }

	//───────────────────────────────────
  function occupancyNumber(headCount) {
		
    let array = headCount.split(',')
    array = array.filter(num => num === '1')
    return array.length
  }

	function getRooms(rooms){
		if(rooms != []) {
			let foundId = id.split('')
			let pageId = foundId[foundId.length - 1]
			let room = rooms.find(room => room.roomID === parseInt(pageId))
			setRoom(room)
		}
	}
}

export default RoomStats

const styles = {
	mainContainer: {
    width: 'auto',
    height: 'auto',
    backgroundColor: Colors.tileBackground,
    borderRadius: '0.5rem',
    margin: '1rem'
  },
	sectionContainer: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 2rem'
  },
	insideContainer: {
    display: 'grid',
    gridTemplateColumns: '4fr 5fr 3fr 1fr',
  },
	roomNumberLabel: {
    color: Colors.fontdark,
    fontSize: 35,
    fontWeight: 700,
  },
	occupancyLabel: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: 400,
    margin: 0,
  },
	headCountLabel: {
    color: Colors.fontdark,
    fontSize: 18,
    fontWeight: 700,
  },
	logList: {
    ...Scroll,
    height: '58rem'
  },
	logHeading: {
		fontSize: 40,
		fontWeight: 700,
		margin: '0 3rem'
	}
}