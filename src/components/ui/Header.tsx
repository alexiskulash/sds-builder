import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [activePill, setActivePill] = useState("products");
  const pathname = usePathname();

  useEffect(() => {
    // Set active pill based on current path
    if (pathname === "/pricing") {
      setActivePill("pricing");
    } else if (pathname === "/") {
      setActivePill("products");
    }
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="logo-block">
        <div className="logo-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/18765e71dc4e4659babb82d28dd0cd26/dc42287d2c23d4b3123ff5b6ea3b219df341af84?placeholderIfAbsent=true"
            className="logo-image"
            alt="Logo"
          />
        </div>
      </div>
      <nav className="navigation-pill-list">
        <div
          className={`navigation-pill ${activePill === "products" ? "active" : ""}`}
          onClick={() => setActivePill("products")}
        >
          Products
        </div>
        <div
          className={`navigation-pill ${activePill === "solutions" ? "active" : ""}`}
          onClick={() => setActivePill("solutions")}
        >
          Solutions
        </div>
        <div
          className={`navigation-pill ${activePill === "community" ? "active" : ""}`}
          onClick={() => setActivePill("community")}
        >
          Community
        </div>
        <div
          className={`navigation-pill ${activePill === "resources" ? "active" : ""}`}
          onClick={() => setActivePill("resources")}
        >
          Resources
        </div>
        <Link
          href="/pricing"
          className={`navigation-pill ${activePill === "pricing" ? "active" : ""}`}
          onClick={() => setActivePill("pricing")}
        >
          Pricing
        </Link>
        <div
          className={`navigation-pill ${activePill === "contact" ? "active" : ""}`}
          onClick={() => setActivePill("contact")}
        >
          Contact
        </div>
        <div
          className={`navigation-pill ${activePill === "link" ? "active" : ""}`}
          onClick={() => setActivePill("link")}
        >
          Link
        </div>
      </nav>
      <div className="header-auth">
        <div className="btn btn-secondary">Sign in</div>
        <div className="btn btn-primary">Register</div>
      </div>
    </header>
  );
};

export default Header;
