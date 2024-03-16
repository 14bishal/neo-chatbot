import React from 'react';
import './styles.css';

function Footer({
  handleSubmit = () => {},
  inputValue = '',
  setInputValue = () => {},
}) {
  return (
    <div className="footer-section">
      <textarea
        type="text"
        placeholder="Enter your code..."
        row="1"
        className="text-area"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* <div style={{ cursor: 'pointer' }}>
        <img
          width="26"
          height="26"
          src="https://img.icons8.com/3d-fluency/94/upload.png"
          alt="upload"
        />
      </div> */}
      <div style={{ cursor: 'pointer' }} onClick={handleSubmit}>
        <img
          width="26"
          height="26"
          src="https://img.icons8.com/arcade/64/sent.png"
          alt="sent"
        />
      </div>
    </div>
  );
}

export default Footer;
