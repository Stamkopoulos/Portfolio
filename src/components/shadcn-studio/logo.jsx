// SVG Import
import LogoSvg from "@/assets/logo";

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2.5 ml-5 ${className}`}>
      <LogoSvg className="size-8.5" />
      <h1 className=" text-4xl font-signature ">Stamkopoulos</h1>
      {/* <span className="text-xl font-semibold">Stamkopoulos</span> */}
    </div>
  );
};

export default Logo;
