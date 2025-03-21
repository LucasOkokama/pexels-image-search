import { Camera } from "react-feather";
import { Download } from "react-feather";
import { ImageGalleryStyle } from "./styles/ImageGalleryStyle";

interface ImageGalleryProps {
  images: any[];
}

interface DownloadLinkProps {
  imgURL: string;
  id: number;
  width: number;
  height: number;
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const downloadImage = async ({
    imgURL,
    id,
    width,
    height,
  }: DownloadLinkProps) => {
    const response = (await fetch(imgURL)).blob();

    const link = document.createElement("a");
    link.href = URL.createObjectURL(await response);
    link.download = `${id}_${width}x${height}`;

    link.click();
  };

  return (
    <ImageGalleryStyle>
      {images.map((image: any) => (
        <div className="card" key={image.id}>
          <a
            href={image.src.original}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              key={image.id}
              src={image.src.large2x}
              alt={image.alt}
              className="image"
            />
          </a>

          <div className="details">
            <a
              href={image.photographer_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="photographer">
                <Camera size={18} />
                <span>{image.photographer}</span>
              </div>
            </a>

            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                downloadImage({
                  imgURL: image.src.original,
                  id: image.id,
                  width: image.width,
                  height: image.height,
                });
              }}
            >
              <div className="download">
                <Download size={14} />
              </div>
            </a>
          </div>
        </div>
      ))}
    </ImageGalleryStyle>
  );
};

export default ImageGallery;
