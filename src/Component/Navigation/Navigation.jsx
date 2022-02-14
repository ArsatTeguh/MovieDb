import * as React from 'react'
import Box from '@mui/material/Box'
import {Container} from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
// import {makeStyles} from '@mui/styles'

// const useStyle = makeStyles({
//     breakpoints:{

//     }
// })

function Navigation() {
  const [value, setValue] = React.useState(0);

  return (
      <Container>
    <Box sx={{marginTop:5}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
    </Container>
  );
}

export default Navigation