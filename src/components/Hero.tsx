import { useState } from "react";

const Hero = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="bg-dark py-5">
      <div className="container text-center text-white align-items-center pb-5">
        <h1 className="mb-3">Tu fuente de <span className="text-primary">anime</span><br/> online gratis en HD</h1>
        <p className="w-75 mx-auto mb-5">El mejor portal de anime online para latinoamérica, encuentra animes clásicos, animes del momento, animes más populares y mucho más, todo en animeflv, tu fuente de anime diaria.</p>
        <div className="form-floating w-50  mx-auto">
            <input
              type="search"
              className="form-control"
              id="exampleDataList"
              placeholder="Type to search..."
              value={searchText}
              onChange={({ target }) => setSearchText(target.value)}
            />
            <label htmlFor="exampleDataList">Search</label>
          </div>
      </div>
    </div>
  );
};

export default Hero;
