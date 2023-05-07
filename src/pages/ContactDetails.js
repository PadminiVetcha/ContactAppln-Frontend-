import { useRouteLoaderData, json, redirect } from "react-router-dom";
import ContactItem from "../components/contactItem";

const ContactDetailsPage = () => {
  const data = useRouteLoaderData("contact-detail");
  //console.log('data is : ', data, data.type);
  return (
    <>
      <h1>Contact Detail Page</h1>
      <ContactItem contact={data} />
    </>
  );
};

export default ContactDetailsPage;

// to get the contact details of a particular contact with contact id

export async function loader({request, params}) {
  const id = params.contactId;
  const response = await fetch('http://localhost:8080/getContact/' +  id);
  //console.log(response);
  if(!response.ok) {
    throw json({message: 'Could not fetch details for selected contact.'}, {status: 500 });
  } else {
    return response;
  }
}

// to delete a contact with contact id

export async function action({request, params}) {
  const id = params.contactId;
  //console.log(request.method);
  try {
  const response = await fetch('http://localhost:8080/deleteContact/' + id, {
    mode: 'cors',
    method: 'DELETE',
    // headers: {
    //   'Access-Control-Allow-Headers': '*',
    //   'content-Type' : 'application/json',
    // }
  });
  console.log(response.method);
  } catch(error) {
    console.log("Error is : ", error);
  }
  return redirect('/contacts');

  // if(!response.ok) {
  //   throw json({message: 'Could not delete the event.'}, {status: 500 });
  // } else {
  //   return redirect('/events');
  // }
}
