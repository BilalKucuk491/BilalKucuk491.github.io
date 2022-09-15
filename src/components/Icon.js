import SVG from "react-inlinesvg";
function Icon({ pathname, size = 40, ...props }) {
  return (
    <SVG
      // preProcessor={(code) =>
      //   code.replace(/fill=".*?"/g, 'fill="currentColor"')
      // }
      src={`${process.env.PUBLIC_URL}/icons/${pathname}.svg`}
      width={size}
      height={size}
      {...props}
    />
  );
}

export default Icon;
