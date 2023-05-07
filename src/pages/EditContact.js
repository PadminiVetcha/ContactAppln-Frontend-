import { useRouteLoaderData } from "react-router-dom";
import ContactForm from "../components/contactForm";

const EditContactPage = () => {
    const data = useRouteLoaderData('contact-detail');
    return <> <h1> Edit contact page</h1>
    <ContactForm method='patch' event={data}/>
    </>
}

export default EditContactPage;