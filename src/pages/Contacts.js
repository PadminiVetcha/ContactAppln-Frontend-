import ContactList from "../components/contactList";
import { json, useLoaderData } from "react-router-dom";

const ContactsPage = () => {
  //console.log("start");
  const data = useLoaderData();
  //console.log("Data is : ",data);
  return <ContactList contacts={data} />
}

export default ContactsPage;

export async function loader() {
  const response = await fetch ("http://localhost:8080/getAllContacts");
  const data = await response.json();
  //console.log("response : ", response);
  console.log("Data : ", data);
  if(!response.ok){
    throw json({message : "Could not fetch events"}, {status : 500});
  }
  else {
    return data;
  }
}