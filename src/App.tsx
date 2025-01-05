import { useState } from 'react'
import liz2 from './assets/1717152931012.jpg'
import './App.css'

function App() {
  const [smsPosition,setSmsPosition] = useState(0)
  const sms = [
    'Hola liz, Te pienso mucho, muchisimo', 'y quiero decirte que','eres lo mejor que me ha sucedido en la vida', 'no esperaba que existiera alguien tan especial como tu', 'la verdad, es que te amo <3', 'y por lo cursi de esta web, se nota que es asi', 'quiero que seas feliz y que te vaya bien en todo', 'te quiero un monton y espero poder seguir provocandote esa bonita sonrisa tuya', 'que tanto me gusta, y me enamora <3'
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
      <h2>{sms[smsPosition]}</h2>
      <div className="card">
        <button onClick={() => setSmsButton()}>
         {sms.length-1 === smsPosition ? 'Volver a empezar': ' Hey! dame click'}
        </button>
      </div>
    </>
  )
}

export default App
