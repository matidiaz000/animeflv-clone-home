import { Button, Card } from "@matidiaz000/animeflv-clone-library";
import { OperationVariables, QueryResult } from "@apollo/client";

interface IProps {
  list: QueryResult<any, OperationVariables>,
  title: string,
  link: string,
}

const CardList = ({ list, title, link }: IProps) => {

  const Format = (string: any) => {
    if (string === 'MOVIE') return 'film'
    if (string === 'TV') return 'anime'
    if (string === 'OVA') return 'ova'
    else return 'default'
  }

  if (list.loading) return <p>Loading...</p>;
  if (list.error) return <p>Error : {list.error.message}</p>;

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h3">{title}</h2>
        <Button variant="text" endIcon="" className="">Ver más</Button>
      </div>
      <div className="row">
        {list?.data?.Page?.media?.map((item: any) => 
          <div className="col-2" key={`${link}-${item.id}`}>
            <Card
              img={item.coverImage?.large}
              category={Format(item.format)}
              title={item.title?.userPreferred}
              subtitle={`${item.episodes} episodios`}
              link={item.id}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;
