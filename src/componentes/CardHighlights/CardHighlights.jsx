import Button from '../Button/Button'
import './CardHighlights.css'
// import img from '../../assets/img/collection-1.png'

export const CardHighlights = ({title, flagDiscount, image}) => {
    
    return(
        <div className='card-element'>
            <img src={image} alt="" />
            <div className='discount-flag'>
                <span>{flagDiscount}</span>
            </div>
            <h2>{title}</h2>
            <div className='btn-comprar'>
                <Button nome={'Comprar'} cor={'white'} />
            </div>
        </div>
    )
} 