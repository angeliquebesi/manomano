import React, { useEffect, useState } from "react";
import DisplayImage from "../components/ImageImport/DisplayImage";
import avismano from "../api/avismano";

function Imagetest() {
  const [avis, setAvis] = useState(avismano);
  const [input, setInput] = useState("");
  const [images, setImages] = useState("");
  useEffect(() => {
    setImages(document.getElementById("image-upload").src);
  }, [input]);
  return (
    <div className="flex flex-col content-center justify-center items-center">
      <div>
        <ul className="flex flex-col gap-4">
          {avis.map((avis) => (
            <li className="flex flex-col border rounded" key={avis.avis}>
              <div className="font-semibold">{avis.prénom}</div>
              <div className="text-yellow-400">{avis.contenu}</div>
              {avis.texte}
              {avis.image ? (
                <img src={avis.image} alt="upload du client" />
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </div>
      <select id="mySelect">
        <option value="★☆☆☆☆">★</option>
        <option value="★★☆☆☆">★★</option>
        <option value="★★★☆☆">★★★</option>
        <option value="★★★★☆">★★★★</option>
        <option value="★★★★★">★★★★★</option>
      </select>
      <input
        value={input}
        type="text"
        id="send"
        placeholder="Votre commentaire"
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="submit"
        onClick={() =>
          setAvis(
            avis.concat([
              {
                contenu: `${document.getElementById("mySelect").value}`,
                texte: input,
                image: images,
              },
            ])
          )
        }
      />
      <DisplayImage />
    </div>
  );
}

export default Imagetest;
