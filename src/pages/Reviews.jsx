import React, { useEffect, useState } from "react";
import DisplayImage from "../components/ImageImport/DisplayImage";
import avismano from "../api/avismano";

function Reviews() {
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
    <div className="flex flex-col content-center justify-center items-center gap-2 w-full">
      <h2 className="mt-8 text-ellipsis text-3xl overflow-hidden w-full h-8 font-bold text-center">
        Reviews
      </h2>
      <div>
        <ul className="flex flex-col gap-4">
          {allAvis.map((avis) => (
            <li
              className="p-2 max-w-full flex flex-col gap-4 md:flex-row rounded-lg shadowed"
              key={avis.avis}
            >
              <div className="font-semibold">{avis.prénom}</div>
              <div className="text-yellow-400">{avis.contenu}</div>
              {avis.texte}
              {avis.image ? (
                <img
                  className="max-w-fit"
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
      <div className="flex flex-col gap-4 w-full mt-4">
        <input
          className="border border-black p-2 w-full rounded bg-black shadow-inner"
          value={name}
          type="text"
          id="name"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex w-full">
          <select
            className="border border-black p-2 rounded bg-black"
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
        <div className="flex flex-col gap-4">
          <input
            className="border border-black p-2 w-full rounded bg-black shadow-inner"
            value={input}
            type="text"
            id="send"
            placeholder="Your review"
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            className="transition h-12 rounded bg-teal px-16 font-semibold hover:bg-teal-400 active:bg-teal-700  text-white"
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
    </div>
  );
}

export default Reviews;
