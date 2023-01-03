import React, { useState } from "react";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (ev) => {
    setSelectedFile(ev.target.files[0]);
    setIsFilePicked(true);
  };
  const submitHandler = () => {
    const formData = new FormData();
    formData.append("File", selectedFile);
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success!", result);
      })
      .catch((err) => console.log("Error", err));
  };
  console.log(selectedFile);
  return (
    <div>
      <input onChange={changeHandler} type="file" name="file" />
      {isFilePicked ? (
        <>
          <p>Filename : {selectedFile.name}</p>
          <p>Filetype : {selectedFile.type}</p>
          <p>Size in bytes : {selectedFile.size}</p>
          <p>
            {/* Last modified date: {new Date(selectedFile.lastModified * 1000)} */}
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
