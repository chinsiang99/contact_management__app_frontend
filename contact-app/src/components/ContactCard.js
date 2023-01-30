import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactCard = (props) => {
  
  const {id, name, email} = props.contact;
  
  return(
    <div className="item">
      <div style={{display: "flex"}}>
        <img className="ui avatar image" src={user} alt="user"/>
        <div className="content">
          <Link to={`contact/${id}`} state={{contact: props.contact}}>
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
        </div>
        <div style={{textAlign: "right", marginLeft: "auto", cursor: "pointer"}}>
          <Link to='/edit' state={{contact: props.contact}}>
            <i className="edit alternate outline icon" style={{color : "red", marginTop: "7px", textAlign: "right"}}></i>
          </Link>
          <Link to={`/delete/${id}`} state={{contact: props.contact}}>
            <i className="trash alternate outline icon" style={{color : "red", marginTop: "7px", textAlign: "right"}}></i>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default ContactCard;