import './TamanhoProduto.css'
import { useState } from 'react'


export default function TamanhoProduto () {
  const [indexActive, setIndexctive] = useState('')
  const tamanhos = [39, 40, 41, 42, 43]

    const activeColor = (index) => {
      setIndexctive(index);
      console.log(index)
    };
  return (
    
    <div className='size-shoes'>
      <h3>Tamanhos</h3>
      <div>
    {tamanhos.map((tamanho, index) => (
      <button 
      key={index} 
      className={indexActive === index ? 'active' : ''} 
      onClick={() => activeColor(index)}>{tamanho}</button>
    ))}
    </div>
    </div>
  )
}
