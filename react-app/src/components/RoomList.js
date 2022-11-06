import React, { useEffect, useState } from 'react';
import _ from 'lodash'
import { Scroll } from "../utilities/GlobalStyles";
import RoomRow from "./RoomRow"
import { Input } from "@mui/material";
import axios from 'axios';

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
const RoomList = () => {
  const [filterText, setMessage] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/room/all/status').then((response) => {
      setData(response.data.data)
    })
  }, [])

  useEffect(() => {
    setInterval(() => {
      axios.get('/room/all/status').then((response) => {
        setData(response.data.data)
      })
    }, 5000)
  }, [])

  const filteredData = _.filter(data, rec => {
    const result = roomNumber(rec).substring(0, filterText.length) === filterText || filterText === ''
    return result
  })
  

  return (
    <div style={{ padding: '0 1rem' }}>
      <Input placeholder="Room Number" onChange={handleChange} value={filterText} sx={styles.input} />
      {filteredData.map((aRoom, index) => {
        let roomStatus;
        if (aRoom.occupancyStatus === 0) {
          roomStatus = 'avaliable'
        }
        else if (aRoom.occupancyStatus === 1 && !aRoom.headCount.includes('1')) {
          roomStatus = 'empty'
        }
        else if (aRoom.occupancyStatus === 1) {
          roomStatus = 'booked'
        }
        return (
          <RoomRow key={index} room={roomNumber(aRoom)} occupancy={occupancyNumber(aRoom.headCount)} capacity={20} status={roomStatus} />
        )
      })}
    </div>
  )

  //───────────────────────────────────
  function roomNumber(aRoom) {
    return `${aRoom.floor}${aRoom.ward}${aRoom.roomID}`
  }

  //───────────────────────────────────
  function occupancyNumber(headCount) {
    let array = headCount.split(',')
    array = array.filter(num => num === '1')
    return array.length
  }

  //───────────────────────────────────
  function handleChange(event) {
    setMessage(event.target.value);
  };
}

export default RoomList

//──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const styles = {
  input: {
    width: '100%',
    fontSize: 25,
    padding: '2rem'
  },
  logList: {
    ...Scroll,
    height: '92rem'
  }
}