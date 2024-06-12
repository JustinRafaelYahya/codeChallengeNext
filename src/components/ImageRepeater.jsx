import Image from "next/image";

const ImageRepeater = ({ src, height, width, alt, ...props }) => (
  <>
    <div>
      <Image {...props} src={src} height={height} width={width} alt={alt} />
    </div>
  </>
);

export default ImageRepeater;
