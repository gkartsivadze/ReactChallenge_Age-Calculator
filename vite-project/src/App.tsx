import { useState } from 'react'
import NumInput from './components/NumInput';
import './App.css'

interface NumInputProps {
  curType: string;
  passValue: number;
}

function App() {
const [years,setYears] = useState(0);
const [months,setMonths] = useState(0);
const [days,setDays] = useState(0);

  return (
    <>
    <div className='grid-container'>
      <NumInput fullName={"DAY"} curType={"YY"} passValue={years}/>
      <NumInput fullName={"MONTH"} curType={"MM"} passValue={months}/>
      <NumInput fullName={"DAY"} curType={"DD"} passValue={days}/>
    </div>
    <h1>{years || "--"} years</h1>
    <h1>{months || "--"} months</h1>
    <h1>{days || "--"} days</h1>
    </>
  )
}

export default App
