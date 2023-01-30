import { createContext, useContext, useState } from "react";
import api from "../api/contact";
import {v4 as uuid} from 'uuid'

const contactsCrudContext = createContext();

export function ContactsCrudContextProvider ({children}) {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  // Retrieve Contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if(response.data){
      setContacts(response.data);
    }

  }

  // Delete contacts
  const removeContactHandler = async (id) => {

    await api.delete(`/contacts/${id}`);

    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  // Add contacts
  const addContactHandler = async (contact) => {
    const request ={
      id: uuid(),
      ...contact
    };

    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data])
  }

  // Update contact
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const {id} = response.data;
    setContacts(contacts.map((contact)=>{
      return contact.id === id ? {...response.data} : contact;
    }));
  }

  // Search contacts handling
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const newContactList = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || contact.email.toLowerCase().includes(searchTerm.toLowerCase());
      })
      setSearchResults(newContactList);
    }else{
      setSearchResults(contacts);
    }
  };

  const value = {
    contacts,
    searchTerm,
    searchResults,
    retrieveContacts,
    removeContactHandler,
    addContactHandler,
    updateContactHandler,
    searchHandler
  };

  return <contactsCrudContext.Provider value={value}>
            {children}
          </contactsCrudContext.Provider>
}

export function useContactsCrud(){
  return useContext(contactsCrudContext);
}
