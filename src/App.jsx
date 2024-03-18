import { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
    const [file, setFile] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const onFileChangeHandler = (e) => {
        e.preventDefault();
        console.log('e.target.files', e.target.files)
        setFile(e.target.files[0]);
    };


    const formSubmit = (e) => {
        e.preventDefault();
        const url = 'http://127.0.0.1:5000/buildJunits';  // change the end point as per the requirement

        axios.post(url, {repo_url: inputValue}).then(response => {
            console.log('Response:', response.data);
          })
          .catch(error => {
            console.error('Error:', error);
          })

    }

    return (
        <div className="container">
            <div className="title">Neo ChatBot</div>
            <div className="sub-title">How can I help you today?</div>
            <div className="bottom-section">
                <form>
                    <input
                        type="file"
                        className="form-control"
                        name="file"
                        id="select-file"
                        onChange={onFileChangeHandler}
                        style={{ display: "none" }}
                    // accept=".zip"
                    />
                </form>
                {file ? <div className="file-name">{file?.name}</div> : null}
                <div className="footer-section">
                    <textarea
                        type="text"
                        placeholder="Enter your code..."
                        rows="1"
                        className="text-area"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    <label htmlFor="select-file">
                        <div style={{ cursor: 'pointer' }}>
                            <img
                                width="26"
                                height="26"
                                src="https://img.icons8.com/3d-fluency/94/upload.png"
                                alt="upload"
                            />
                        </div>
                    </label>

                    <button type='submit' style={{ cursor: 'pointer' }} onClick={formSubmit}>
                        <img
                            width="26"
                            height="26"
                            src="https://img.icons8.com/arcade/64/sent.png"
                            alt="sent"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
