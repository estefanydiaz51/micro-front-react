import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { NavBar, SideBar } from '../../ui/components';

const drawerWidth = 240;

export const AppLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex'}}>
      {/* Navbar */}

      <NavBar drawerWidth={ drawerWidth } />
      {/* SideBar */}
      <SideBar drawerWidth={ drawerWidth } />
      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3}}
      >
        <Toolbar />
        { children }
      </Box>
    </Box>
  )
}

