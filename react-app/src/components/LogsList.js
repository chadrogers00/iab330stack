import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogsRow from "./LogsRow"
import Input from '@mui/material/Input';
import _ from 'lodash'
import { Scroll } from "../utilities/GlobalStyles";
import moment from "moment";

const LogsList = () => {
  const [filterText, setMessage] = useState('');
  const [data, setData] = useState([]);
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    axios.get('/log/limit/20').then((response) => {
      setData(response.data.data)
    })
    axios.get('/room/all/status').then((response) => {
      setRooms(response.data.data)
    })
  }, [])


  useEffect(() => {
    setInterval(() => {
      axios.get('/log/limit/20').then((response) => {
        setData(response.data.data)
      })
    }, 1000)
  }, [])

  const filteredData = _.filter(data, rec => {
    const result = roomNumber(rec.roomID).substring(0, filterText.length) === filterText || filterText === ''
    return result
  })
  const handleChange = event => {
    setMessage(event.target.value);
  };
  return (
    <div style={{ padding: '0 1rem' }}>
      <Input placeholder="Room Number" onChange={handleChange} value={filterText} sx={styles.input} />
      <div style={styles.logList}>
        {filteredData.map((log, index) => {
          return (
            <LogsRow key={index} room={roomNumber(log.roomID)} time={moment(log.timestamp).format('h:mm')} date={moment(log.timestamp).format('MM/DD/YYYY')} sensor={log.sensor} val={log.val} />
          )
        })}
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
}

export default LogsList

//──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const styles = {
  input: {
    width: '100%',
    fontSize: 25,
    padding: '2rem'
  },
  logList: {
    ...Scroll,
    height: '82rem'
  }
}