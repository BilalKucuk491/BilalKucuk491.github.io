import Icon from "../components/Icon";
import { contactConstants } from "../Constans/contactConstants";

export default function Aboutme() {
  return (
    <div className="flex items-center gap-y-1 justify-center flex-col">
      <p className="flex items-center justify-center text-[50px] animate-pulse text-neon_green">Who am I?</p>
      <Icon pathname="github" size={100} className="mt-10" />

     <div className="mt-20">
     <p className="relative left-5">
        Hello, I am Bilal Küçük, I have been working as a frontend developer for
        a year and a half. Everyday I learn something new and try to improve
        myself.
      </p>

      <div className="flex gap-x-2 mt-20 justify-center">
      {contactConstants.map((contact)=>(
        <a href={contact.contactLink} target="_blank"> {contact.contactIcon} </a>
      ))}
      </div>

     </div>
      <a href="" className="text-neon_green mt-10">Let’s make something special.</a>
    </div>
  );
}
