import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Drawer, Button, Box, CssBaseline } from '@mui/material';
import { AccountBox, ListAlt, ExitToApp, Send } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Dashboard() {
  // State for handling drawer open/close
  const [openDrawer, setOpenDrawer] = useState(false);

  // Router navigation
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Redirecting user to the login page
    navigate('/');
  };

  // Function to render a button for the drawer
  const renderDrawerButton = (icon, label, path) => (
    <Button 
      startIcon={icon}
      sx={{
        textTransform: 'none',
        justifyContent: 'flex-start',
        padding: '10px 16px',
        color: 'white'
      }}
      component={Link}
      to={path}
    >
      {openDrawer && label}
    </Button>
  );

  return (
    <div className="desh">
      <CssBaseline />

      {/* Main Toolbar */}
      <Toolbar />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        open={openDrawer}
        onMouseEnter={() => setOpenDrawer(true)}
        onMouseLeave={() => setOpenDrawer(false)}
        sx={{
          width: 240,
          '& .MuiDrawer-paper': {
            width: 240,
            transition: '.3s',
            overflowX: 'hidden',
            backgroundColor: '#f57c00',
            width: openDrawer ? 240 : 60,
          }
        }}
      >
        {/* Additional Toolbar inside Drawer */}
        <Toolbar />

        {/* Drawer content */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            flexGrow: 1 
          }}
        >
          {renderDrawerButton(<AccountBox />, 'Account', '/dashboard/account')}
          {renderDrawerButton(<ListAlt />, 'Transactions', '/dashboard/transactions')}
          {renderDrawerButton(<Send />, 'Transfer', '/dashboard/transfer')}
        </Box>

        {/* Logout Button */}
        <Button 
          startIcon={<ExitToApp />}
          onClick={handleLogout}
          sx={{
            textTransform: 'none',
            justifyContent: 'flex-start',
            padding: '10px 16px',
            color: 'white'
          }}
        >
          {openDrawer && 'Logout'}
        </Button>
      </Drawer>
      
    </div>
  );
}

export default Dashboard;






//--------------------------------------------------------------------
// import React, { useState } from 'react';
// import { 
//   AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, 
//   Container, Paper, Grid, Card, CardContent, CardHeader, LinearProgress, Box, Button 
// } from '@mui/material';
// import { AccountBalance, AttachMoney, ShowChart, ExitToApp } from '@mui/icons-material';

// function Dashboard() {
//   const [selectedIndex, setSelectedIndex] = useState(-1);

//   const handleListItemClick = (index) => {
//     setSelectedIndex(index);
//   };

//   return (
//     <Box sx={{ display: 'flex', fontFamily: 'Arial, sans-serif' }}>
//       {/* AppBar */}
//       <AppBar position="fixed">
//         <Toolbar>
//           <Typography variant="h6" sx={{ fontWeight: 600 }}>Comet Bank</Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar */}
//       <Drawer
//         variant="permanent"
//         anchor="left"
//         sx={{
//           width: 240,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: 240,
//             boxSizing: 'border-box',
//           }
//         }}
//       >
//         <Toolbar />
//         <List>
//           {['Accounts', 'Transactions', 'Transfer', 'Logout'].map((text, index) => (
//             <ListItem 
//               button 
//               key={text}
//               selected={selectedIndex === index}
//               onClick={() => handleListItemClick(index)}
//               sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
//             >
//               <ListItemIcon>
//                 {[<AccountBalance />, <AttachMoney />, <ShowChart />, <ExitToApp />][index]}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>

//       {/* Main Content */}
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />
//         <Container>
//           <Grid container spacing={3}>
//             {/* Account Details */}
//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardHeader title="Account Details" />
//                 <CardContent>
//                   <Typography variant="body1">Name: John Doe</Typography>
//                   <Typography variant="body1">Account No: XXXX-XXXX-XXXX-1234</Typography>
//                   <Typography variant="body1">Balance: $15,000</Typography>
//                   <Button variant="outlined" style={{ marginTop: '20px' }}>View Details</Button>
//                 </CardContent>
//               </Card>
//             </Grid>

//             {/* Savings & Checking */}
//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardHeader title="Savings & Checking" />
//                 <CardContent>
//                   <Typography variant="body1">Savings: $10,000</Typography>
//                   <Typography variant="body1">Checking: $5,000</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             {/* Graph of Spending */}
//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardHeader title="Spending Analysis" />
//                 <CardContent>
//                   <Paper elevation={0} style={{ marginBottom: 16 }}>
//                     <Typography variant="h6">This Month</Typography>
//                     <LinearProgress variant="determinate" value={70} />
//                   </Paper>
//                   <Typography variant="body1">70% of your budget spent this month.</Typography>
//                   {/* Insert graph of user spending here */}
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// }

// export default Dashboard;