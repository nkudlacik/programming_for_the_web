import { Link, useParams } from "react-router-dom";

export function Songs({ data }) {
  const { slug } = useParams();
  const selectedSong = data.songs.find((song) => song.slug === slug);

  return (
    <>
      <nav>
        <Link to="/">Go Back Home</Link>
      </nav>

      {selectedSong !== undefined ? (
        <div>
          <h1>{selectedSong.title}</h1>
          <h2>{selectedSong.title}</h2>
          <p>Artist: {selectedSong.artist}</p>
          <img src={selectedSong.cover} alt={selectedSong.title} />
          <p>Rank: {selectedSong.rank}</p>
        </div>
      ) : (
        <div>No Song Matched Your URL</div>
      )}
    </>
  );
}