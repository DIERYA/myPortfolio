import React from 'react';

const ContactForm = () => {
  return (
    <div className='form-container'>
    <form>
    <fieldset>
     
      <div className="form-group">
        <label for="exampleInputEmail1" className="form-label mt-4">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      
      <div className="form-group">
        <label for="exampleSelect1" className="form-label mt-4">Urgency Level</label>
        <select className="form-select" id="exampleSelect1">
          <option>Very low</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Very High</option>
        </select>
      </div>
 
      <div className="form-group">
        <label for="exampleTextarea" className="form-label mt-4">Message: </label>
        <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
      </div>
      <div className="form-group">
        <label for="formFile" className="form-label mt-4">Attachment:</label>
        <input className="form-control" type="file" id="formFile"></input>
      </div>
    
      <fieldset className="form-group">
        <legend className="mt-4">Rate Expierence</legend>
    
          <label for="customRange3" className="form-label"> </label>
          <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
      </fieldset>
      <button type="submit" className="btn btn-primary">Submit</button>
    </fieldset>
  </form>
  </div>
  );
}

export default ContactForm;
