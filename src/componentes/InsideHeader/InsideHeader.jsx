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
                <Link to="/">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </Link>
                <div className='input'>
                    <Input />
                </div>
                <div className="login">
                    <Link to="cadastre-se">Cadastre-se</Link>
                </div>
                <div>
                    <Button className="button" nome={'Entrar'} />
                </div>
                <div className="cart">
                    <Link to="carrinho"><ShoppingCartOutlinedIcon color="action" /></Link>
                </div>
            </div>
        </>
    )
}