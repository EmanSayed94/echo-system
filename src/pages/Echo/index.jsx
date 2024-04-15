import React, { useEffect, useState } from "react";
import { urlSafeToBase64 } from "../../helpers/urlSafeToBase64";

function Echo() {
  const [audio, setAudio] = useState();
  const [loading, setLoading] = useState(false);
  const [voice, setVoice] = useState();

  const addFile = (e) => {
    if (e.target.files[0]) {
      setAudio(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    if (audio) {
      callKateb(audio);
    }
  };
  const callKateb = (audioo) => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append("file", audioo, "file.wav");
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    fetch("https://echo-6sdzv54itq-uc.a.run.app/kateb", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const res = JSON.parse(result);
        if (res) {
          const words = res?.["json"]?.words.map((dd) => dd.text);
          const repeatedWord = words?.slice(-1)[0];
          const text = [
            ...words,
            repeatedWord,
            repeatedWord,
            repeatedWord,
          ].join(" ");
          callNatiq(text);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const callNatiq = (text) => {
    var formdata = { text };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(formdata),
      redirect: "follow",
    };
    fetch("https://echo-6sdzv54itq-uc.a.run.app/natiq", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setVoice(urlSafeToBase64(result.wave));
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <div class=" font-[sans-serif] max-w-md mx-auto pt-4 relative">
        <input
          onChange={addFile}
          type="file"
          className="w-full text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-blue-500 file:hover:bg-blue-700 file:text-white rounded"
        />
        <button
          className="w-full py-2 px-1 my-4 bg-white border border-1 border-blue-500 text-blue-500 rounded "
          onClick={handleUpload}
        >
         EHCO
        </button>
      {loading && <div className="text-xl text-white	 flex justify-center items-center align fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50 mt-0">L .O . A . D . I . N . G . . . . </div>}
      {voice && (
        <audio id="audioPlayer" controls className="w-full">
          <source src={`data:audio/mp3;base64,${voice}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      </div>
    </div>
  );
}

export default Echo;
