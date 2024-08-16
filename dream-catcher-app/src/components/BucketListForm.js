import React, { useState } from 'react';

function BucketListForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(formData);
    setFormData({
      title: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
      imageUrl: '',
    });
  };

  return (
    <div className="bucket-list-form-container">
      <form className="bucket-list-form" onSubmit={handleSubmit}>
        <h2>Add New Adventure</h2>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Dream adventure"
          required
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Where to?"
          required
        />
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your dream..."
          required
        />
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <button type="submit">Add to Bucket List</button>
      </form>
    </div>
  );
}

export default BucketListForm;