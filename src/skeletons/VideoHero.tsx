const VideoHeroSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="bg-gray-200 vh-100 w-100">
        <div className="container d-flex flex-column justify-content-end h-100">
          <div className="py-5 my-5">
            <div className="py-5">
              <span className="rounded bg-gray-400" style={{width: 70, height: 28}}></span>
              <span className="rounded bg-gray-400 my-3" style={{width: "50%", height: 45}}></span>
              <span className="rounded bg-gray-400 mb-3" style={{width: 200, height: 20}}></span>
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

export default VideoHeroSkeleton;
