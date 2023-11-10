import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Drawer, Button, Box, Typography, CssBaseline } from '@mui/material';
import { AccountBox, ListAlt, ExitToApp, Send } from '@mui/icons-material';
import {
   Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Grid, Paper, Avatar
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import '../App.css';

function Dashboard() {
  // State for handling drawer open/close
  const [openDrawer, setOpenDrawer] = useState(false);

  // Router navigation
  const navigate = useNavigate();

  // Dummy data for current amount
  const currentAmount = 10000;  // You can fetch this from your backend or state

  // Function to handle logout
  const handleLogout = () => {
    // Redirecting user to the login page
    navigate('/');
  };
  const user = {
    name: 'Rajas Kothari',
    accountNumber: '1234567890',
    routingNumber: '0987654321',
    balance: 3500.25,
    transactions: [
      { id: 1, date: '2023-10-25', description: 'Paycheck deposit', amount: 1000 },
      { id: 2, date: '2023-10-26', description: 'Debit card purchase', amount: -45.20 },
      { id: 3, date: '2023-10-27', description: 'Online transfer', amount: -200 },
      { id: 4, date: '2023-10-28', description: 'Refund', amount: 50 },
    ]
  };
  const balanceColor = user.balance >= 0 ? 'green' : 'red';
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
        
        {/* Welcome Message */}
        {openDrawer && <Typography variant="h6" sx={{ paddingLeft: 2, color: 'white', paddingBottom: 2 }}>Welcome, Rajas</Typography>}

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            flexGrow: 1 
          }}
        >
          {renderDrawerButton(<AccountBox />, 'Account', '/dashboard')}
          {renderDrawerButton(<ListAlt />, 'Transactions', '/dashboard/transactions')}
          {renderDrawerButton(<Send />, 'Transfer', '/dashboard/transfer')}
          {renderDrawerButton(<Send/>, 'Contact', '/dashboard/Contact')}
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
      
      <Card style={{ width: '50%', margin: '2em auto', padding: '1em', backgroundColor: '#f5f5f5' }}>
      <CardHeader 
        avatar={
          <Avatar style={{ backgroundColor: balanceColor }}>
            <AccountBalanceIcon />
          </Avatar>
        }
        title={<Typography variant="h5">Checking Account</Typography>}
      />
      
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h4">{user.name}</Typography>
            <Typography variant="subtitle1">Account Number: {user.accountNumber}</Typography>
            <Typography variant="subtitle1">Routing Number: {user.routingNumber}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ padding: '1em', textAlign: 'center', backgroundColor: balanceColor, color: 'white' }}>
              <AttachMoneyIcon fontSize="large" />
              <Typography variant="h5">Balance: ${user.balance.toFixed(2)}</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Divider style={{ margin: '1em 0', backgroundColor: '#333' }}/>

        <List>
            {user.transactions.map(t => (
                <ListItem key={t.id}>
                  <ListItemText
                    primary={t.description}
                    secondary={`${t.amount >= 0 ? '+' : ''}${t.amount.toFixed(2)}`}
                    style={{ textAlign: 'left' }}
                  />
                  <ListItemText
                    primary={t.date}
                    style={{ textAlign: 'right' }}
                  />
                </ListItem>
              ))}
        </List>

        
      </CardContent>
    </Card>

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