import './inside.css'
import logo  from '../../assets/img/image.png'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

export default function InsideHeader(){
    return(
        <>
            <div className="insiderHeader">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className='input'>
                    <Input />
                </div>
                <div className="login">
                    <Link to="cadastre-se">Cadastre-se</Link>
                </div>
                <Button className="button" nome={'Enviar'} />
                <div className="cart">
                    <Link to="carrinho"><ShoppingCartOutlinedIcon color="action" /></Link>
                </div>
            </div>
        </>
    )
}