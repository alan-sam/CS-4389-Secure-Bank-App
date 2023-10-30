import React from 'react';
import { 
  Typography, 
  Card, 
  CardContent, 
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText
}  from '@mui/material';


const user = {
  name: 'John Doe',
  accountNumber: '1234567890',
  routingNumber: '0987654321',
  balance: 3500.25,
  transactions: [
    { id: 1, date: '2022-01-01', description: 'Paycheck deposit', amount: 1000 },
    { id: 2, date: '2022-01-05', description: 'Debit card purchase', amount: -45.20 },
    { id: 3, date: '2022-01-07', description: 'Online transfer', amount: -200 },
    // more transactions
  ] 
};

export default function Account() {
  
  return (
    <Card>
      <CardHeader 
        title={
          <Typography variant="h5">
            Checking Account
          </Typography>
        }
      />
      
      <CardContent>
        <Typography variant="h4">
          {user.name}
        </Typography>
        
        <Typography variant="subtitle1">
          Account Number: {user.accountNumber}
        </Typography>
        
        <Typography variant="subtitle1">
          Routing Number: {user.routingNumber}
        </Typography>
        
        <Divider />
        
        <Typography variant="h5">
          Balance: ${user.balance}
        </Typography>
        
        <Divider />
        
        <List>
          {user.transactions.map(t => (
            <ListItem key={t.id}>
              <ListItemText
                primary={t.description}
                secondary={`${t.amount} - ${t.date}`} 
              />
            </ListItem>
          ))}
        </List>
        
      </CardContent>
    </Card>
    
  );
}