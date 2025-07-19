// src/App.js
import React from 'react';
import './index.css';
import TopPattern from './assets/images/webTop.png';
import NoqaLogo from './assets/images/noqaLogo.png';

const socials = [
  { name: 'Instagram', url: 'https://www.instagram.com/noqa.studio/' },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61578266345173' },
  { name: 'Tiktok', url: 'https://www.tiktok.com/@noqa.studio?_t=ZS-8y6nef4xIGN&_r=1' },
];

function App() {
  return (
    <div className="page">
      <div className="top-section">
        <img src={TopPattern} alt="Background pattern" className="top-pattern" />
        <div className="logo-wrapper">
          <img src={NoqaLogo} alt="Noqa logo" className="noqa-logo" />
        </div>
      </div>

      <p className="subtitle">Follow us & stay connected!</p>

      <div className="button-group">
        {socials.map((social) => (
          <a
            key={social.name}
            className="social-button"
            href={social.url}
            target="_blank"
            rel="noreferrer"
          >
            {social.name}
          </a>
        ))}
      </div>

      <hr className="divider" />

      <div className="button-group">
        <a
  className="social-button feedback-button"
  href="https://docs.google.com/forms/d/e/1FAIpQLScdus87GkeiSPjHjXuCFCoALMx0ls3JOxW7gCaYm-4o-9R1Xw/viewform?usp=dialog"
  target="_blank"
  rel="noreferrer"
>
  Give Feedback
</a>
      </div>
    </div>
  );
}

export default App;
