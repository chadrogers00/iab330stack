import React, {useEffect, useState} from "react";
import { Link as RouterLink, useNavigate, useLocation} from "react-router-dom";
import { Colors } from '../utilities/GlobalStyles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home'
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
export const BottomNav = () => {
  const [value, setValue] = useState(null);
  const location = useLocation();

  useEffect(() => {
    handleUrlChange(location.pathname)
  }, [location.pathname])

  if (value === null) {
    <div></div>
  }
  return (
    <ThemeProvider theme={theme}>
      <div style={styles.bottomNavigationSection}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={styles.styledBottomNavigation}
        >
          <BottomNavigationAction component={RouterLink} to="/" label="Dashboard" icon={<HomeIcon sx={styles.styledNavButtons}/>} />
          <BottomNavigationAction component={RouterLink} to="/rooms" label="Rooms" icon={<DoorSlidingIcon sx={styles.styledNavButtons}/>} />
          <BottomNavigationAction component={RouterLink} to="/logs" label="Logs" icon={<FormatListBulletedIcon sx={styles.styledNavButtons}/>} />
          <BottomNavigationAction component={RouterLink} to="/settings" label="Settings" icon={<SettingsIcon sx={styles.styledNavButtons}/>} disabled/>
        </BottomNavigation>
      </div>
    </ThemeProvider>
  );

  //───────────────────────────────────
  function handleUrlChange(currentUrl) {
    if(currentUrl === '/'){
      setValue(0);
    }
    else if(currentUrl === '/rooms'){
      setValue(1);
    }
    else if(currentUrl === '/logs'){
      setValue(2);
    }
    else if(currentUrl === '/settings'){
      setValue(3);
    }
    else{
      setValue(4);
    }
  }
}

  

//──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const theme = createTheme({
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          height: '130px',
          maxWidth: '25%',
        },
        label: {
          color: Colors.primary1Faded,
          fontSize: '1.2rem'
        }
      }
    }
  }
})


//──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const styles = {
  bottomNavigationSection: {
    position: 'fixed',
    backgroundColor: Colors.background,
    bottom: '7rem',
    left: 0,
    right: 0,
    padding: '0 4%',
    height: '5rem',
  },
  styledNavButtons: {
    fontSize: '4rem',
    color: Colors.whiteFaded
  },
  styledNavButtonsDisabled: {
    fontSize: '4rem',
    color: Colors.disabled
  },
  styledBottomNavigation: {
    backgroundColor: 'transparent',
    width: '100%',
    ".Mui-selected": {
      fontSize: '1.5rem!important',
      color: Colors.primary1,
    },
    ".Mui-selected > svg": {
      color: Colors.white,
    }
  }
}
