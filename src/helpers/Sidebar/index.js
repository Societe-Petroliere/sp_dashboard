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
import MailIcon from '@mui/icons-material/Mail';
import logo from '../../assets/images/sp-logo11.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaceIcon from '@mui/icons-material/Place';
import CardIcon from '@mui/icons-material/SdCard';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import TruckIcon from '@mui/icons-material/LocalShipping';
import TankIcon from '@mui/icons-material/DoorFront';

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
    padding: theme.spacing(0, 1),
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
            <Toolbar
                className="Toolbar"
            >
                <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                className="IconButton1"
                // style={{ fontSize: '200px', background: 'orange' }}
                >
                <MenuIcon style={{ fontSize: '60px' }} />
                </IconButton>
                <img src={logo} alt="logo" className="logo" />
                <Typography variant="h6" noWrap component="div" className="title">
                    SOCIÉTÉ PETROLIÈRE (SP) LTD
                </Typography>
                <div style={{ margin: '0 0 0 45vw' }}>
                <Typography variant="h6" noWrap component="div" className="title">
                    Dashboard
                </Typography>
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
            <List
                className="list"
            >
                <ListItem button >
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
                        <MailIcon className="CommonIcon" />
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
            <List 
                className="list"
            >
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
        <Main open={open}>
            {/* <DrawerHeader /> */}
            {/* <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography> */}
        </Main>
    </Box>
    );
}

export default Sidebar;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 220;

// export const Sidebar = () => {
//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar
//             position="fixed"
//             sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
//             >
//             <Toolbar style={{ background: '#FFFFFF' }}>
//                 <Typography variant="h5" style={{ color: '#1E92E5' }}>
//                     SOCIÉTÉ PETROLIÈRE (SP) LTD
//                 </Typography>
//                 <Typography variant="h5" style={{ color: '#1E92E5' }}>
//                     DASHBOARD 
//                 </Typography>
//                 <Typography variant="h5" style={{ color: '#1E92E5' }}>
//                     STATISTICS
//                 </Typography>
//             </Toolbar>
//             </AppBar>
//             <Drawer
//             sx={{
//                 width: drawerWidth,
//                 flexShrink: 0,
//                 '& .MuiDrawer-paper': {
//                     width: drawerWidth,
//                 boxSizing: 'border-box',
//                 },
//             }}
//             variant="permanent"
//             anchor="left"
//             >
//             <Toolbar />
//             <Divider />
//             <List style={{ background: '#1E92E5' }}>
//                 {['Dashboard', 'Cards', 'Customers', 'Drivers', 'Loading Bays', 'Off-Loading Bays', 'Products', 'Tanks', 'Trailers', 'Transactions', 'Trucks', 'Map'].map((text, index) => (
//                     <ListItem button key={text}>
//                     <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                     </ListItemIcon>
//                     <ListItemText primary={text} />
//                 </ListItem>
//                 ))}
//             </List>
//             <Divider />
//             <List style={{ background: '#1E92E5' }}>
//                 {['Profile', 'Settings', 'Help', 'Sign Out'].map((text, index) => (
//                     <ListItem button key={text}>
//                     <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                     </ListItemIcon>
//                     <ListItemText primary={text} />
//                 </ListItem>
//                 ))}
//             </List>
//             </Drawer>
//             <Box
//             component="main"
//             sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
//             >
//             <Toolbar />
//             <Typography paragraph>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//                 tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//                 enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//                 imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//                 Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//                 Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//                 adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//                 nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//                 leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//                 feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//                 consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//                 sapien faucibus et molestie ac.
//             </Typography>
//             <Typography paragraph>
//                 Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//                 eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//                 neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//                 tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//                 sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//                 tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//                 gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//                 et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//                 tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//                 eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//                 posuere sollicitudin aliquam ultrices sagittis orci a.
//             </Typography>
//             </Box>
//         </Box>
//     );
// }

// export default Sidebar;

