import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Colors, Divider, container } from '../utilities/GlobalStyles';
import HospitalMap from './HospitalMap';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PieChart from './PieChart';
import LogsRow from './LogsRow';

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
const Dashboard = () => {
  const [avaliable, setAvaliable] = useState(60);
  const [occupied, setOccupied] = useState(5);
  const [time, setTime] = useState(new Date());

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

  //Calculate the utilised percentage
  const utilised = () => {
    return Math.round((occupied/totalRooms)*100)
  }
  
  return(
    <div style={container}>
      <HospitalMap/>
      <div style={Divider}></div>
      <div style={styles.statsContainer}>
        <div style={styles.itemContainerMargin}>
          <MeetingRoomIcon sx={styles.iconBlue}/>
          <p style={styles.labelText}>Avaliable:</p>
          <p style={styles.labelCount}>{avaliable}</p>
        </div>
        <div style={styles.itemContainerMargin}>
          <NoMeetingRoomIcon sx={styles.iconRed}/>
          <p style={styles.labelText}>occupied:</p>
          <p style={styles.labelCount}>{occupied}</p>
        </div>
        <div style={styles.itemContainerMargin}>
          <DoorSlidingIcon sx={styles.iconDark}/>
          <p style={styles.labelText}>Utilised:</p>
          <p style={styles.labelCount}>{utilised()}%</p>
        </div>
      </div>
      <div style={styles.secondContainer}>
        <div style={styles.timeContainer}>
          <p>{moment(time).format('LT')}</p>
        </div>
        <div style={styles.chartContainer}>
          <PieChart avaliable={avaliable} occupied={occupied}/>
        </div>
      </div>
      <div style={styles.logContainer}>
        <LogsRow room={mock.room} time={mock.time} date={mock.date} status={mock.status}/>
      </div>
    </div>
  )
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
    alignItems:'center'
  },
  itemContainerMargin: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: `1px solid ${Colors.blueTheme}`,
    justifyContent: 'center',
    fontWeight: 600,
    height: '100%',
    alignItems:'center'
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