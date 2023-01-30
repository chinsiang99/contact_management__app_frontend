import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";
import { useLocation } from "react-router-dom";
import user from "../images/user.jpg";

const DeleteContact = (props) => {
  const location = useLocation();
  const { contact } = location.state;
  const {id, email, name} = contact;

  const {removeContactHandler} = useContactsCrud();
  
  const deleteContact = (id) => {
    removeContactHandler(id);
  }

  return(
    <div className="main">
      <div className="ui container">
        <div className="ui message">
          <div className="header" style={{marginBottom: "10px"}}>
            Do you still wish to delete the contact?
          </div>
          <div style={{marginBottom: "10px"}}>
            <img src={user} style={{height: "30px", width: "30px"}} alt="user"/>
            <br/>
            <span>Contact Name: {name}</span> 
            <br/>
            <span>Contact Email: {email}</span> 
          </div>
          <Link to="/">
            <button className="ui button blue">No</button>
          </Link>
          <Link to="/">
            <button className="ui button blue" onClick={() => deleteContact(id)}>Yes</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeleteContact;