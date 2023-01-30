import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const AddContact = (props) => {

  const { addContactHandler } = useContactsCrud();
  const navigate = useNavigate();

  const initialValue = {
    name: "",
    email: ""
  }
  const [formData, setFormData] = useState(initialValue);
  
  const add = (e) => {
    e.preventDefault();
    if(!(formData.name && formData.email)){
      alert("all fields are mandatory!");   
      return;
    }

    addContactHandler(formData);
    setFormData(initialValue);
    navigate("/");
  }

  return(
    <div className="ui main container">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={(e) => {setFormData({...formData, name: e.target.value})}}/>
        </div>
        <div className="field">
          <label>Name</label>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={(e) => {setFormData({...formData, email: e.target.value})}}/>
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;