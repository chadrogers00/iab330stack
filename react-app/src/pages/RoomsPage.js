import Room from "../components/Room"
import TitleBar from "../components/TitleBar"
import Subheadings from "../components/Subheadings"
import { container } from "../utilities/GlobalStyles"
import { CssBaseline } from '@mui/material';

const RoomsPage = () => {
  return (
    <div>
      <CssBaseline />
      <TitleBar title="Rooms"/>
      <Subheadings />
      <Room />
    </div>
  )
}

export default RoomsPage