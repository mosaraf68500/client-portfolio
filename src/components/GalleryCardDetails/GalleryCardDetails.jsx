import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

const GalleryCardDetails = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    fetch("/GalleryData.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setArtwork(found);
      });
  }, [id]);

  if (!artwork) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6">
        <Link
          to="/gallery"
          className="text-blue-600 underline mb-4 inline-block"
        >
          ← Back to Gallery
        </Link>
        <h2 className="text-3xl font-bold mb-4">{artwork.title}</h2>
        <img
          src={artwork.thumbnail}
          alt={artwork.title}
          className="w-full h-[400px] object-cover rounded-lg mb-6"
        />
        <p className="text-gray-700 mb-4">{artwork.description}</p>
        <p>
          <strong>Medium:</strong> {artwork.medium}
        </p>
        <p>
          <strong>Year:</strong> {artwork.year}
        </p>
        <p>
          <strong>Dimensions:</strong> {artwork.dimensions}
        </p>
      </div>
    </div>
  );
};

export default GalleryCardDetails;
