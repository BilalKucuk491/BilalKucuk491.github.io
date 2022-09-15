import Button from "./Button";

export default function Sidebar() {
  return (
    <div className="flex">
      <aside className="h-screen sticky top-0">
        <nav className="mb-10 h-20 mt-[55px] p-5">
          <div className="text-2xl"> Bilal Küçük </div>
          <div className="text-base"> Frontend Developer </div>
        </nav>
        <nav className="ml-5">
          <Button pathName="/aboutme" name="About" />
          <Button pathName="/projects" name="Projects" />
          <Button pathName="/contact" name="Contact" />
          <Button pathName="/blog" name="Blog" />

        </nav>
      </aside>
    </div>
  );
}
