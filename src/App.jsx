import { useState } from 'react'
import GeneralCard from './components/GeneralCard'
import OverviewCard from './components/OverviewCard'
import generalStats from './generalStats.json'
import overviewStats from './overviewStats.json'

import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)

  function toggleIsDark(){
    document.getElementById('root').classList.toggle('dark')
    setIsDark(prev => !prev)
  }

  return (
    <>  
      <header className={isDark ? "dark": ""}>
        <div className='header-title'>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className='header-divider'></div>
        <div className='header-theme'>
          <p>Dark Mode</p>
          <div className={`slider ${isDark ? "dark" : ""}`} onClick={toggleIsDark}>
            <div className='slider-circle'></div>
          </div>
        </div>
      </header>
      <section className='general-stats-section'>
        {generalStats.map(stat => <GeneralCard key={stat.id} {...stat} isDark={isDark}/>)}
      </section>
      <section className='overview-section'>
        <h1 className='overview-title'>Overview - Today</h1>
        <div className='overview-content'>
          {overviewStats.map(stat => <OverviewCard key={stat.id} {...stat} isDark={isDark}/>)}
        </div>
      </section>
      <footer className={`attribution ${isDark ? "dark" : ""}`}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </footer>
    </>
  )
}

export default App
