import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import AboutUsPage from './components/AboutUsPage';
import DonatePage from './components/DonatePage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';  // Import the CSS file

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
