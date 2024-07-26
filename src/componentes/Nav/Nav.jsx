import './nav.css';
import { Link, useLocation } from 'react-router-dom';


export default function Nav() {
    const location = useLocation()
    const path = location.pathname
 
    return(
        <>
            <nav className="nav">
            <ul>
                <li className={path === '/' ? 'active' : ''}>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className={path === '/produtos' ? 'active' : ''}>
                    <Link to="/produtos">Produtos</Link>
                </li>
                <li className={path === '/categorias' ? 'active' : ''}>
                    <Link to="/categorias">Categorias</Link>
                </li>
                <li className={path === '/pedidos' ? 'active' : ''}>
                    <Link to="/pedidos">Meus Pedidos</Link>
                </li>
                
            </ul>
            </nav>
        </>
    )
}