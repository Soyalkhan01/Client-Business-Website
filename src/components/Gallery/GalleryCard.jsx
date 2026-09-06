function GalleryCard({ gallery, onImageClick }) {
  return (
    <div 
    onClick={() => onImageClick(gallery)}
    className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300">

      <img
        src={gallery.image}
        alt={gallery.title}
        loading="lazy"
        decoding="async"
        className="w-full h-72 object-cover hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-black/30 flex items-end">
        <div className="p-6 text-white">
          <h3 className="text-xl font-bold">
            {gallery.title}
          </h3>

          <p className="text-sm">
            {gallery.category}
          </p>
        </div>
      </div>

    </div>
  );
}

export default GalleryCard;