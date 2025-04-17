import React, { useState } from "react";

const ProjectModal = ({ onClick }) => {
  // tog hjälp av AI för formData, handleChange och handleSubmit då jag fastnade på hur jag ska skicka tillbaka formdatan till Projects

  const [formData, setFormData] = useState({
    //AI-genererad kod
    projectName: "",
    description: "",
    startDate: "",
    endDate: "",
    budget: "",
  });

  const handleChange = (e) => {
    //AI-genererad kod
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    //AI-genererad kod
    e.preventDefault();
    console.log(formData);
    onClick(e, formData);
  };

  return (
    <div className="modal">
      <form className="add-project-form">
        <div className="form-group">
          <label className="">Title</label>
          <input type="text" name="projectName" placeholder="Title" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="">Description</label>
          <textarea rows={4} name="description" onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label className="">Start date</label>
          <input type="date" name="startDate" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="">End date</label>
          <input type="date" name="endDate" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="">Budget</label>
          <input type="number" name="budget" onChange={handleChange} />
        </div>
        <div className="form-group">
          <button className="btn btn-submit" type="button" onClick={handleSubmit}>
            Create project
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectModal;
