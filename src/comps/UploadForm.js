import React, { useState } from "react";

import ProgressBar from "./progressBar";
const UploadForm = () => {
  const [file, setfile] = useState(null);
  const [error, seterror] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    let selectedFiles = e.target.files[0];
    if (selectedFiles && types.includes(selectedFiles.type)) {
      setfile(selectedFiles);
      seterror("");
    } else {
      setfile(null);
      seterror("please select an image file (png or jpeg)");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setfile={setfile} />}
      </div>
    </form>
  );
};
export default UploadForm;
