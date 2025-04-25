import CardList from '../components/CardList';
import Hero from '../components/Hero';
import { useQuery } from '@apollo/client';
import { GET_ANIME_LIST } from '../queries/animes.list';

const Home = () => {
  const trendings = useQuery(GET_ANIME_LIST, {
    variables: { sort: ['TRENDING_DESC'], page: 1, perPage: 6 },
  });

  const updated = useQuery(GET_ANIME_LIST, {
    variables: { sort: ['UPDATED_AT_DESC'], page: 1, perPage: 6 },
  });

  const popularity = useQuery(GET_ANIME_LIST, {
    variables: { sort: ['POPULARITY_DESC'], page: 1, perPage: 6 },
  });

  return (
    <>
      <Hero />
      <div className="my-5 py-5">
        <CardList list={trendings} title="Trending now" link="#" />
      </div>
      <div className="my-5 py-5">
        <CardList list={updated} title="Upcoming next season" link="#" />
      </div>
      <div className="my-5 py-5">
        <CardList list={popularity} title="All the time popular" link="#" />
      </div>
    </>
  );
};

export default Home;
