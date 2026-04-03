import {Link} from "react-router-dom";
import musicData from "../assets/music.json";

export function Home() {
  return (
    <>
      <h1>Music List</h1>

      {Array.isArray(musicData.songs) &&
        musicData.songs.map((song) => (
          <div key={song.slug}>
            <img src={song.cover} alt={song.title} />
            <p>
              <Link to={`/${song.slug}`}>
                <strong>
                  {song.title} by {song.artist}
                </strong>
              </Link>
            </p>
          </div>
        ))}
    </>
  );
}