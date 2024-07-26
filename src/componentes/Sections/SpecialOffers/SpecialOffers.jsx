import './SpecialOffers.css'
import offerShoe from '../../../assets/img/imageTenis.png'
import Button from '../../Button/Button'

export const SpecialOffers = () => {
    return(
        <div className='main-offers'>
            <div>
                <div className='img-offers'>
                    <img src={offerShoe} alt="" />
                </div>

                <div className='content-offers'>
                    <span>Oferta especial</span>
                    <h1>Air Jordan edição de colecionador</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip
                    </p>
                    <div>
                    <Button nome={'Ver Oferta'} cor={'baseButton'}/>    
                    </div> 
                </div>
            </div>
        </div>
    )
}