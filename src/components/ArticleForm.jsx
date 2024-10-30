import React, { useState } from 'react';
import { Form} from 'semantic-ui-react';
import './ArticleForm.css';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [articleText, setArticleText] = useState('');
  const [tags, setTags] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, abstract, articleText, tags });
    
    setTitle('');
    setAbstract('');
    setArticleText('');
    setTags('');
    
  };

  return (
    <Form className="article-form" onSubmit={handleSubmit}>
      <h2 className="article-form-header">What do you want to share?</h2>
      
      <Form.Input 
        label="Title" 
        placeholder="Enter a descriptive title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field"
      />
      
      <Form.Input 
        label="Abstract" 
        placeholder="Enter a 1-paragraph abstract" 
        value={abstract}
        onChange={(e) => setAbstract(e.target.value)}
        className="input-field"
      />
      
      <Form.TextArea 
        label="Article Text" 
        placeholder="Enter article content..." 
        value={articleText}
        onChange={(e) => setArticleText(e.target.value)}
        className="textarea-field"
      />
      
      <Form.Input 
        label="Tags" 
        placeholder="Please add up to 3 tags e.g., Java" 
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="input-field"
      />
      
      <div className="post-button-container">
        <button type="submit" className="custom-button">Post</button>
      </div>
    </Form>
  );
};

export default ArticleForm;
