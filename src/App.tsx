import { useState } from 'react'
import reactLogo from './assets/react.svg'
import liz1 from './assets/1717152931002.jpg'
import liz2 from './assets/1717152931012.jpg'
import './App.css'

function App() {
  const [smsPosition,setSmsPosition] = useState(0)
  const sms = [
    'Te pienso mucho, muchisimo', 'y quiero decirte que','Cuando mis ojos te vieron', 'casi me caigo, casi me, casi me muero', 'cuando mis ojos te vieron', 'no solo te vieron', 'si no que al amor conocieron '
  ]
  const setSmsButton = () =>{
    if(smsPosition === sms.length-1){
      setSmsPosition(0)
      console.log('estoy funcionando')
    }else{
      setSmsPosition(smsPosition+1)
    }
  } 
  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={liz2} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{sms[smsPosition]}</h1>
      <div className="card">
        <button onClick={() => setSmsButton()}>
          Hey! dame click
        </button>
      </div>
    </>
  )
}

export default App
