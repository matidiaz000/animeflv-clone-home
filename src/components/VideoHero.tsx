import { OperationVariables, QueryResult } from "@apollo/client";
import "./VideoHero.scss";
import { Button } from "@matidiaz000/animeflv-clone-library";
import { Format } from "../constant/format";
import VideoHeroSkeleton from "../skeletons/VideoHero";

interface IProps {
  list: QueryResult<any, OperationVariables>,
}

const VideoHero = ({ list }: IProps) => {
  if (list.loading) return <VideoHeroSkeleton />;
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

  const trailerID = media?.trailer?.id;

  const properties = () => {
    return [
      "autoplay=1",
      "mute=1",
      "showinfo=0",
      "rel=0",
      "cc_load_policy=1",
      "cc_lang_pref=es",
      "controls=0",
      "enablejsapi=0",
      "fs=0",
      "modestbranding=0",
      "iv_load_policy=3",
      "loop=1",
      `playlist=${trailerID}`
    ].join("&")
  };

  return (
    <div className="position-relative">
      <div className="bg-dark VideoHeroComponent ratio">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerID}?${properties()}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="container d-flex flex-column justify-content-end absolute">
        <div className="py-5 my-5">
          <div className="py-5">
            <span className="badge bg-primary-200 text-primary-600 text-uppercase">{Format(media.format)}</span>
            <h1 className="text-white mw-50 mt-3">{media?.title?.userPreferred}</h1>
            <p className="text-white">{setSubtitle(media)}</p>
            <div className="d-flex align-items-center mx-n2">
              <Button variant="contained" className="mx-2 fw-semibold" color="white" startIcon="Play" href={`/anime/${media.id}/capitulo/0`}>Seguir viendo</Button>
              <Button variant="outlined" className="mx-2 fw-semibold" color="white" startIcon="Info" href={`/anime/${media.id}`}>Más info</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
