// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UploadPage = () => {
//   const [file, setFile] = useState(null);
//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (file) {
//       navigate("/display", { state: { fileName: file.name } });
//     } else {
//       alert("Please select a file first.");
//     }
//   };

//   return (
//     <div>
//       <h1>Upload Image</h1>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload and View</button>
//     </div>
//   );
// };

// export default UploadPage;
