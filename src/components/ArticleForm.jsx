import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import './ArticleForm.css';
import { storage } from '../utils/firebase';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [articleText, setArticleText] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleImageUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        'state_changed',
        null,
        (error) => {
          console.error("Error uploading image:", error);
        },
        () => {
          storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then((url) => setImageUrl(url));
        }
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, abstract, articleText, tags, imageUrl });
    
    setTitle('');
    setAbstract('');
    setArticleText('');
    setTags('');
    setImage(null);
    setImageUrl('');
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
        type="file" 
        label="Add an image" 
        onChange={handleImageChange} 
        className="input-field"
      />
      
      <div className="upload-button-container">
        <Button onClick={handleImageUpload} color="blue" className="upload-button left-aligned">Upload</Button>
      </div>

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
