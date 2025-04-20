import { Button, Card } from "@matidiaz000/animeflv-clone-library";
import { ICard } from "../interfaces/Card.interface";

interface IProps {
  list: ICard[],
  title: string,
  link: string
}

const CardList = ({ list, title, link }: IProps) => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h3">{title}</h2>
        <Button variant="text" endIcon="" className="">Ver más</Button>
      </div>
      <div className="row">
        {list.map(item => 
          <div className="col-2" key={`${link}-${item.id}`}>
            <Card
              img={item.img}
              category={item.category}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;
