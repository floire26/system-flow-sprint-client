import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postContact, putContact } from "../helpers/contactsHelpers";
import { toast } from "react-toastify";

export default function ContactForm() {
    const dispatch = useDispatch();
    const isAdd = useSelector(state => state.contacts.isAdd);
    const contact = useSelector(state => state.contacts.selected);
    const isLoading = useSelector(state => state.contacts.isLoadingForm);

    const [body, setBody] = useState({});

    useEffect(() => setBody(contact), [contact]);

    function handleTextChange(e) {
        // console.log(body);
        switch (e.nativeEvent.target.id) {
            case "firstName":
                setBody({
                    ...body,
                    firstName: e.target.value
                })
                break;

            case "lastName":
                setBody({
                    ...body,
                    lastName: e.target.value
                })
                break;

            case "age":
                setBody({
                    ...body,
                    age: e.target.value
                })
                break;

            case "photo":
                setBody({
                    ...body,
                    photo: e.target.value
                })
                break;

            default:
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        // console.log({ isAdd, body });

        for (let key of Object.keys(body)) {
            if (key !== 'age') {
                if (body[key].length === 0 ) {
                    toast.warning('All fields must be filled before submitting.', {
                        theme: 'colored'
                    })
                    return;
                }
            } else if (body[key] <= 0) {
                toast.warning('Age cannot be negative nor nil.', {
                    theme: 'colored'
                })
                return;
            }
        }

        if (isAdd) {
            dispatch(postContact(body))
        } else {
            dispatch(putContact(contact.id, body))
        }

        setBody({})
    }

    if (isLoading) return <>
            <div className="relative bg-lime-100/60 drop-shadow-lg rounded-lg shadow dark:bg-gray-700">
                <div role="status">
                    <svg aria-hidden="true" className="inline w-full h-20 m-4 text-slate-500 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
    </>

    return <>
        {/* <!-- Modal content --> */}
        <div className="font-items relative bg-lime-100/60 drop-shadow-lg rounded-lg shadow dark:bg-gray-700">
            <label
                htmlFor="contact-modal"
                data-testid="closeButton"
                className="btn border-0 absolute top-3 right-2.5 text-gray-700 bg-pink-500/60 hover:bg-pink-500 hover:text-white rounded-lg  p-3 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </label>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="font-display text-4xl mb-4 font-medium text-gray-900 dark:text-white">{ isAdd ? 'Add a Contact' : 'Edit Contact' }</h3>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block mb-2 font-medium text-gray-900 dark:text-white">
                                First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={ body.firstName }
                            onChange={ handleTextChange }
                            className="bg-white/50 border border-gray-200/50 text-gray-900 rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="John"
                            aria-label="firstName"
                             />
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block mb-2  font-medium text-gray-900 dark:text-white">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={ body.lastName }
                            onChange={ handleTextChange }
                            className="bg-white/50 border border-gray-200/50 text-gray-900  rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Doe"
                            aria-label="lastName"
                             />
                    </div>
                    <div>
                        <label
                            htmlFor="Age"
                            className="block mb-2  font-medium text-gray-900 dark:text-white">
                            Age
                        </label>
                        <input
                            type="number"
                            name="age"
                            id="age"
                            value={ body.age }
                            onChange={ handleTextChange }
                            aria-label="age"
                            className="bg-white/50 border border-gray-200/50 text-gray-900  rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                             />
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block mb-2  font-medium text-gray-900 dark:text-white">
                            Profile Photo URL
                        </label>
                        <input
                            type="text"
                            name="photo"
                            id="photo"
                            className="bg-white/50 border border-gray-200/50 text-gray-900  rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="https://example.com"
                            onChange={ handleTextChange }
                            value={ body.photo }
                            aria-label="photo"
                             />
                    </div>
                    <button
                        className="w-full">
                        <label
                            htmlFor="contact-modal"
                            className="w-full font-buttons text-xl capitalize btn mb-4 self-end bg-lime-600/60 text-gray-700 hover:bg-lime-600 hover:text-white border-0 font-bold">
                            Submit
                        </label>
                    </button>
                </form>
            </div>
        </div>

    </>
}
