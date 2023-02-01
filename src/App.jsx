
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AcitivityCards from './components/ActivityCards'
import data from './data'

function App() {

  const dataMap = data.map((datas) => {
    return (
      <AcitivityCards
      key={datas.id}
      // object from data.js that was refactored in a spread operator to save space
      {...datas}
      />
    )})
  
  return (
    <div className="App">
      <Navbar/>
      <Hero 
      header={"Online Experiences"} 
      paragraph={"Join unique interactive activities led by one-of-a-kind hosts—all without leaving home."}/>
      <div className='activity-container'>{dataMap}</div>
    </div>
  )
}

export default App
