import React, { useState } from 'react';
import axios from 'axios';

import Footer from './components/Footer';

import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const onFileChangeHandler = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  // const handleSubmitFile = async () => {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   console.log('formData', formData);

  //   try {
  //     const response = await axios.post('YOUR_API_ENDPOINT', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //       responseType: 'arraybuffer',
  //     });

  //     // Handle response
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //   }
  // };

  // const handleSubmit = () => {
  //   if (file) {
  //     handleSubmitFile();
  //     return;
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    console.log('formData', formData);

    try {
      const response = await axios.post('YOUR_API_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Use multipart/form-data for file uploads
        },
        responseType: 'arraybuffer',
      });

      // Handle response
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  console.log('file', file, typeof file);

  return (
    <div className="container">
      <div className="title">Neo ChatBot</div>
      <div className="sub-title">How can I help you today?</div>
      <div className="bottom-section">
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            className="form-control"
            name="file"
            onChange={onFileChangeHandler}
            accept=".zip"
          />
        </form>
        {/* {file ? <div className="file-name">{file?.name}</div> : null} */}
        <Footer
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </div>
  );
}

export default App;
