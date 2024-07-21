// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia  from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import tenis from '../../assets/img/Layer 1aa 2'
import './ProductCard.css'
import tenis from '../assets/img/Layer-1aa-2.png'


export function ProductCard() {

    return(
          <>
          <div className='card'>
            <div className='cardTenis'>
            <div className='discount'>
              <p>30% OFF</p>
            </div>
              <div className='tenis'>
                <img src={tenis} alt=""  className='tenisImg'/>
              </div>
            </div>
            
            <section className='bottom'>
              <div className='tit1'>
                <p className='tit1'>Tênis</p>
              </div>
              <div className='tit2'>
                K-Swiss V8 - Masculino
              </div>
              <div className='precos'>
                <div className='descPreco'><p><span>$200</span></p></div>
                <div className='preco'><p>$100</p></div>
              </div>
              
            </section>
          </div>      
          </>
    )
}

