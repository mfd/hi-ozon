import { useState } from "react";
import LightboxComponent from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";

interface LightboxProps {
  images: string[];
  index: number;
  open: boolean;
  onClose: () => void;
}

export function Lightbox({ images, index, open, onClose }: LightboxProps) {
  const hasSingleImage = images.length === 1;
  const slides = images.map((src) => {
    if (src.toLowerCase().endsWith(".mp4")) {
      return {
        type: "video" as const,
        poster: src.replace(/\.mp4$/i, "_poster.jpg"),
        preload: "auto",
        autoPlay: true,
        loop: true,
        controls: false,
        muted: true,
        playsInline: true,
        sources: [{ src, type: "video/mp4" }],
      };
    }

    return { src };
  });

  return (
    <>
      {hasSingleImage && (
        <style>{`
          .yarl__nav {
            display: none !important;
          }
          .yarl__icon_button--prev,
          .yarl__icon_button--next,
          button[aria-label="Previous"],
          button[aria-label="Next"],
          .yarl__button_prev,
          .yarl__button_next {
            display: none !important;
          }
        `}</style>
      )}
      <LightboxComponent
        open={open}
        close={onClose}
        index={index}
        controller={{ closeOnBackdropClick: true }}
        plugins={[Video]}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
          slide: { maxWidth: "960px", margin: "0 auto" },
        }}
        toolbar={{ style: { padding: "80px" } }}
      />
    </>
  );
}

interface UseLightboxReturn {
  openLightbox: (images: string[], index: number) => void;
  lightboxProps: {
    images: string[];
    index: number;
    open: boolean;
    onClose: () => void;
  };
}

export function useLightbox(): UseLightboxReturn {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  const openLightbox = (newImages: string[], newIndex: number) => {
    setImages(newImages);
    setIndex(newIndex);
    setOpen(true);
  };

  const closeLightbox = () => {
    setOpen(false);
  };

  return {
    openLightbox,
    lightboxProps: {
      images,
      index,
      open,
      onClose: closeLightbox,
    },
  };
}