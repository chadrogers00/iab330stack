import LogsRow from "./LogsRow"
import Input from '@mui/material/Input';
import _ from 'lodash'
import {useState} from 'react';
import { Scroll } from "../utilities/GlobalStyles";

const LogsList = () => {
  const [filterText, setMessage] = useState('');

  const mock = [{
    room: "#601",
    time: "6:00 PM",
    date: "12 October 2022",
    status: "User has changed status of room from Empty to Unavailable."
  },
  {
    room: "#602",
    time: "8:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#602",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#602",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#605",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#605",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#605",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#605",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#605",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#605",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#605",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#605",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#605",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#605",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#605",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#605",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },
  {
    room: "#620",
    time: "9:00 PM",
    date: "12 October 2022",
    status: "This room is currently not being utilised."
  },]

  
  const filteredData = _.filter(mock, rec => {
    const result = rec.room.substring(0, filterText.length+1) === '#' + filterText || filterText === ''
    return result
  })
  const handleChange = event => {
    setMessage(event.target.value);
  };

  return(
    <div style={{padding: '0 1rem'}}>
      <Input placeholder="Room Number" onChange={handleChange} value={filterText} sx={styles.input}/>
      <div style={styles.logList}>
        {filteredData.map((aRoom, index) => {
          return(
              <LogsRow key={index} room={aRoom.room} time={aRoom.time} date={aRoom.date} status={aRoom.status}/>
          )
        })}
      </div>
    </div>
  )

  
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
    height: '92rem'
  }
}