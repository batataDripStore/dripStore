import './CardHighlights.css'

export const CardHighlights = ({title, flagDiscount}) => {
    return(
        <div className='card-element'>
                <span>{flagDiscount}</span>
                <h2>{title}</h2>
        </div>
    )
} 