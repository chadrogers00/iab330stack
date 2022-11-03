import RoomList from "../components/RoomList"
import TitleBar from "../components/TitleBar"
import { container } from "../utilities/GlobalStyles"
import { CssBaseline } from '@mui/material';

const RoomsPage = () => {
  return (
    <div>
      <CssBaseline />
      <TitleBar title="Rooms"/>
      <RoomList />
    </div>
  )
}

export default RoomsPage