import { BottomNavigation, Box, Container, CssBaseline, Divider } from '@mui/material';
import {Colors} from "../utilities/GlobalStyles"
import { BottomNav } from './BottomNav';
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';

const BaseLayout = () => {
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

export default BaseLayout

//──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const styles = {
  background: {
    minHeight: '100vh',
    backgroundColor: Colors.background
  }
}

