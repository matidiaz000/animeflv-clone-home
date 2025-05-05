const HeroSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="container mt-5">
        <div className="mx-3">
          <div className="bg-gray-200 rounded d-flex jutify-content-end flex-row align-items-end px-1" style={{aspectRatio: "2 / 3"}}>
            <div className="px-3 py-4 w-100">
              <span className="rounded bg-gray-400" style={{width: 70, height: 28}}></span>
              <span className="rounded bg-gray-400 mt-3 mb-2" style={{width: "75%", height: 40}}></span>
              <span className="rounded bg-gray-400 mb-3" style={{width: "50%", height: 40}}></span>
              <span className="rounded bg-gray-400 mb-3" style={{width: 100, height: 20}}></span>
              <div className="d-flex align-items-center mx-n2">
                <span className="rounded-pill bg-gray-400 mx-2" style={{width: 160, height: 40}}></span>
                <span className="rounded-pill bg-gray-400 mx-2" style={{width: 160, height: 40}}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
