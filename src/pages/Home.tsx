import CardList from '../components/CardList';
import Hero from '../components/Hero';
import { useQuery } from '@apollo/client';
import { GET_ANIME_LIST } from '../queries/animes.list';
import { getSeason } from '../utilities/seasons';

const urls = {
  'dateAdded': {
    url: 'episodios-nuevos',
    sort: 'ID_DESC'
  },
  'popularity': {
    url: 'lo-mas-popular',
    sort: 'POPULARITY_DESC'
  },
  'upcoming': {
    url: 'proximamente',
    sort: 'POPULARITY_DESC'
  },
  'score': {
    url: 'top-100-anime',
    sort: 'SCORE_DESC'
  },
}

const Home = () => {
  const currentYear = new Date().getFullYear();

  const dateAdded = useQuery(GET_ANIME_LIST, {
    fetchPolicy: 'cache-and-network',
    variables: { sort: ['ID_DESC'], page: 1, perPage: 6 },
  });

  const popularity = useQuery(GET_ANIME_LIST, {
    fetchPolicy: 'cache-and-network',
    variables: { sort: ['POPULARITY_DESC'], page: 1, perPage: 6, season: getSeason(), seasonYear: currentYear },
  });

  const upcoming = useQuery(GET_ANIME_LIST, {
    fetchPolicy: 'cache-and-network',
    variables: { sort: ['POPULARITY_DESC'], page: 1, perPage: 6, season: getSeason(true), seasonYear: currentYear, status: 'NOT_YET_RELEASED' },
  });

  const score = useQuery(GET_ANIME_LIST, {
    fetchPolicy: 'cache-and-network',
    variables: { sort: ['SCORE_DESC'], page: 1, perPage: 6 },
  });

  return (
    <>
      <Hero />
      <div className="py-5">
        <div className="my-5">
          <CardList list={dateAdded} title="Episodios nuevos" link="/buscar/episodios-nuevos" />
        </div>
        <div className="my-5">
          <CardList list={popularity} title="Lo más popular" link="/buscar/lo-mas-popular" />
        </div>
        <div className="my-5">
          <CardList list={upcoming} title="Próximamente" link="/buscar/proximamente" />
        </div>
        <div className="my-5">
          <CardList list={score} title="Top 100 anime" link="/buscar/top-100-anime" />
        </div>
      </div>
    </>
  );
};

export default Home;
