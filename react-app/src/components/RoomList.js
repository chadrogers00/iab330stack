
import moment from "moment";
import RoomRow from "./RoomRow"

const RoomList = () => {

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
      bookingEnd: moment().format('LT')
    },
    {
      room: '605',
      occupancy: 3,
      capacity: 10,
      status: 'avaliable',
      bookingEnd: moment().format('LT')
    },
    {
      room: '606',
      occupancy: 0,
      capacity: 10,
      status: 'avaliable',
      bookingEnd: moment().format('LT')
    },
  ]

  return (
    <div style={{padding: '0 1rem'}}>
      {mock.map(aRoom => {
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
          <RoomRow room={aRoom.room} occupancy={aRoom.occupancy} capacity={aRoom.capacity} status={roomStatus} bookingEnd={aRoom.bookingEnd}/>
        )
      })}
    </div>
  )
}

export default RoomList