const LoadingBlogCard = () => {
  return (
    <div className="grid grid-cols-3 gap-5 my-10">
      {/* Loader Card */}
      <div className="card w-full bg-base-100 shadow-xl animate-pulse">
        <figure className="bg-gray-200 h-64 w-full rounded-xl"></figure>
        <div className="card-body">
          <p className="flex items-center justify-center text-accent bg-cyan-100 w-44 rounded-full py-1">
            <span className="bg-gray-200 h-5 w-20 rounded-full"></span>
          </p>
          <h2 className="card-title">
            <span className="bg-gray-200 h-6 w-3/4 rounded"></span>
          </h2>
          <p className="text-gray-500">
            <span className="bg-gray-200 h-4 w-full rounded"></span>
            <span className="bg-gray-200 h-4 w-3/4 rounded mt-1 block"></span>
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="avatar items-center flex">
              <div className="w-8 mr-1 rounded-full bg-gray-200 h-8"></div>
              <span className="bg-gray-200 h-4 w-16 rounded"></span>
            </div>
            <div className="flex items-center">
              <span className="bg-gray-200 h-4 w-12 rounded"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl animate-pulse">
        <figure className="bg-gray-200 h-64 w-full rounded-xl"></figure>
        <div className="card-body">
          <p className="flex items-center justify-center text-accent bg-cyan-100 w-44 rounded-full py-1">
            <span className="bg-gray-200 h-5 w-20 rounded-full"></span>
          </p>
          <h2 className="card-title">
            <span className="bg-gray-200 h-6 w-3/4 rounded"></span>
          </h2>
          <p className="text-gray-500">
            <span className="bg-gray-200 h-4 w-full rounded"></span>
            <span className="bg-gray-200 h-4 w-3/4 rounded mt-1 block"></span>
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="avatar items-center flex">
              <div className="w-8 mr-1 rounded-full bg-gray-200 h-8"></div>
              <span className="bg-gray-200 h-4 w-16 rounded"></span>
            </div>
            <div className="flex items-center">
              <span className="bg-gray-200 h-4 w-12 rounded"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl animate-pulse">
        <figure className="bg-gray-200 h-64 w-full rounded-xl"></figure>
        <div className="card-body">
          <p className="flex items-center justify-center text-accent bg-cyan-100 w-44 rounded-full py-1">
            <span className="bg-gray-200 h-5 w-20 rounded-full"></span>
          </p>
          <h2 className="card-title">
            <span className="bg-gray-200 h-6 w-3/4 rounded"></span>
          </h2>
          <p className="text-gray-500">
            <span className="bg-gray-200 h-4 w-full rounded"></span>
            <span className="bg-gray-200 h-4 w-3/4 rounded mt-1 block"></span>
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="avatar items-center flex">
              <div className="w-8 mr-1 rounded-full bg-gray-200 h-8"></div>
              <span className="bg-gray-200 h-4 w-16 rounded"></span>
            </div>
            <div className="flex items-center">
              <span className="bg-gray-200 h-4 w-12 rounded"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingBlogCard;
