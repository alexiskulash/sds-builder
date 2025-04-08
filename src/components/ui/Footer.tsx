import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-title">
        <div className="footer-logo">
          <img src="https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/729a8025e1e83a07fdc16b009f4d46946ab2e718?placeholderIfAbsent=true" className="footer-logo-image" alt="Logo" />
        </div>
        <div className="social-links">
          <img src="https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/aa0a1558e2843a5273dbfe487dd3f153ef5c465d?placeholderIfAbsent=true" className="social-icon" alt="Social icon" />
          <img src="https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/37d1af844d6964761a84ebf5c9357c506a34a41b?placeholderIfAbsent=true" className="social-icon" alt="Social icon" />
          <img src="https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/e94bee4314f30c430bce6a94fe06288c7a296e84?placeholderIfAbsent=true" className="social-icon" alt="Social icon" />
          <img src="https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/a0f4904bd35400a409f86b25bae1e57193141e9a?placeholderIfAbsent=true" className="social-icon" alt="Social icon" />
        </div>
      </div>

      <div className="footer-column">
        <div className="footer-column-title">
          <div>Use cases</div>
        </div>
        <div className="footer-list-item">UI design</div>
        <div className="footer-list-item">UX design</div>
        <div className="footer-list-item">Wireframing</div>
        <div className="footer-list-item">Diagramming</div>
        <div className="footer-list-item">Brainstorming</div>
        <div className="footer-list-item">Online whiteboard</div>
        <div className="footer-list-item">Team collaboration</div>
      </div>

      <div className="footer-column">
        <div className="footer-column-title">
          <div>Explore</div>
        </div>
        <div className="footer-list-item">Design</div>
        <div className="footer-list-item">Prototyping</div>
        <div className="footer-list-item">Development features</div>
        <div className="footer-list-item">Design systems</div>
        <div className="footer-list-item">Collaboration features</div>
        <div className="footer-list-item">Design process</div>
        <div className="footer-list-item">FigJam</div>
      </div>

      <div className="footer-column">
        <div className="footer-column-title">
          <div>Resources</div>
        </div>
        <div className="footer-list-item">Blog</div>
        <div className="footer-list-item">Best practices</div>
        <div className="footer-list-item">Colors</div>
        <div className="footer-list-item">Color wheel</div>
        <div className="footer-list-item">Support</div>
        <div className="footer-list-item">Developers</div>
        <div className="footer-list-item">Resource library</div>
      </div>
    </footer>
  );
};

export default Footer;
