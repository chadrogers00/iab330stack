export const Colors = {
    background: '#FAFAFA',
    blueTheme: '#009dff',
    greenTheme: '#00f2ec',
    fontWhite: '#ffffff',
    fontdark: '#343E55',
    tileBackground: '#F0F0F0',
    tileBackgroundDark: '#343E55',
    iconRed: '#DC143C'
}

export const container = {
    marginLeft: '4rem',
    marginRight: '4rem'
}

export const Scroll = {
    overflow: 'auto',
    overflowY: 'auto',
    overflowX: 'hidden',
    '&::WebkitScrollbar': {
      width: '0.2rem'
    },
    '&::WebkitScrollbarTrack': {
      backgroundColor: Colors.background
    },
    '&::WebkitScrollbarTrack': {
      backgroundColor: Colors.fontdark
    }
  }

  export const Divider = {
    backgroundColor: Colors.blueTheme,
    height: '0.08rem',
    width: '100%',
    border: 'no-border',
    margin: '2rem 0'
  }