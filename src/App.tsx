import { useEffect, useState } from 'react'
import './App.css'
import { database } from './api/firebase'
import { onValue, ref } from 'firebase/database'

function App() {
  const [potenciometro, setPotenciometro] = useState(0);
  const [luminosidade, setLuminosidade]  = useState(0);

  useEffect(() => {
    const db = database;
    const starCountRef = ref(db, 'test');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log('data', data)
      setPotenciometro(data.potenciometro);
      setLuminosidade(data.luminosidade);
      // updateStarCount(postElement, data);
    });
  }, [])


  return (
    <div className="container">
      <div>
        Potenciometro: {potenciometro} | Luminosidade: {luminosidade} | Luz {((potenciometro - luminosidade) > 0) ? 'ligada' : 'desligada'}
      </div>
    </div>
  )
}

export default App
