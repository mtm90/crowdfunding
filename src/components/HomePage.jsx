import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = [
      "/images/hero1.webp",
      "/images/hero2.webp",
      "/images/hero3.webp",
      "/images/hero4.webp",
      "/images/hero5.webp",
      "/images/hero6.webp",
      "/images/hero7.webp",
      "/images/hero8.webp",
      "/images/hero9.webp",
      "/images/hero10.webp",
    ];

    const preloadImages = () => {
      Promise.all(images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve;
          img.onerror = reject;
        });
      })).then(() => {
        setImagesLoaded(true);
      }).catch((error) => {
        console.error("Image preloading failed:", error);
      });
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      const intervalId = setInterval(changeBackgroundImage, 6000);
      return () => clearInterval(intervalId);
    }
  }, [imagesLoaded]);

  const images = [
    "url('/images/hero1.webp')",
    "url('/images/hero2.webp')",
    "url('/images/hero3.webp')",
    "url('/images/hero4.webp')",
    "url('/images/hero5.webp')",
    "url('/images/hero6.webp')",
    "url('/images/hero7.webp')",
    "url('/images/hero8.webp')",
    "url('/images/hero9.webp')",
    "url('/images/hero10.webp')",
  ];

  let currentIndex = 0;
  const heroSection = document.querySelector(".hero");

  const changeBackgroundImage = () => {
    heroSection.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  };

  return (
    <main className="home-page">
      <section className="hero"></section>

      <section className="intro-home">
        <h2>Welcome to Blooming Together</h2>
        <p>
          Join us in our mission to transform our neighborhood public gardens
          into beautiful, sustainable spaces. With your help, we can create a
          vibrant community hub that supports local wildlife and brings people
          together.
        </p>
      </section>

      <section className="highlights">
        <div className="highlight">
          <h3>Community</h3>
          <p>
            Engage with your neighbors and contribute to a project that benefits
            everyone. Our community is at the heart of everything we do.
          </p>
        </div>
        <div className="highlight">
          <h3>Sustainability</h3>
          <p>
            Our garden renovation prioritizes eco-friendly practices, using
            native plants and sustainable materials to create a lasting impact.
          </p>
        </div>
        <div className="highlight">
          <h3>Education</h3>
          <p>
            We offer educational programs and workshops to teach the community
            about gardening, sustainability, and the environment.
          </p>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Get Involved</h2>
        <p>
          There are many ways to support our project. Whether you donate,
          volunteer, or simply spread the word, every bit helps us reach our
          goal.
        </p>
        <button
          className="call-to-action-button"
          onClick={() => (window.location.href = "/donate")}
        >
          Donate Now
        </button>
      </section>
    </main>
  );
};

export default HomePage;
