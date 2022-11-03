
import moment from "moment";
import _ from 'lodash'
import {useState} from 'react';
import { Scroll } from "../utilities/GlobalStyles";
import RoomRow from "./RoomRow"
import { Input } from "@mui/material";

const RoomList = () => {
  const [filterText, setMessage] = useState('');
  
  const mock = [
    {
      room: '601',
      occupancy: 5,
      capacity: 10,
      status: 'booked',
      bookingEnd: moment().format('LT')
    },
    {
      room: '602',
      occupancy: 5,
      capacity: 10,
      status: 'booked',
      bookingEnd: moment().format('LT')
    },
    {
      room: '603',
      occupancy: 0,
      capacity: 10,
      status: 'booked',
      bookingEnd: moment().format('LT')
    },
    {
      room: '604',
      occupancy: 1,
      capacity: 10,
      status: 'avaliable',
      bookingEnd: ''
    },
    {
      room: '605',
      occupancy: 3,
      capacity: 10,
      status: 'avaliable',
      bookingEnd: ''
    },
    {
      room: '606',
      occupancy: 0,
      capacity: 10,
      status: 'avaliable',
      bookingEnd: ''
    },
  ]


  const filteredData = _.filter(mock, rec => {
    const result = rec.room.substring(0, filterText.length) === filterText || filterText === ''
    return result
  })
  const handleChange = event => {
    setMessage(event.target.value);
  };

  return (
    <div style={{padding: '0 1rem'}}>
      <Input placeholder="Room Number" onChange={handleChange} value={filterText} sx={styles.input}/>
      {filteredData.map((aRoom, index) => {
        let roomStatus;
        if(aRoom.status === 'avaliable'){
          roomStatus = 'avaliable'
        }
        else if(aRoom.status === 'booked' && aRoom.occupancy === 0){
          roomStatus = 'empty'
        }
        else if(aRoom.status === 'booked'){
          roomStatus = 'booked'
        }

        return(
          <RoomRow key={index} room={aRoom.room} occupancy={aRoom.occupancy} capacity={aRoom.capacity} status={roomStatus} bookingEnd={aRoom.bookingEnd}/>
        )
      })}
    </div>
  )
}

export default RoomList

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