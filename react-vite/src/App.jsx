import { useState } from 'react'
import NumInput from './components/NumInput';
import './App.css'

function App() {
  const [dates,setDates] = useState({
    year: '',
    month: '',
    day: ''
  });
  const curDate = new Date();
  const subDate = new Date();
  const [newDate,setNewDate] = useState({
    year: 0,
    month: 0,
    day: 0
  })

  if(dates.year > curDate.getFullYear() || dates.year < 0) {
    setDates(prev => ({
      ...prev,
      year: dates.year < 0 ? 0 : curDate.getFullYear()
    }))
  } else if(dates.month > 12 || dates.month < 0) {
    setDates(prev => ({
      ...prev,
      month: dates.month < 0 ? 0 : 12
    }))
  } else if(dates.day > 31 || dates.day < 0) {
    setDates(prev => ({
      ...prev,
      day: dates.day < 0 ? 0 : 31
    }))
  }

  const handleChange = (event) => {
    setDates(prev => ({
      ...prev,
      [event.target.name]: event.target.value.replace(/[^0-9]/g, "")
    }))
  }

  const calculate = () => {
    if(dates.year == '' || dates.month == '' || dates.day == '') {
      return
    }

    subDate.setFullYear(curDate.getFullYear() - dates.year);
    subDate.setMonth(curDate.getMonth() - dates.month);
    subDate.setDate(curDate.getDate() - dates.day);
    setNewDate({
      year: subDate.getFullYear(),
      month: subDate.getMonth(),
      day: subDate.getDate()
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
    <h1><span className="purple-txt">{newDate.year || "--"}</span> years</h1>
    <h1><span className="purple-txt">{newDate.month || "--"}</span> months</h1>
    <h1><span className="purple-txt">{newDate.day || "--"}</span> days</h1>
    </div>
    </>
  )
}

export default App
