import { useState } from 'react'
import './App.css'

function App() {
const [years,setYears] = useState(0);
const [months,setMonths] = useState(0);
const [days,setDays] = useState(0);
  return (
    <>
    <div className='grid-container'>
      <label>DAY<input type="number" placeholder='DD'/></label>
      <p>This field is required</p>
      <label>MONTH<input type="number" placeholder='MM'/></label>
      <label>YEAR<input type="number" placeholder='YYYY'/></label>
    </div>
    <h1>{years || "--"} years</h1>
    <h1>{months || "--"} months</h1>
    <h1>{days || "--"} days</h1>
    </>
  )
}

export default App
