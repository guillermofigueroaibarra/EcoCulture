import React, { useState } from "react";
import "./PagesStyles/Blog.css";

// Article Content component
import AContent from "../Components/AContent/AContent";
// images
import articles from "./WebsiteText/articles.json";
import a1pic1 from "../assets/articles/a1pic1.jpg";
import a1pic2 from "../assets/articles/a1pic2.jpg";
import a2pic1 from "../assets/articles/a2pic1.jpg";
import a2pic2 from "../assets/articles/a2pic2.jpg";
import a3pic1 from "../assets/articles/a3pic1.jpg";
import a3pic2 from "../assets/articles/a3pic2.jpeg";
import a4pic1 from "../assets/articles/a4pic1.jpg";
import a4pic2 from "../assets/articles/a4pic2.jpg";

const Blog = () => {
  const [selectedDiv, setSelectedDiv] = useState(null); // Track  div's identifier

  // list of imgs for slideshows
  const article1imgs = [a1pic1, a1pic2];
  const article2imgs = [a2pic1, a2pic2];
  const article3imgs = [a3pic1, a3pic2];
  const article4imgs = [a4pic1, a4pic2];

  const handleDivClick = (id) => {
    setSelectedDiv(id); // Set the state to the id of the clicked div
  };

  // Map selected div to article content
  const renderSelectedContent = () => {
    switch (selectedDiv) {
      case "article1":
        return (
          <AContent
            text={articles.article1.content}
            images={article1imgs}
            heading={articles.article1.title}
            date={articles.article1.date}
          ></AContent>
        );

      case "article2":
        return (
          <AContent
            text={articles.article2.content}
            images={article2imgs}
            heading={articles.article2.title}
            date={articles.article2.date}
          ></AContent>
        );
      case "article3":
        return (
          <AContent
            text={articles.article3.content}
            images={article3imgs}
            heading={articles.article3.title}
            date={articles.article3.date}
          ></AContent>
        );

      case "article4":
        return (
          <AContent
            text={articles.article4.content}
            images={article4imgs}
            heading={articles.article4.title}
            date={articles.article4.date}
          ></AContent>
        );
      default:
        return null;
    }
  };

  return (
    <div className="blog-container">
      {/* Render  the list of articles or the selected article content */}
      {!selectedDiv ? (
        <div className="blog-posts">
          {/* Blog Post 1 */}
          <h1>
            Explore stories, tips, and insights on sustainability, lifestyle,
            and more!
          </h1>

          <div
            id="article1"
            className="blog-post"
            onClick={() => handleDivClick("article1")}
          >
            <h2 className="blog-post-title">
              10 Ways to Live a Sustainable Life
            </h2>
            <p className="blog-post-date">Published on December 8, 2024</p>
            <p className="blog-post-excerpt">
              Living sustainably doesn't have to be hard. Here are 10 practical
              steps to reduce your environmental footprint...
            </p>
          </div>

          {/* Blog Post 2 */}
          <div
            id="article2"
            className="blog-post"
            onClick={() => handleDivClick("article2")}
          >
            <h2 className="blog-post-title">DIY Projects for a Greener Home</h2>
            <p className="blog-post-date">Published on December 1, 2024</p>
            <p className="blog-post-excerpt">
              Transform your home into an eco-friendly haven with these fun and
              easy DIY projects...
            </p>
          </div>

          {/* Blog Post 3 */}
          <div
            id="article3"
            className="blog-post"
            onClick={() => handleDivClick("article3")}
          >
            <h2 className="blog-post-title">Green Tech Innovations</h2>
            <p className="blog-post-date">Published on December 15, 2024</p>
            <p className="blog-post-excerpt">
              Explore the latest technological innovations aimed at improving
              sustainability...
            </p>
          </div>

          {/* Blog Post 4 */}
          <div
            id="article4"
            className="blog-post"
            onClick={() => handleDivClick("article4")}
          >
            <h2 className="blog-post-title">The Future of Recycling</h2>
            <p className="blog-post-date">Published on December 15, 2024</p>
            <p className="blog-post-excerpt">
              Explore the latest trends and innovations when it comes to
              sustainability...
            </p>
          </div>
        </div>
      ) : (
        <div className="material-content">
          {/* Render the selected article content */}
          {renderSelectedContent()}
          <button onClick={() => setSelectedDiv(null)} className="backButton">
            Back to Articles
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
