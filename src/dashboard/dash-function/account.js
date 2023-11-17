import React from 'react';
import Dashboard from "../dash";
import {
  Typography, Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Grid, Paper, Avatar
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// User object with checking and savings accounts
const user = {
  name: 'Rajas Kothari',
  accounts: {
    checking: {
      accountNumber: '1234567890',
      routingNumber: '0987654321',
      balance: 3500.25,
      transactions: [
        // Checking account transactions...
      ]
    },
    savings: {
      accountNumber: '9876543210',
      routingNumber: '123456789',
      balance: 10000.00,
      transactions: [
        // Savings account transactions...
      ]
    }
  }
};

export default function Account() {
  // Function to determine the color based on the balance
  const getBalanceColor = balance => balance >= 0 ? 'green' : 'red';

  // Function to render account details
  const renderAccountDetails = (account, title) => (
    <>
      <Typography variant="h6">{title}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Account Number: {account.accountNumber}</Typography>
          <Typography variant="subtitle1">Routing Number: {account.routingNumber}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '1em', textAlign: 'center', backgroundColor: getBalanceColor(account.balance), color: 'white' }}>
            <AttachMoneyIcon fontSize="large" />
            <Typography variant="h5">Balance: ${account.balance.toFixed(2)}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );

  return (
    <div className='dash' style={{ display: 'flex' }}>
      <Dashboard></Dashboard>
      <Card style={{ width: '50%', margin: '2em auto', padding: '1em', backgroundColor: '#f5f5f5' }}>
        <CardHeader
          avatar={
            <Avatar style={{ backgroundColor: getBalanceColor(user.accounts.checking.balance) }}>
              <AccountBalanceIcon />
            </Avatar>
          }
          title={<Typography variant="h5">Accounts Overview</Typography>}
        />

        <CardContent>
          {/* Checking Account Section */}
          {renderAccountDetails(user.accounts.checking, "Checking Account")}
          <Divider style={{ margin: '1em 0' }}/>

          {/* Savings Account Section */}
          {renderAccountDetails(user.accounts.savings, "Savings Account")}
          <Divider style={{ margin: '1em 0' }}/>

          {/* Transactions could be listed here if needed */}
        </CardContent>
      </Card>
    </div>
  );
}
