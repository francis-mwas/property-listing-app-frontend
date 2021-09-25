function PropertiesGallery({ images }) {
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
            alt="Property image one"
            class="single-property-images__img-item"
            alt="Gal"
          />
        </figure>
      ))}
    </div>
  );
}

export default PropertiesGallery;
