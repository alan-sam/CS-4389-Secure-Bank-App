import React from 'react';
import Dashboard from "../dash";
import {
  Typography, Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Grid, Paper, Avatar
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

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

export default function Account() {
  const balanceColor = user.balance >= 0 ? 'green' : 'red';
  return (
      <div className = 'dash' style={{display: 'flex'}}>
        <Dashboard></Dashboard>
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
                        secondary={<Typography style={{ color: t.amount < 0 ? 'red' : 'green'}}>{t.amount >= 0 ? '+' : ''}{t.amount.toFixed(2)}</Typography>}
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
