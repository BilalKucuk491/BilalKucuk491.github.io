import classNames from "classnames";

export default function Card({ source }) {
  return (
    <>
      <div className="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden">
        <img
          className="w-72 h-48 object-cover"
          src={source}
          alt=""
        />

        <div className="p-5 gap-3 bg-white">
          <div className="flex items-center gap-2">
            <button className={classNames({
              "px-10 py-5 rounded-xl text-xs bg-blue-400 text-white hover:bg-blue-600 transition-colors cursor-pointer":true
            })}>Preview</button>
            <button className="px-10 py-5 rounded-xl text-xs bg-green-400 hover:bg-green-600 transition-colors cursor-pointer text-white">Source</button>
          </div>
        </div>
      </div>
    </>
  );
}
