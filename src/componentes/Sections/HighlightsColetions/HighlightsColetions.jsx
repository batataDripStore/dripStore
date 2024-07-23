import { CardHighlights } from "../../CardHighlights/CardHighlights";
import './HighlightsColetions.css'
import CollectionImg1 from '../../../assets/img/collection-1.png'
import CollectionImg2 from '../../../assets/img/collection-2.png'
import CollectionImg3 from '../../../assets/img/collection-3.png'

const cards = [
    {
        id: 1,
        title: 'Novo drop Supreme',
        discount: '30% OFF',
        imgUrl: CollectionImg1
    },
    {
        id: 2,
        title: 'Coleção Adidas',
        discount: '30% OFF',
        imgUrl: CollectionImg2
    },
    {
        id: 3,
        title: 'Novo Beats Bass',
        discount: '30% OFF',
        imgUrl: CollectionImg3
    }
]

const HighlightsColections = () => {
  return (
      <div className="highlights-collections">
        <div className="content-highlights">
            <h2>Coleções em destaque</h2>
            <div className="section-card-highlights">
            {cards && cards.map((card) =>(
                <CardHighlights title={card.title} flagDiscount={card.discount} key={card.id} image={card.imgUrl} />
            ))}
        </div>
        </div>
    </div>
  );
};

export default HighlightsColections;
