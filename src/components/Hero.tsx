import { OperationVariables, QueryResult } from "@apollo/client";
import { Color, Format } from "../constant/format";
import { Button } from "@matidiaz000/animeflv-clone-library";

interface IProps {
  list: QueryResult<any, OperationVariables>,
}

const Hero = ({ list }: IProps) => {
  if (list.loading) return <p>Loading...</p>;
  if (list.error) return <p>Error : {list.error.message}</p>;

  const setSubtitle = (item: any): string => {
    if (item.episodes > 1) return `${item.episodes} episodios`
    else if (item.episodes === 1 && item.duration) return `${item.duration}m`
    else return "Próximamente"
  }

  const randomNumber = Math.floor(
    Math.random()*list.data?.Page?.media?.length
  );

  const media = list.data?.Page?.media[randomNumber];

  return (
    <div className="container">
      <div className="border rounded position-relative overflow-hidden mx-3 mt-5">
        <img className="mw-100 w-100" src={media.coverImage?.extraLarge} alt={media.title?.userPreferred} />
        <div className="gradient-bottom position-absolute bottom-0 w-100 px-3 py-4">
          <span className={`badge ${Color(media.format)} text-uppercase`}>{Format(media.format)}</span>
          <h1 className="text-white mw-50 mt-3">{media?.title?.userPreferred}</h1>
          <p className="text-white">{setSubtitle(media)}</p>
          <div className="d-flex align-items-center mx-n2">
            <Button variant="contained" className="mx-2 fw-semibold" color="white" startIcon="Play" href={`/anime/${media.id}/capitulo/0`}>Reproducir</Button>
            <Button variant="outlined" className="mx-2 fw-semibold" color="white" startIcon="Info" href={`/anime/${media.id}`}>Más info</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
