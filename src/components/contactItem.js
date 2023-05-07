import { useSubmit, Link } from "react-router-dom";
import classes from './contactItem.module.css';
const ContactItem = (contact) => {
    console.log(contact);
    const submit = useSubmit();
    function startDeleteHandler() {
        const proceed = window.confirm('Are you sure you want to delete the contact?');
        if(proceed) {
        submit(null, {method: 'delete'})
        }
    }
    return (
        <article className={classes.contact}>
        <h1>{contact.contact.firstName}</h1>
        <h1>{contact.contact.lastName}</h1>
        <h1>{contact.contact.mobileNo}</h1>
        <h1>{contact.contact.emailId}</h1>
        <menu className={classes.actions}>
          <Link to='edit'>Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      </article>
    );
}

export default ContactItem;