"use client"
import { useState } from 'react';
import styles from './fileUpload.module.css';

const FileUploadForm = () => {
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadData, setUploadData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log('File uploaded successfully:', data);
        setUploadData(data);
       
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" className={styles.uploadButton}>Upload</button>
      </form>
      {previewImage && (
        <div className={styles.preview}>
          <img src={previewImage} alt="Preview" className={styles.previewImage} />
        </div>
      )}
      {uploadData && (
        <div className={styles.uploadedFileInfo}>
          <h2>Uploaded File Information</h2>
          <p className={styles.uploadedFileDetail}>File Name: {file.name}</p>
          <p className={styles.uploadedFileDetail}>MIME Type: {file.type}</p>
          <p className={styles.uploadedFileDetail}>File Size: {file.size} bytes</p>
         
        </div>
      )}
      {loading && <div className={styles.loading}>Loading...</div>}
    </div>
  );
};

export default FileUploadForm;
