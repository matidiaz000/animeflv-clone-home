import { Card } from '@matidiaz000/animeflv-clone-library';
import './App.css';

interface ICard {
  img: string,
  category: string,
  title: string,
  subtitle: string,
  link: string
}

const App = () => {
  return (
    <div className="row">
      <div className="col-3">
        <Card
          img="https://www3.animeflv.net/uploads/animes/covers/3220.jpg"
          category="anime"
          title="Boku no Hero Academia"
          subtitle="3 temporadas | 49 episodios"
          link="#"
        />
      </div>
      <div className="col-3">
        <Card
          img="https://www3.animeflv.net/uploads/animes/covers/3220.jpg"
          category="anime"
          title="Boku no Hero Academia"
          subtitle="3 temporadas | 49 episodios"
          link="#"
        />
      </div>
    </div>
  );
};

export default App;
