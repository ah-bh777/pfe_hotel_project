import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import CarouselPics from './home';
import SelectRoom from './selectionPage';
import ResConfirmation from "./confirmationPage";

const pages = ['Home', 'Reserver', 'Confirmer'];
const settings = ['Profil', 'Compte', 'Tableau de bord', 'Déconnexion'];

export default function FrontPage({ logout }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = page => {
    setAnchorElNav(null);
    if (page === 'Home') {
      navigate('/FrontPage/home');
    } else if (page === 'Reserver') {
      navigate('/FrontPage/select');
    } else if (page === 'Confirmer') {
      navigate('/FrontPage/confirm');
    }
  };

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
    window.location.reload();
  };

  const handleUserMenuClick = setting => {
    if (setting === 'Déconnexion') {
      handleLogout();
    } else {
      handleCloseUserMenu();
    }
  };

  return (
    <>
      <AppBar position="static" color="inherit">
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} disableGutters>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="open menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
              >
                {pages.map(page => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                    <Typography variant="body1">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CONTINENTAL
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color="inherit" onClick={() => navigate('/FrontPage/home')} style={{ color: 'black' }}>{pages[0]}</Button>
              <Button color="inherit" onClick={() => navigate('/FrontPage/select')} style={{ color: 'black' }}>{pages[1]}</Button>
              <Button color="inherit" onClick={() => navigate('/FrontPage/confirm')} style={{ color: 'black' }}>{pages[2]}</Button>
            </Box>

            <Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="/static/images/avatar.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                id="user-menu-appbar"
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem key={setting} onClick={() => handleUserMenuClick(setting)}>
                    <Typography variant="body1">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Routes>
        <Route path="/home" element={<CarouselPics />} />
        <Route path="/select" element={<SelectRoom />} />
        <Route path="/confirm" element={<ResConfirmation />} />
      </Routes>
    </>
  );
}
