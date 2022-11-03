import { BottomNavigation, Box, Container, CssBaseline, Divider } from '@mui/material';
import {Colors} from "../utilities/GlobalStyles"
import { BottomNav } from './BottomNav';
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';

const BaseLayout = () => {
  console.log(Colors.background)
  return(
    <div>
      <CssBaseline />
      <Box sx={styles.background} >
        <SideMenu/>
        <Outlet />
        <BottomNav/>
      </Box>   
    </div>
  )
}

const styles = {
  background: {
    minHeight: '100vh',
    backgroundColor: Colors.background
  }
}

export default BaseLayout