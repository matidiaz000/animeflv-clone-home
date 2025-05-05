const CardListSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="container-lg">
        <div className="d-flex justify-content-between align-items-center mb-4 pb-2">
          <span className="rounded bg-gray-400" style={{width: 224, height: 30}}></span>
          <span className="rounded bg-gray-400" style={{width: 75, height: 25}}></span>
        </div>
        <div className="row">
          <div className="col-4 col-sm-3 col-lg-2">
            <span className="rounded bg-gray-400" style={{aspectRatio: "2 / 3"}}></span>
            <div className="px-2 py-3 d-flex flex-column align-items-center">
              <span className="rounded bg-gray-400 mb-1" style={{width: "75%", height: 20}}></span>
              <span className="rounded bg-gray-400 mt-3" style={{width: 100, height: 15}}></span>
            </div>
          </div>
          <div className="col-4 col-sm-3 col-lg-2">
            <span className="rounded bg-gray-400" style={{aspectRatio: "2 / 3"}}></span>
            <div className="px-2 py-3 d-flex flex-column align-items-center">
              <span className="rounded bg-gray-400 mb-1" style={{width: "75%", height: 20}}></span>
              <span className="rounded bg-gray-400 mt-3" style={{width: 100, height: 15}}></span>
            </div>
          </div>
          <div className="col-4 col-sm-3 col-lg-2">
            <span className="rounded bg-gray-400" style={{aspectRatio: "2 / 3"}}></span>
            <div className="px-2 py-3 d-flex flex-column align-items-center">
              <span className="rounded bg-gray-400 mb-1" style={{width: "75%", height: 20}}></span>
              <span className="rounded bg-gray-400 mt-3" style={{width: 100, height: 15}}></span>
            </div>
          </div>
          <div className="col-4 col-sm-3 col-lg-2 d-none d-sm-block">
            <span className="rounded bg-gray-400" style={{aspectRatio: "2 / 3"}}></span>
            <div className="px-2 py-3 d-flex flex-column align-items-center">
              <span className="rounded bg-gray-400 mb-1" style={{width: "75%", height: 20}}></span>
              <span className="rounded bg-gray-400 mt-3" style={{width: 100, height: 15}}></span>
            </div>
          </div>
          <div className="col-4 col-sm-3 col-lg-2 d-none d-lg-block">
            <span className="rounded bg-gray-400" style={{aspectRatio: "2 / 3"}}></span>
            <div className="px-2 py-3 d-flex flex-column align-items-center">
              <span className="rounded bg-gray-400 mb-1" style={{width: "75%", height: 20}}></span>
              <span className="rounded bg-gray-400 mt-3" style={{width: 100, height: 15}}></span>
            </div>
          </div>
          <div className="col-4 col-sm-3 col-lg-2 d-none d-lg-block">
            <span className="rounded bg-gray-400" style={{aspectRatio: "2 / 3"}}></span>
            <div className="px-2 py-3 d-flex flex-column align-items-center">
              <span className="rounded bg-gray-400 mb-1" style={{width: "75%", height: 20}}></span>
              <span className="rounded bg-gray-400 mt-3" style={{width: 100, height: 15}}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListSkeleton;
