function PropertiesGallery({ images, description }) {
  return (
    <div className="single-property-images__gallery">
      {images.map((image, index) => (
        <figure
          className={`single-property-images__image single-property-images__image--${
            index + 1
          }`}
          id={index}
        >
          <img
            src={`${image}`}
            alt={description}
            class="single-property-images__img-item"
          />
        </figure>
      ))}
    </div>
  );
}

export default PropertiesGallery;
