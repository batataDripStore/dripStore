import Icon1 from '../../../assets/img/Frame11.svg'
import Icon2 from '../../../assets/img/Frame12.svg'
import Icon3 from '../../../assets/img/Frame13.svg'
import Icon4 from '../../../assets/img/Frame10.svg'
import Icon5 from '../../../assets/img/Frame13.svg'
import './Category.css'


export const Category = () => {
    const icons = [
        {
            img: Icon1,
            category: 'Camisetas'
        },
        {
            img: Icon2,
            category: 'Calças'
        },
        {
            img: Icon3,
            category: 'Bones'
        },      
        {
            img: Icon4,
            category: 'Headphones'
        },
        {
            img: Icon5,
            category: 'Tênis'
        } 
    ]


    return(
        <div className='section-category'>
                <h2>Categorias</h2>
            <div className='category'>
            {icons && icons.map((icon) => (
                <div>
                    <figure>
                    <img src={icon.img} alt="" />
                    </figure>
                    <span>{icon.category}</span>
                </div>
                ))}
                </div>
        </div>
    )
}