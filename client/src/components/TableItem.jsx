import { useDispatch } from "react-redux"
import { deleteContact, fetchContactById } from "../helpers/contactsHelpers";

export default function TableItem(props) {
    const dispatch = useDispatch();

    function handleError(e) {
        e.target.src = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
    }

    return <>
        {/* { console.log(props) } */}
        <tr className="bg-lime-100/60 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50/60 dark:hover:bg-gray-600 text-center">
            <td scope="row" className="flex items-center justify-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img
                    onError={handleError}
                    className="border-4 border-amber-500/60 rounded-full dark:border-gray-800 w-36 h-36" src={ props.photo } alt="Extra large avatar" />
            </td>
            <td className="px-6 py-4 text-xl font-items">
                { props.firstName }
            </td>
            <td className="px-6 py-4 text-xl font-items">
                { props.lastName }
            </td>
            <td className="px-6 py-4 text-xl font-items">
                { props.age }
            </td>
            <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-center">
                    <label
                        onClick={() => dispatch(fetchContactById(props.id))}
                        htmlFor="contact-modal"
                        className="btn font-buttons text-xl capitalize mr-2 text-gray-700 w-1/3 bg-amber-500/60 hover:bg-amber-500 hover:text-white border-0">
                            Edit
                    </label>
                    <label
                        onClick={() => dispatch(deleteContact(props.id))}
                        className="btn font-buttons text-xl capitalize mr-2 text-gray-700 w-1/3 bg-pink-500/60 hover:bg-pink-500 hover:text-white border-0">
                            Delete
                    </label>
                </div>
            </td>
        </tr>
    </>

}
