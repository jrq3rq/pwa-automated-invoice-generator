// components/DataUpload.js
import styled from "styled-components";
import React from "react";

const Input = styled.input`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.8rem;
  width: auto;
`;

const DataUpload = ({ onFileSelect }) => {
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      onFileSelect(event.target.files[0]);
    }
  };

  return (
    <>
      <Input
        id="file-upload"
        type="file"
        accept=".csv"
        onChange={handleFileChange}
      />
    </>
  );
};

export default DataUpload;
