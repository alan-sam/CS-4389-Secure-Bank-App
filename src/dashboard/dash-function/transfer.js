import React, { useState } from 'react';
import Dashboard from "../dash";
import {
  Typography, Card, CardContent, CardHeader, Divider, Grid, Avatar
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const accounts = [
  {
    name: 'Rajas Kothari',
    accountNumber: '1234567890',
    routingNumber: '0987654321',
    balance: 3500.25,
    transactions: [
      { id: 4, date: '2023-10-28', description: 'Netflix subscription', amount: -16.99 },
      { id: 4, date: '2023-10-28', description: 'Refund', amount: 50 },
      { id: 3, date: '2023-10-27', description: 'Online transfer', amount: -200 },
      { id: 2, date: '2023-10-26', description: 'Debit card purchase', amount: -45.20 },
      { id: 1, date: '2023-10-25', description: 'Paycheck deposit', amount: 1000 }
    ]
  },
  {
    name: 'Savings Account',
    accountNumber: '9876543210',
    routingNumber: '0123456789',
    balance: 5000.75,
    transactions: [
      { id: 3, date: '2023-10-28', description: 'Interest earned', amount: 10.50 },
      { id: 2, date: '2023-10-27', description: 'Deposit', amount: 2000 },
      { id: 1, date: '2023-10-26', description: 'Withdrawal', amount: -100 }
    ]
  }
];

export default function Transfer() {
  const [senderAccount, setSenderAccount] = useState(accounts[0]);
  const [receiverAccount, setReceiverAccount] = useState(accounts[1]);
  const [transferAmount, setTransferAmount] = useState('');
  const [transferSuccess, setTransferSuccess] = useState(false); // Added state for transfer success

  const handleTransfer = () => {
    const amount = parseFloat(transferAmount);

    if (isNaN(amount) || amount <= 0) {
      console.error('Invalid amount');
      return;
    }

    const success = transferAmountFunction(senderAccount, receiverAccount, amount);

    if (success) {
      console.log('Transfer successful');
      setTransferSuccess(true); // Set state to true for displaying success message
      // You may want to update the UI or perform other actions after a successful transfer
    } else {
      console.log('Transfer failed');
      setTransferSuccess(false); // Set state to false for hiding success message
      // Handle the failure (e.g., show an error message)
    }
  };

  const transferAmountFunction = (senderAccount, receiverAccount, amount) => {
    if (!senderAccount || !receiverAccount || senderAccount.balance < amount) {
      return false; // Transfer failed
    }

    // Update balances
    senderAccount.balance -= amount;
    receiverAccount.balance += amount;

    // Add transaction records
    const transaction = {
      id: senderAccount.transactions.length + 1,
      date: new Date().toISOString().split('T')[0],
      description: `Transfer to ${receiverAccount.name}`,
      amount: -amount,
    };
    senderAccount.transactions.unshift(transaction);

    const receiverTransaction = {
      id: receiverAccount.transactions.length + 1,
      date: new Date().toISOString().split('T')[0],
      description: `Transfer from ${senderAccount.name}`,
      amount: amount,
    };
    receiverAccount.transactions.unshift(receiverTransaction);

    return true; // Transfer successful
  };

  return (
    <div className="dash" style={{ display: 'flex' }}>
      <Dashboard />
      <Card style={{ width: '50%', margin: '2em auto', padding: '1em', backgroundColor: '#f5f5f5' }}>
        <CardHeader
          avatar={
            <Avatar style={{ backgroundColor: 'green' }}>
              <AccountBalanceIcon />
            </Avatar>
          }
          title={<Typography variant="h5">Transfer Money</Typography>}
        />

        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div>
                <label>Sender Account:</label>
                <select value={senderAccount.accountNumber} onChange={(e) => setSenderAccount(accounts.find(acc => acc.accountNumber === e.target.value))}>
                  {accounts.map(acc => (
                    <option key={acc.accountNumber} value={acc.accountNumber}>{acc.name}</option>
                  ))}
                </select>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>
                <label>Receiver Account:</label>
                <select value={receiverAccount.accountNumber} onChange={(e) => setReceiverAccount(accounts.find(acc => acc.accountNumber === e.target.value))}>
                  {accounts.map(acc => (
                    <option key={acc.accountNumber} value={acc.accountNumber}>{acc.name}</option>
                  ))}
                </select>
              </div>
            </Grid>
          </Grid>

          <Divider style={{ margin: '1em 0', backgroundColor: '#333' }} />

          <div>
            <label>Transfer Amount:</label>
            <input type="text" value={transferAmount} onChange={(e) => setTransferAmount(e.target.value)} />
          </div>

          <button onClick={handleTransfer}>Transfer</button>

          {/* Display success message */}
          {transferSuccess && (
            <div style={{ backgroundColor: 'green', color: 'white', padding: '0.5em', marginTop: '1em' }}>
              Transfer successful!
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}