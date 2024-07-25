import './ProductCard.css'
// import tenis from '../assets/img/Layer-1aa-2.png'
import { Link } from 'react-router-dom'
export function ProductCard({name, image, price, showDiscount, title, priceDiscount}) {
    // console.log(title)
  return (
    <>
      
      <div className='card'>
            <div className='cardTenis'>
                {showDiscount && (
                    <div className='discount'>
                        <p>30% OFF</p>
                    </div>
                )}
                <div className='tenis'>
                    <img src={image} alt={name} className='tenisImg' />
                </div>
            </div>
            <Link to="/singleproduct">

                <section className='bottom'>
                    <div className='tit1'>
                        <p className='tit1'>{name}</p>
                    </div>
                    <div className='tit2'>
                        <p>{title}</p>
                    </div>
                    {/* <Link to={"/"}>
                        <div className='precos'>
                            <div className='descPreco'>
                                <p><span>${priceDiscount}</span></p>
                            </div>
                            <div className='preco'>
                                <p>${price}</p>
                            </div>
                        </div>
                    </Link> */}
             
                
                    
                        <div className='precos'>
                            <div className='descPreco'>
                                <p><span>${priceDiscount}</span></p>
                            </div>
                            <div className='preco'> 
                                <p>${price}</p>
                            </div>
                        </div>
                    
                 
                </section>
            </Link>
        </div>
    
    </>
  )
}
