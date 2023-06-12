import { useState } from 'react'
import NumInput from './components/NumInput';
import './App.css'

function App() {
const [dates,setDates] = useState({
  year: 0,
  month: 0,
  day: 0
});
  const handleChange = (event) => {
    console.log(event.target.name);
    setDates(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }
  return (
    <>
    <div className='grid-container'>
      <NumInput fullName={"year"} curFormat={"YY"} passValue={dates.year} syncChange={handleChange}/>
      <NumInput fullName={"month"} curFormat={"MM"} passValue={dates.month} syncChange={handleChange}/>
      <NumInput fullName={"day"} curFormat={"DD"} passValue={dates.day} syncChange={handleChange}/>
    </div>
    <div>
      <hr />
      <button>
        <img src="" alt="" />
      </button>
    </div>
    <div>
    <h1>{dates.year || "--"} years</h1>
    <h1>{dates.month || "--"} months</h1>
    <h1>{dates.day || "--"} days</h1>
    </div>
    </>
  )
}

export default App
