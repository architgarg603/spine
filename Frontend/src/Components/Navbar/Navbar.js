import * as React from 'react';
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
import logo from '../../Assets/logo.png'
import style from './Navbar.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import dp from '../../Assets/dp.png'

const pages = ['Home', 'Resources', 'Dashboard'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
        navigate("/profile")
    };

    const handleCloseNavMenu = (link) => {
        setAnchorElNav(null);
        if (link) navigate("/" + link)
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    let token = localStorage.getItem("token")
    return (
        <AppBar position="static" sx={{
            width: "100%", display: "flex", justifyContent: "flex-end",
            background: (location.pathname != '/' || location.pathname == '/signup') ? '#FFE9DD' : "#C57B57",
            boxShadow: "none"
        }}>
            <Container maxWidth="xl" sx={{ background: "white", width: "85%", marginLeft: "15%", boxShadow: "5px 2px 4px -1px rgb(0 0 0 / 20%), 5px 4px 5px 0px rgb(0 0 0 / 14%), 5px 1px 10px 0px rgb(0 0 0 / 12%)" }}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src={logo} style={{ height: "70px" }} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
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
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {token && pages.map((page) => {
                                return (<MenuItem key={page} onClick={() => { handleCloseNavMenu(page) }}>
                                    <Typography textAlign="center" sx={{ color: "black", marginRight: "50px" }} className={style.head}>{page}</Typography>
                                </MenuItem>)
                            })}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src={logo} style={{ height: "70px" }} />
                    </Typography>
                    <Box sx={{
                        flexGrow: 1, display: { xs: 'none', md: 'flex' },
                        alignItems: "center"
                    }}>
                        {token && pages.map((page) => {
                            return (
                            <Button
                                key={page}
                                onClick={() => { handleCloseNavMenu(page) }}
                                sx={{
                                    my: 2, color: 'black', display: 'block', fontWeight: "bold", marginRight: "50px",
                                }}

                                className={style.head}
                            >
                                {page}
                            </Button>
                        )})}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {token ?
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={dp} />
                            </IconButton>
                            : <div className={style.loginBtn} onClick={() => navigate("/login")}>Login</div>}

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
