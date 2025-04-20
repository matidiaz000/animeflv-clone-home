import CardList from '../components/CardList';
import Hero from '../components/Hero';
import popular from './../mocks/popular.json';
import recentlyAdded from './../mocks/recentlyAdded.json';
import { ICard } from "../interfaces/Card.interface";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="my-5 py-5">
        <CardList list={recentlyAdded as unknown as ICard[]} title="Recientemente añadidos" link="#" />
      </div>
      <div className="my-5 pb-5">
        <CardList list={popular as unknown as ICard[]} title="Populares" link="#" />
      </div>
    </>
  );
};

export default Home;
