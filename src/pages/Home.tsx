import CardList from '../components/CardList';
import Hero from '../components/Hero';
import { useQuery } from '@apollo/client';
import { GET_ANIME_LIST } from '../queries/animes.list';
import { currentYear, getSeason } from '../utilities/seasons';
import { urls } from '../constant/urls';

const Home = () => {
  const dateAdded = useQuery(GET_ANIME_LIST, {
    fetchPolicy: 'cache-and-network',
    variables: { sort: [urls[0].sort], page: 1, perPage: 6 },
  });

  const popularity = useQuery(GET_ANIME_LIST, {
    fetchPolicy: 'cache-and-network',
    variables: { sort: [urls[1].sort], page: 1, perPage: 6, season: getSeason(), seasonYear: currentYear },
  });

  const upcoming = useQuery(GET_ANIME_LIST, {
    fetchPolicy: 'cache-and-network',
    variables: { sort: [urls[2].sort], page: 1, perPage: 6, season: getSeason(true), seasonYear: currentYear, status: 'NOT_YET_RELEASED' },
  });

  const score = useQuery(GET_ANIME_LIST, {
    fetchPolicy: 'cache-and-network',
    variables: { sort: [urls[3].sort], page: 1, perPage: 6 },
  });

  return (
    <>
      <Hero />
      <div className="py-5">
        <div className="my-5">
          <CardList list={dateAdded} title={urls[0].text} link={`/buscar/${urls[0].url}`} />
        </div>
        <div className="my-5">
          <CardList list={popularity} title={urls[1].text} link={`/buscar/${urls[1].url}`} />
        </div>
        <div className="my-5">
          <CardList list={upcoming} title={urls[2].text} link={`/buscar/${urls[2].url}`} />
        </div>
        <div className="my-5">
          <CardList list={score} title={urls[3].text} link={`/buscar/${urls[3].url}`} />
        </div>
      </div>
    </>
  );
};

export default Home;
