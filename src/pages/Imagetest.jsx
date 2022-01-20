import React, { useEffect, useState } from "react";
import DisplayImage from "../components/ImageImport/DisplayImage";
import avismano from "../api/avismano";

function Imagetest() {
  const [allAvis, setAllAvis] = useState(avismano);
  const [input, setInput] = useState("");
  const [images, setImages] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    setImages(document.getElementById("image-upload").src);
  }, [input]);

  useEffect(() => {
    setImages(document.getElementById("image-upload").src);
  }, [name]);
  return (
    <div className="flex flex-col content-center justify-center items-center gap-2">
      <div>
        <ul className="flex flex-col gap-4">
          {allAvis.map((avis) => (
            <li
              className="flex flex-col border rounded p-4 bg-lightgrey"
              key={avis.avis}
            >
              <div className="font-semibold">{avis.prénom}</div>
              <div className="text-yellow-400">{avis.contenu}</div>
              {avis.texte}
              {avis.image ? (
                <img
                  className="max-w-xs"
                  src={avis.image}
                  alt="upload du client"
                />
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </div>
      <input
        className="border border-black p-2 w-96 rounded bg-lightgrey shadow-inner hover:bg-white"
        value={name}
        type="text"
        id="name"
        placeholder="Votre prénom"
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex">
        <select
          className="border border-black p-2 rounded bg-lightgrey"
          id="mySelect"
        >
          <option className="text-yellow-400" value="★☆☆☆☆">
            ★
          </option>
          <option className="text-yellow-400" value="★★☆☆☆">
            ★★
          </option>
          <option className="text-yellow-400" value="★★★☆☆">
            ★★★
          </option>
          <option className="text-yellow-400" value="★★★★☆">
            ★★★★
          </option>
          <option className="text-yellow-400" value="★★★★★">
            ★★★★★
          </option>
        </select>
        <DisplayImage />
      </div>
      <div className="flex flex-col gap-2">
        <input
          className="border border-black p-2 w-96 rounded bg-lightgrey shadow-inner hover:bg-white"
          value={input}
          type="text"
          id="send"
          placeholder="Votre commentaire"
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          className="transition h-12 w-50 rounded bg-teal px-16 font-semibold hover:bg-teal-400 active:bg-teal-700  text-white"
          type="submit"
          onClick={() =>
            setAllAvis(
              allAvis.concat([
                {
                  prénom: name,
                  contenu: `${document.getElementById("mySelect").value}`,
                  texte: input,
                  image: images,
                },
              ])
            )
          }
        />
      </div>
    </div>
  );
}

export default Imagetest;
