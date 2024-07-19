import './footer.css'
import LogoWhite from '../../assets/img/dripStoreWhite.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { grey } from '@mui/material/colors';
export function Footer(){
        return(
            <div className='footerContainer'>
                <div className="footerContent">
                    <div className="sobre">
                        <img src={LogoWhite} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <div className='social-icons'>
                            <FacebookOutlinedIcon sx={{ color: grey[100] }} />
                            <InstagramIcon  sx={{ color: grey[100] }} />
                            <TwitterIcon sx={{ color: grey[100] }} />
                        </div>
                    </div>
                    <div className='links-uteis'>
                        <h3>Informação</h3>
                        <a href="#">Sobre Drip Store</a>
                        <a href="#">Segurança</a>
                        <a href="#">Wishlist</a>
                        <a href="#">Blog</a>
                        <a href="#">Trabalhe Conosco</a>
                        <a href="#">Meus Pedidos</a>
                    </div>

                    <div className='links-uteis'>
                        <h3>Categorias</h3>
                        <a href="#">Camisetas</a>
                        <a href="#">Calças</a>
                        <a href="#">Bonés</a>
                        <a href="#">Headphones</a>
                        <a href="#">Tênis</a>
                        <a href="#">Meus Pedidos</a>
                    </div>

                    <div className='links-uteis'>
                        <h3>Contato</h3>
                        <div className="location">
                        <span>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</span>
                        <span>(85) 3051-3411</span>
                        </div>
                    </div>
                </div>

            </div>
        )
}