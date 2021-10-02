import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupIcon from '@mui/icons-material/Group';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import TransactionIcon from '@mui/icons-material/Mail';
import logo from '../assets/images/sp-logo11.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaceIcon from '@mui/icons-material/Place';
import CardIcon from '@mui/icons-material/SdCard';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import TruckIcon from '@mui/icons-material/LocalShipping';
import TankIcon from '@mui/icons-material/DoorFront';
import UserIcon from '../assets/icons/profile.png';
import TransactionsTotal from '../components/Transactions/pages/TransactionsTotal';
import TransactionsPlot from '../components/Transactions/pages/TransactionsPlot';
import UsersTotal from '../components/Users/pages/UsersTotal';
import StationsMap from '../components/Stations/pages/StationsMap';

const drawerWidth = 220;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 5),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export const Sidebar = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
    setOpen(true);
    };

    const handleDrawerClose = () => {
    setOpen(false);
    };

    return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} className="AppBar">
            <Toolbar className="Toolbar" >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    className="IconButton1"
                >
                <MenuIcon style={{ fontSize: '60px' }} />
                </IconButton>
                <img src={logo} alt="logo" className="logo" />
                <Typography variant="h6" noWrap component="div" className="title">
                    SOCIÉTÉ PETROLIÈRE (SP) LTD
                </Typography>
                <div style={{ margin: '0 0 0 43vw' }}>
                    <Typography variant="h6" noWrap component="div" className="title">
                        Angelus N.
                    </Typography>
                </div>
                <div
                    className="profileWrapper"
                >
                    <img src={UserIcon} alt="UserIcon" className="userIcon" />
                </div>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
            >
            <DrawerHeader style={{ height: '91px' }} >
                <IconButton onClick={handleDrawerClose} 
                    style={{ color: '#1E92E5' }} 
                >
                    {theme.direction === 'ltr' 
                        ? 
                        <ChevronLeftIcon style={{ fontSize: '60px' }} /> 
                        : 
                        <ChevronRightIcon style={{ fontSize: '60px' }} />
                    }
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List className="list" >
                <ListItem button style={{ background: '#F9FE06' }}>
                    <ListItemIcon>
                        <AnalyticsIcon className="CommonIcon" />
                    </ListItemIcon>
                    <ListItemText primary='Dashboard' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <CardIcon className="CommonIcon" />
                    </ListItemIcon>
                    <ListItemText primary='Cards' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <GroupsIcon className="CommonIcon" />
                    </ListItemIcon>
                    <ListItemText primary='Customers' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <GroupIcon className="CommonIcon" />
                    </ListItemIcon>
                    <ListItemText primary='Drivers' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <InboxIcon className="CommonIcon" />
                    </ListItemIcon>
                    <ListItemText primary='Off-Loading Bays' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <FireplaceIcon className="CommonIcon" />
                    </ListItemIcon>
                    <ListItemText primary='Products' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <TankIcon className="CommonIcon" />
                    </ListItemIcon>
                    <ListItemText primary='Tanks' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <TruckIcon className="CommonIcon" />
                    </ListItemIcon>
                    <ListItemText primary='Trucks/Trailers' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <TransactionIcon className="CommonIcon" />
                    </ListItemIcon>
                    <ListItemText primary='Transactions' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <LocalGasStationIcon className="CommonIcon" />
                    </ListItemIcon>
                    <ListItemText primary='Stations' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <PlaceIcon className="CommonIcon" />
                    </ListItemIcon>
                    <ListItemText primary='Map' />
                </ListItem>
            </List>
            <Divider />
            <List  className="list" >
                <ListItem button >
                    <ListItemIcon>
                        <AccountCircleIcon className="CommonIcon" />
                    </ListItemIcon>
                    <ListItemText primary='Profile' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <SettingsIcon className="CommonIcon" />
                    </ListItemIcon>
                    <ListItemText primary='Settings' />
                </ListItem>
                <ListItem button 
                    className="signoutButton" >
                    <ListItemIcon>
                        <ExitToAppIcon className="ExitToAppIcon" />
                    </ListItemIcon>
                    <ListItemText primary='Sign Out' className="signout" />
                </ListItem>
            </List>
        </Drawer>
        <Main open={open} >
            <DrawerHeader />
            <div className="contentWrapper" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridGap: '20px',
                margin: '40px 0 0 10px'
            }}>
                <TransactionsTotal />
                <TransactionsPlot />
                <StationsMap />
                <UsersTotal />
            </div>
        </Main>
    </Box>
    );
}

export default Sidebar;
