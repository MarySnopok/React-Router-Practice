import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AlbumDetail = () => {
  const { albumId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/1/album.php?m=${albumId}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setAlbums(json.album);
      });
  }, [albumId]);

  return (
    <div>
      {albums.map((album) => (
        <div key={album.idAlbum}>
          <h1>{album.strAlbum}</h1>
          <img alt={`${album.strAlbum} `} src={`${album.strAlbumThumb}/preview`} />
          <p>{album.intYearReleased}</p>
          <p>{album.strGenre}</p>
          <p>{album.strLabel}</p>
        </div>
      ))}
    </div>
  );
};
