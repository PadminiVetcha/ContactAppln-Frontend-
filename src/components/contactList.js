import { Link } from "react-router-dom";
import classes from './contactList.module.css';

const ContactList = (props) => {  
  return (
    <div>
      <h2>All Contacts</h2>
    <ul>
      {props.contacts.map((contact) => (
        <li key={contact.contactId} className={classes.contact}>
        <Link to={`/contacts/${contact.contactId}`}>
        <div>
          <h2>{contact.firstName}</h2>
          <h2>{contact.mobileNo}</h2>
        </div>
        </Link>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default ContactList;
