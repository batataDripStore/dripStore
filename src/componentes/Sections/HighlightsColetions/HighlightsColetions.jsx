import { CardHighlights } from "../../CardHighlights/CardHighlights";

const cards = [
    {
        id: 1,
        title: 'Novo drop Supreme',
        discount: '30% off'
    },
    {
        id: 2,
        title: 'Coleção Adidas',
        discount: '30% off',
    },
    {
        id: 3,
        title: 'Novo Beats Bass',
        discount: '30% off',
    }
]

const HighlightsColections = () => {
  return (
    <div>   

        {cards && cards.map((card) =>(
            <CardHighlights title={card.title} flagDiscount={card.discount} key={card.id} />
        ))}
    </div>
  );
};

export default HighlightsColections;
