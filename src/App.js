import logo from './logo.svg';
import './App.css';
import {Typography, styled,Box} from '@mui/material';
import { useState } from 'react';


//components

import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';



const  Header=styled(Typography)`

   font-size:36px;
   color:blue;
   text-transform:uppercase;

  
`
const Component=styled(Box)`
      display:flex;
      background:#fff;
      width:800px;
      padding:10px;
      border-radius:20px;
      margin:auto;
      & > div {
        height:72vh;
        width:50%;
        padding:10px;
      }
`


function App() {
  const[transactions,setTransactions]=useState([
    {id:1,text:'momos',amount:-20},
    {id:2,text:'salary',amount:1000},
    {id:3,text:'book',amount:-200},
    {id:4,text:'bonus',amount:2000},
    
  ])

  return (
    <Box className="App">
     <Header>Expense tracker</Header>
     <Component>
      <Box>
        <Balance transactions={transactions}/>
        <ExpenseCard transactions={transactions}/>
        <NewTransactions setTransactions={setTransactions} />
      </Box>
      <Box>
        <Transactions transactions={transactions} setTransactions={setTransactions}/>
      </Box>
     </Component>
   
    </Box>
  );
}

export default App;
