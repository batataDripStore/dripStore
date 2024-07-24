import './nav.css';
import { Link } from 'react-router-dom';


export default function Nav() {
    return(
        <>
            <nav className="nav">
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to="/produtos">Produtos</Link>
                </li>
                <li>
                    <Link to="/categorias">Categorias</Link>
                </li>
                <li>
                    <Link to="/pedidos">Meus Pedidos</Link>
                </li>
                <li>
                    <Link to="/singleproduct">Single Product</Link>
                </li>
            </ul>
            </nav>
        </>
    )
}