import Card from './Card';
import cards from './dbcards';
import Headitems from './Headitems';

export default function Content() {
  return (
    <section>
        <Headitems/>
        <main className="grid gap-5 grid-cols-3	 m-12">    
          {cards.map((card,index) => 
            (<Card 
              key={index} img={card.img} title={card.title} text={card.text} description={card.description} className={card.className}/>)
          )}
        </main>
    </section>
  )
}
