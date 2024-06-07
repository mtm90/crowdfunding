import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isShrunk ? "shrunk" : ""}>
      <div className="title-subtitle">
        <h1>Blooming Together</h1>
        <p>Revitalize Our Community Garden</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
