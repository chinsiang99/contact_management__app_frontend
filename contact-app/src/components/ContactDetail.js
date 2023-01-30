import { Link, useLocation } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail = (props) => {
  const location = useLocation();
  const { contact } = location.state;
  const { name, email } = contact;

  return(
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user"/>
        </div>
        <div className="content">
            <div className="header">{name}</div>
            <div className="description">{email}</div>
        </div>
      </div>
      <div className="main center aligned" style={{margin: "auto"}}>
        <Link to="/">
          <button className="ui button blue center" style={{display: "block", margin: "auto"}}>Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetail;