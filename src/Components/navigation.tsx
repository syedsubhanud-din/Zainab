
'use client' 
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import zIndex from '@mui/material/styles/zIndex';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const themeStyles = () => {
  return {
    AppBar: {
      zIndex: zIndex.drawer + 1
    }
  }
}

export default function Navigationbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{zIndex : 'drawer' + 1}}>
        <Breadcrumbs sx={{marginLeft:'30px'}}>
          <Link underline="hover" color="inherit" >
            Pages
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
          >
            Main Dashboard
          </Link>
        </Breadcrumbs>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color={'black'}
            fontWeight={500}
            fontSize={30}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Main Dashboard
          </Typography>
          <Search sx={{ display: 'flex' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton>
            <NotificationsNoneIcon fontSize='small' />
          </IconButton>
          <IconButton>
            <ErrorOutlineIcon fontSize='small' />
          </IconButton>
          <IconButton>
            <ColorLensIcon fontSize='small' />
          </IconButton>
          {/* <Button variant='contained' color="info" fontSize='small' style={{ borderRadius: '50%', width: '5px', height: '30px', fontSize: 'medium', backgroundColor :'rgb(17, 4, 122)'}}  >
            AP
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

