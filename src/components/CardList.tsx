import { Button, Card } from "@matidiaz000/animeflv-clone-library";
import { OperationVariables, QueryResult } from "@apollo/client";
import { Format } from "../constant/format";
import CardListSkeleton from "../skeletons/CardList";

interface IProps {
  list: QueryResult<any, OperationVariables>,
  title: string,
  link: string,
}

const CardList = ({ list, title, link }: IProps) => {

  const setSubtitle = (item: any): string => {
    if (item.episodes > 1) return `${item.episodes} episodios`
    else if (item.episodes === 1 && item.duration) return `${item.duration}m`
    else return "Próximamente"
  }

  if (list.loading) return <CardListSkeleton />;
  if (list.error) return <p>Error : {list.error.message}</p>;

  return (
    <div className="container-lg">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h3">{title}</h2>
        <Button variant="text" endIcon="" size="sm" className="fw-bold text-uppercase border-0" href={link}>Ver más</Button>
      </div>
      <div className="row overflow-x-auto flex-nowrap flex-lg-wrap">
        {list?.data?.Page?.media?.map((item: any) => 
          <div className="col-4 col-sm-3 col-lg-2" key={`${link}-${item.id}`}>
            <Card
              img={item.coverImage?.large}
              category={Format(item.format)}
              title={item.title?.userPreferred}
              subtitle={setSubtitle(item)}
              link={`/anime/${item.id}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;
