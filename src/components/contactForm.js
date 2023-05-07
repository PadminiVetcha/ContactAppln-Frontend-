import classes from "./contactForm.module.css";
import {Form,json,useActionData,useNavigate,useNavigation,} from "react-router-dom";
import { useRef } from "react";

let id;
const uid =(() => ((id=1), () => id++))();

const ContactForm = ({ method, event }) => {

  const firstNameRef = useRef('');
  const lastNameRef = useRef('');
  const mobileNoRef = useRef('');
  const emailIdRef = useRef('');

  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const contactDetail = {
      //contactId: Math.random(),
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      mobileNo: mobileNoRef.current.value,
      emailId: emailIdRef.current.value,
    };
    //console.log(contactDetail);
   
  }

  return (
    <Form method={method} className={classes.form} >
      <p>
        <label htmlFor="firstName">First Name : </label>
        <input
          ref={firstNameRef}
          id="firstName"
          type="text"
          name="firstName"
          required
          defaultValue={event ? event.firstName : ""}
        />
      </p>
      <p>
        <label htmlFor="lastName">Last Name : </label>
        <input
          ref={lastNameRef}
          id="lastName"
          type="text"
          name="lastName"
          required
          defaultValue={event ? event.lastName : ""}
        />
      </p>
      <p>
        <label htmlFor="mobileNo">Mobile No : </label>
        <input
          ref={mobileNoRef}
          id="mobileNo"
          type="text"
          name="mobileNo"
          required
          defaultValue={event ? event.mobileNo : ""}
        />
      </p>
      <p>
        <label htmlFor="emailId">Email Id : </label>
        <input
          ref={emailIdRef}
          id="emailId"
          type="text"
          name="emailId"
          required
          defaultValue={event ? event.emailId : ""}
        />
      </p>
      <div>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting.." : "Save"}
        </button>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
      </div>
    </Form>
  );
};
export default ContactForm;

// to add or update a contact based on contact id

export async function action({request, params}) {
  const method = request.method;
  const data = await request.formData();

  console.log('Request is : ', request);
  
  const contactDetail = {
    contactId: uid(),
    firstName: data.get('firstName'),
    lastName: data.get('lastName'),
    mobileNo: data.get('mobileNo'),
    emailId: data.get('emailId'),
  };

  let url = 'http://localhost:8080/addContact';

  if(method === 'PATCH') {
    const contactId = params.contactId;
    url = 'http://localhost:8080/editContact/' + contactId;
  }

  try {
    
    //console.log(contactDetail);
    const response = await fetch(url, {
      //mode: 'no-cors',
      method: method,
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type' : 'application/json',
          //'application/x-www-form-urlencoded'
      },
      json: true,
      body: JSON.stringify(contactDetail),
    });
    console.log(response.status);
    //console.log("Response is :", response);
  }catch(error) {
    console.log("The error message is : " , error);
  }
  return "Success";
  //redirect('/contacts');
}
