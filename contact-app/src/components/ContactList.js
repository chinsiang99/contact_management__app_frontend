import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactList = (props) => {
  const {contacts, retrieveContacts, searchTerm, searchHandler, searchResults} = useContactsCrud();

  const inputEl = useRef("");

  useEffect(() => {
    retrieveContacts();
  }, [])

  const renderContactList = (searchTerm.length < 1 ? contacts : searchResults).map((contact) => {
    return(
      <ContactCard contact={contact} key={contact.id}/>
    )
  });

  const getSearchTerm = () =>{
    searchHandler(inputEl.current.value);
  };

  return(
    <div className="ui main">
      <div className="ui container" style={{display: "flex"}}>
        <h2 style={{marginBottom: "0"}}>Contact list</h2>
        <Link to="/add" style={{marginLeft: "auto"}}>
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </div>

      <div className="ui search container" style={{margin: "auto", display: "block"}}>
          <div className="ui icon input">
            <input 
              ref={inputEl}
              type="text" 
              placeholder="Search Contacts" 
              className="prompt" 
              value={searchTerm} 
              onChange={getSearchTerm}
            />
            <i className="search icon"></i>
          </div>
      </div>

      <div className="ui celled list container">
        {renderContactList.length > 0 ? renderContactList : "No contacts available"}
      </div>
    </div>
  );
}

export default ContactList;