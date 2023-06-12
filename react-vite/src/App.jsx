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
  const calculate = () => {
    const curDate = new Date();
    console.log(curDate.getFullYear())
    setDates({
      [dates.year]: 5,
      [dates.month]: 5,
      [dates.day]: 1
    })
  }
  return (
    <>
    <div className='grid-container'>
      <NumInput fullName={"day"} curFormat={"DD"} passValue={dates.day} syncChange={handleChange}/>
      <NumInput fullName={"month"} curFormat={"MM"} passValue={dates.month} syncChange={handleChange}/>
      <NumInput fullName={"year"} curFormat={"YY"} passValue={dates.year} syncChange={handleChange}/>
    </div>
    <div className='flex-row'>
      <hr />
      <button onClick={calculate} className='btn'>
        <img src="../src/assets/icon-arrow.svg" alt="arrow" />
      </button>
    </div>
    <div>
    <h1><span className="purple-txt">{dates.year || "--"}</span> years</h1>
    <h1><span className="purple-txt">{dates.month || "--"}</span> months</h1>
    <h1><span className="purple-txt">{dates.day || "--"}</span> days</h1>
    </div>
    </>
  )
}

export default App
