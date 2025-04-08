import React from "react";

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="logo-block">
        <div className="logo-container">
          <img src="https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/dc42287d2c23d4b3123ff5b6ea3b219df341af84?placeholderIfAbsent=true" className="logo-image" alt="Logo" />
        </div>
      </div>
      <nav className="navigation-pill-list">
        <div className="navigation-pill active">Products</div>
        <div className="navigation-pill">Solutions</div>
        <div className="navigation-pill">Community</div>
        <div className="navigation-pill">Resources</div>
        <div className="navigation-pill">Pricing</div>
        <div className="navigation-pill">Contact</div>
        <div className="navigation-pill">Link</div>
      </nav>
      <div className="header-auth">
        <div className="btn btn-secondary">Sign in</div>
        <div className="btn btn-primary">Register</div>
      </div>
    </header>
  );
};

export default Header;
