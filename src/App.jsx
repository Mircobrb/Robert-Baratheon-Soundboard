import robby from './assets/robby.png'
import './App.css'
import SoundBtn from './components/SoundBtn.jsx'

function App() {

  return (
    <>
      <div className=''>
        <h1>The only King</h1>
        <img src={robby} className="logo" alt="robby logo" />
      </div>
      <SoundBtn />
    </>
  )
}

export default App
