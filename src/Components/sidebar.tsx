'use client'
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import   {makeStyles, Theme, createTheme}  from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrafficIcon from '@mui/icons-material/Traffic';
import LockIcon from '@mui/icons-material/Lock';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { ThemeProvider } from '@emotion/react';
import { Typography } from '@mui/material';

// const useStyles = makeStyles ({
  
//   root: {
//     display: 'flex',
//   },
//   drawer: {
//     width: 240,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: 240,
//   },
// });
const themeStyles = () => {
  
}

const Sidebar = () => {
//   const classes = useStyles();

  const menuItems = [
    { text: 'Main dashboard', icon: <DashboardIcon />, href: '#', active: true },
    { text: 'NFT Marketplace', icon: <TrafficIcon />, href: '#',  },
    { text: 'Datatables', icon: <LockIcon />, href: '' },
    { text: 'Profile', icon: <ShowChartIcon />, href: '#' },
    { text: 'Sign In', icon: <PieChartIcon />, href: '#' },
    { text: 'RTL Admin', icon: <BarChartIcon />, href: '#' },
  ];

  return (
    // <ThemeProvider theme={theme}>
      <Drawer
      // className={classes.drawer}
      variant="permanent"
      // classes={{
      //   paper: classes.drawerPaper,
      // }}
    ><Typography variant='h5' fontWeight={'bold'} marginTop={'40px'} width={'300px'} marginLeft={'40px'}>HORIZON ZERO</Typography>
    <Typography component={'hr'} height={'10px'} margin={'10px'} ></Typography>
      {/* <div className={classes.toolbar} /> */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component="a" href={item.href} selected={item.active}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
    /* </ThemeProvider> */
  );
};

export default Sidebar;
