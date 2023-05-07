import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ContactsPage, {loader as ContactsLoader} from "./pages/Contacts";
import NewContactPage from "./pages/NewContact";
import EditContactPage from "./pages/EditContact";
import ContactDetailsPage, {
  loader as contactDetailLoader,
  action as deleteContactAction
} from "./pages/ContactDetails";
import {action as addContactAction} from "./components/contactForm";

// /- home page with navigation and msg
// /contacts - get all contacts
// /contacts/:contactId - get contact details based on id
// /contacts/:contactId/new - add a new contact
// /contacts/:contactId/edit - edit contact
// /contacts/:contactId/delete/ - delete contact

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'contacts',
        children: [
          {
            index: true,
            element: <ContactsPage />,
            loader: ContactsLoader,
          },
          {
            path: ':contactId',
            id: 'contact-detail',
            loader: contactDetailLoader,
            children: [
              {
                index:true,
                element: <ContactDetailsPage />,
                action: deleteContactAction,
              },
              {
                path: 'edit',
                element: <EditContactPage />,
              },
            ],
          },
        ],
      },
      {
        path: 'new',
        element: <NewContactPage/>,
        action: addContactAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
