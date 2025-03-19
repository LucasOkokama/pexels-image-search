import { Camera } from "react-feather";
import { Download } from "react-feather";
import { ImageGalleryStyle } from "./styles/ImageGalleryStyle";

interface ImageGalleryProps {
  images: any[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <ImageGalleryStyle>
      {images.map((image: any) => (
        <div className="card">
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
                href={image.src.original}
                download={`${image.id}_${image.width}x${image.height}`}
              >
                <div className="download">
                  <Download size={14} />
                </div>
              </a>
            </div>
          </a>
        </div>
      ))}
    </ImageGalleryStyle>
  );
};

export default ImageGallery;
