import './ProductCard.css'
import tenis from '../assets/img/Layer-1aa-2.png'

import { Link } from 'react-router-dom';
export function ProductCard({showDiscount}) {

  return (
    <>
      
        <div className='card'>
          <div className='cardTenis'>
            {showDiscount && (
            <div className='discount'>
              <p>30% OFF</p>
            </div>)}
              <div className='tenis'>
                <img src={tenis} alt="" className='tenisImg' />
              </div>
          </div>
        <Link to={"/produtos"}>
        <section className='bottom'>
          <div className='tit1'>
            <p className='tit1'>Tênis</p>
          </div>
          <div className='tit2'>
              K-Swiss V8 - Masculino
          </div>
          <Link to={"/produtos"}>
            <div className='precos'>
                <div className='descPreco'>
                  <p><span>$200</span></p>
                </div>
            <div className='preco'>
              <p>$100</p>
            </div>
            </div>
          </Link>
        </section>
        </Link>
        </div>
     
    </>
  )
}
