import classNames from "classnames";
import { projectConstants } from "../Constans/projectConstants";
import Card from "../components/Card";

export default function Works() {
  return (
    <div className="container my-12 mx-auto">
      <div className="flex flex-wrap mx-10 mt-10">

       {projectConstants.map((item,index)=>(
         <div key={index} className={classNames({
          "w-full md:w-1/3 lg:w-1/4 m-10":true,
        })}>
          <Card 
          projectSourceUrl={item.projectSourceUrl}
          projectLiveUrl={item.projectLiveUrl} 
          imageSource={item.projectImageSource}
          projectName={item.projectName}
          />
        </div>
          
       ))}
      </div>
    </div>

   
  
  );
}
