import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Colors, Divider, container } from '../utilities/GlobalStyles';
import HospitalMap from './HospitalMap';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PieChart from './PieChart';
import LogsRow from './LogsRow';
import axios from 'axios'
import RoomsPage from '../pages/RoomsPage';
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
const Dashboard = () => {
  const [avaliable, setAvaliable] = useState(5);
  const [occupied, setOccupied] = useState(0);
  const [time, setTime] = useState(new Date());
  const [data, setData] = useState([]);
  const [log, setLog] = useState([])

  useEffect(() => {
    axios.get('/room/all/status').then((response) => {
      setData(response.data.data)
      getAvaliable(response.data.data)
    })
  }, [])

  useEffect(() => {
    setInterval(() => {
      axios.get('/room/all/status').then((response) => {
        setData(response.data.data)
        getAvaliable(response.data.data)
      })
    }, 5000)
  }, [])

  useEffect(() => {
    setInterval(() => {
      axios.get('/log/limit/1').then((response) => {
        setLog(response.data.data[0])
      })
    }, 10000)
  }, [])

  const totalRooms = avaliable + occupied

  const mock = {
    room: "#601",
    time: "6:00 PM",
    date: "12 October 2022",
    status: "User has changed status of room from Empty to Unavailable."
  }

  //increment time
  useEffect(() => {

    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div style={container}>
      <HospitalMap />
      <div style={Divider}></div>
      <div style={styles.statsContainer}>
        <div style={styles.itemContainerMargin}>
          <MeetingRoomIcon sx={styles.iconBlue} />
          <p style={styles.labelText}>Avaliable:</p>
          <p style={styles.labelCount}>{avaliable}</p>
        </div>
        <div style={styles.itemContainerMargin}>
          <NoMeetingRoomIcon sx={styles.iconRed} />
          <p style={styles.labelText}>Occupied:</p>
          <p style={styles.labelCount}>{occupied}</p>
        </div>
        <div style={styles.itemContainerMarginAlt}>
          <DoorSlidingIcon sx={styles.iconDark} />
          <p style={styles.labelText}>Empty:</p>
          <p style={styles.labelCount}>{utilised()}%</p>
        </div>
      </div>
      <div style={styles.secondContainer}>
        <div style={styles.timeContainer}>
          <p>{moment(time).format('LT')}</p>
        </div>
        <div style={styles.chartContainer}>
          <PieChart avaliable={avaliable} occupied={occupied} />
        </div>
      </div>
      <div style={styles.logContainer}>
        <LogsRow room={roomNumber(log.roomID)} time={moment(log.timestamp).format('h:mm')} date={moment(log.timestamp).format('MM/DD/YYYY')} sensor={log.sensor} val={log.val} />
      </div>
    </div>
  )
  //───────────────────────────────────
  //Calculate the utilised percentage
  function utilised() {
    return Math.round((occupied / totalRooms) * 100)
  }

  function getAvaliable(data) {
    let avaliable = 0
    let occupied = 0
    data.forEach(aRoom => {
      if (aRoom.occupancyStatus === 0) {
        avaliable += 1
      }
      else if (aRoom.occupancyStatus === 1 && !aRoom.headCount.includes('1')) {
        occupied += 1
      }
      else if (aRoom.occupancyStatus === 1) {
        occupied += 1
      }
    })
    setAvaliable(avaliable)
    setOccupied(occupied)
  }

  function roomNumber(id) {
    let room = data.find(e => e.roomID = id)
    if (room) {
      return `${room.floor}${room.ward}${room.roomID}`
    } else {
      return 'loading'
    }
  }

}

export default Dashboard

//──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const styles = {
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    height: '17rem',
    margin: '1rem 0',
    border: `2px solid ${Colors.blueTheme}`,
    borderRadius: '2rem',
    backgroundColor: Colors.tileBackground
  },
  itemContainerMargin: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: `1px solid ${Colors.blueTheme}`,
    justifyContent: 'center',
    fontWeight: 600,
    height: '100%',
    alignItems: 'center'
  },
  itemContainerMarginAlt: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontWeight: 600,
    height: '100%',
    alignItems: 'center'
  },
  iconBlue: {
    fontSize: '6rem',
    color: Colors.blueTheme,
  },
  iconRed: {
    fontSize: '6rem',
    color: Colors.iconRed,
  },
  iconDark: {
    fontSize: '6rem',
    color: Colors.tileBackgroundDark,
  },
  labelText: {
    fontSize: 25,
    margin: '0'
  },
  labelCount: {
    fontSize: '4rem',
    margin: '0'
  },
  secondContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '16rem',
    margin: '2rem 0'
  },
  timeContainer: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.fontdark,
    fontWeight: 700,
    fontSize: 70,
    border: `2px solid ${Colors.blueTheme}`,
    borderRadius: '2rem',
    marginRight: '1rem'
  },
  chartContainer: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.fontdark,
    borderRadius: '2rem',
    marginRight: '1rem'
  },
  logContainer: {
    border: `2px solid ${Colors.blueTheme}`,
    borderRadius: '2rem',
    margin: '6rem 0',
    backgroundColor: Colors.tileBackground
  }
}