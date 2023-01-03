import React, { useState } from "react";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (ev) => {
    setSelectedFile(ev.target.files[0]);
    setSelectedFile(true);
  };
  const submitHandler = () => {
    const formData = new FormData();
  };
  return (
    <div>
      <input onChange={changeHandler} type="file" name="file" />
      {selectedFile ? (
        <>
          <p>Filename : {selectedFile.name}</p>
          <p>Filetype : {selectedFile.type}</p>
          <p>Size in bytes : {selectedFile.size}</p>
          <p>
            Last modified date:{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </>
      ) : (
        <p>Select a file to upload</p>
      )}
      <div>
        <button onSubmit={submitHandler}>Submit</button>
      </div>
    </div>
  );
}

export default FileUpload;
