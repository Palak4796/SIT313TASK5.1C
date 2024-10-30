import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import './QuestionForm.css';

const QuestionForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, tags });

    setTitle('');
    setDescription('');
    setTags('');
  };

  return (
    <Form className="question-form" onSubmit={handleSubmit}>
      <h2>What do you want to ask?</h2>
      <Form.Input
        label="Title"
        placeholder="Start your question with how, what, why, etc."
        className="input-field"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Form.TextArea
        label="Describe your problem"
        placeholder="Describe your problem in detail..."
        className="textarea-field"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Form.Input
        label="Tags"
        placeholder="Please add up to 3 tags to describe your question"
        className="input-field"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <div className="post-button-container">
        <button type="submit" className="custom-button">Post</button>
      </div>
    </Form>
  );
};

export default QuestionForm;
