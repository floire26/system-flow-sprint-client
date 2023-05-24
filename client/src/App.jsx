import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchContacts, postContact } from "./helpers/contactsHelpers";
import TableItem from "./components/TableItem";
import ContactForm from "./components/ContactForm";
import { changePage, setToAddForm } from "./features/contactsSlice";
import Title from "./components/Title";

function App() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.all);
    const isLoading = useSelector(state => state.contacts.isLoading);
    const pages = useSelector(state => state.contacts.pages);
    const pageState = useSelector(state => state.contacts.pageState);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [])

    if (isLoading) return <>
        <div className="flex flex-col items-center justify-start h-screen bg-gradient-to-b from-amber-200 from-25% via-sky-200 via-50% to-emerald-200 to-90%">
            <Title />
                <div role="status m-auto">
                    <svg aria-hidden="true" className="inline w-full h-60 m-5 text-slate-500 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
        </div>
    </>


    return (
    <div className="flex flex-col h-full items-center bg-gradient-to-b from-amber-200 from-30% via-sky-300 via-60% to-emerald-500 to-90% ">
        <Title />
        {/* { console.log({pages, pageState}) } */}
        <div className="flex flex-col items-center relative overflow-x-auto shadow-md sm:rounded-lg w-4/5 p-4  bg-lime-200/40  mt-4 mb-4">
            <div className="flex flex-row w-full items-end">
                <div className="self-start flex items-start w-full form-control mb-4">
                    <label className="label">
                        <span className="font-display text-xl label-text mb-2">Select A Page</span>
                    </label>
                    <select
                        onChange={e => dispatch(changePage(e.target.value))}
                        className="ml-3 font-buttons text-xl select bg-lime-600/60 hover:bg-lime-600 hover:text-white focus:ring-amber-500 focus:border-amber-500 text-gray-700 text-center">
                        {
                            pages.map(page => <option
                                className="text-l text-align-last:center"
                                value={ page }>
                                    { page + 1 }
                                </option>)
                        }
                    </select>
                </div>
                <label
                    onClick={() => dispatch(setToAddForm())}
                    htmlFor="contact-modal"
                    className="font-buttons text-xl capitalize btn mb-4 bg-lime-600/60 text-gray-700 hover:bg-lime-600 hover:text-white border-0 font-bold mt-4">
                    Add Contact
                </label>
            </div>
            {

            }
            <table className="items-center w-full text-sm text-left">
                <thead className="text-xl  text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 rounded-lg">
                    <tr className="bg-lime-400/60 text-center capitalize">
                        <th scope="col" className="px-6 py-3 font-items ">
                            Profile Photo
                        </th>
                        <th scope="col" className="px-6 py-3 capitalize">
                        <div className="font-items flex items-center justify-center">
                            First Name
                            {/* <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a> */}
                        </div>
                        </th>
                        <th scope="col" className="px-6 py-3 capitalize">
                        <div className="font-items flex items-center justify-center">
                            Last Name
                            {/* <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a> */}
                        </div>
                        </th>
                        <th scope="col" className="px-6 py-3 capitalize">
                        <div className="font-items flex items-center justify-center">
                            Age
                            {/* <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a> */}
                        </div>
                        </th>
                        <th scope="col" className="px-6 py-3 capitalize">
                            <span className="font-items">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.slice(pageState * 10, pageState * 10 + 10).map(contact => <TableItem
                            photo={contact.photo}
                            firstName={contact.firstName}
                            lastName={contact.lastName}
                            age={contact.age}
                            key={contact.id}
                            id={contact.id}
                        />)
                    }
                </tbody>
            </table>
        </div>

        {/* Modal Toggle */}

        <input
            type="checkbox"
            id="contact-modal"
            className="modal-toggle"
            aria-label="contact-modal"/>

        {/* Modal COntent */}

        <div className="modal bg-transparent/50 backdrop-blur-lg rounded drop-shadow-lg" id="contact-modal" data-testid="contact-modal">
            <div className="relative w-full max-w-md max-h-full">
                <ContactForm/>
            </div>
        </div>
    </div>
    )
}

export default App
