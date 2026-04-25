interface GalleryProps {
  images: string[];
  onImageClick: (index: number) => void;
  containerClassName?: string;
  overlayClassName?: string;
}

export function Gallery({
  images,
  onImageClick,
  containerClassName = "flex gap-[16px] items-center",
  overlayClassName = "bg-[rgba(0,0,0,0.02)]",
}: GalleryProps) {
  return (
    <div className={containerClassName}>
      {images.map((image, index) => (
        <div
          key={index}
          className="group bg-[#f7f7f7] flex flex-col h-[86px] items-start relative shrink-0 w-[153px] cursor-pointer overflow-hidden"
          onClick={() => onImageClick(index)}
        >
          <div className="h-full overflow-clip relative w-full">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-300 ease-out group-hover:scale-105"
              src={image}
            />
          </div>
          <div
            className={`absolute inset-0 transition-colors duration-300 ease-out group-hover:bg-[rgba(0,0,0,0)] ${overlayClassName}`}
          />
        </div>
      ))}
    </div>
  );
}
