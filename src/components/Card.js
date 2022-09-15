import classNames from "classnames";

export default function Card({
  imageSource = "",
  projectSourceUrl = "",
  projectLiveUrl = "",
  projectName=""
}) {
  const isSource = projectSourceUrl !== "";
  const isLiveSource = projectLiveUrl !== "";

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const btnPreview = (e) => {
    e.preventDefault();
    isLiveSource && openInNewTab(projectLiveUrl);
  };

  const btnSource = (e) => {
    e.preventDefault();
    isSource && openInNewTab(projectSourceUrl);
  };

  return (
    <>
      <div className="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden">
        <img className="w-72 h-48 object-cover" src={imageSource} alt="" />


        <div className="mt-4 bg-white">
          <div className="flex items-center justify-center">
            {projectName}        
          </div>
        </div>

        <div className="p-5 gap-3 bg-white">
          <div className="flex items-center gap-2">
            <button
              onClick={btnPreview}
              className={classNames({
                "px-10 py-5 rounded-xl text-xs  text-white  transition-colors cursor-pointer": true,
                "bg-blue-400 hover:bg-blue-600": isLiveSource,
                "bg-blue-200 hover:bg-blue-300": !isLiveSource,
              })}
            >
              Preview
            </button>
            <button
              onClick={btnSource}
              className={classNames({
                "px-10 py-5 rounded-xl text-xs transition-colors cursor-pointer text-white ": true,
                "bg-green-400 hover:bg-green-600": isSource,
                "bg-green-200 hover:bg-green-300 ": !isSource,
              })}
            >
              Source
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
}
