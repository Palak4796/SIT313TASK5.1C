import React, { useState } from "react";
import { Container, Header } from "semantic-ui-react";
import QuestionForm from "./QuestionForm";  
import ArticleForm from "./ArticleForm";    
import "./PostPage.css";

const PostPage = () => {
  const [postType, setPostType] = useState(null);

  const PostTypeSelector = () => {
    const handleChange = (e) => {
      setPostType(e.target.value);
    };

    return (
      <div className="post-type-selector">
        <Header as="h1">New Post</Header> 
        <div className="inline-container">
          <h2 className="post-type-heading">Select Post Type</h2>
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                value="question" 
                checked={postType === 'question'} 
                onChange={handleChange} 
              />
              Question
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                value="article" 
                checked={postType === 'article'} 
                onChange={handleChange} 
              />
              Article
            </label>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Container className="post-container">
      <PostTypeSelector />
      {postType === "question" && <QuestionForm />}
      {postType === "article" && <ArticleForm />}
    </Container>
  );
};

export default PostPage;
