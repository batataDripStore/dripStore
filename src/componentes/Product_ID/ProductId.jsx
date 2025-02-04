import './ProductId.css'
import imgTenis from "../../assets/img/image2.png"
import Avaliacao from "../Avaliacao/Avaliacao"
import TamanhoProduto from "../TamanhoProduto/TamanhoProduto"
import CorProduto from "../CorProduto/CorProduto"
import Button from '../Button/Button'

export const ProductId = () => {
    return (
        <div className="main-product">
            <div>
                <div>
                    <img src={imgTenis} alt="" />
                </div>
                <div className='content-product'>
                    <h1> Tênis Nike Revolution 6 Next Nature Masculino</h1>
                    <Avaliacao/>
                    <span>Descrição do Produto</span>
                    <div className="price">
                    <p>R$</p>
                    <p className='number-price'>219,00</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit modi numquam praesentium architecto iste rem corporis 
                        reiciendis amet pariatur quaerat exercitationem labore quia quasi laboriosam, laborum natus dolor eum vitae.
                    </p>
                    <TamanhoProduto/>
                    <CorProduto />
                    <div className='button-comprar'>
                    <Button nome='Comprar' cor={'yellow'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

 