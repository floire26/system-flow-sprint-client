import { useDispatch } from "react-redux"
import { deleteContacts } from "../helpers/contactsHelpers";

export default function TableItem(props) {
    const dispatch = useDispatch();

    return <>
        {/* { console.log(props) } */}
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className="border-2 border-white rounded-full dark:border-gray-800 w-36 h-36" src={ props.photo } alt="Extra large avatar" />
            </th>
            <td className="px-6 py-4">
                { props.firstName }
            </td>
            <td className="px-6 py-4">
                { props.lastName }
            </td>
            <td className="px-6 py-4">
                { props.age }
            </td>
            <td className="px-6 py-4 text-right">
                <div className="flex items-center">
                    <button
                        onClick={() => props.modal.toggle()}
                        type="button"
                        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                        Edit
                    </button>
                    <button
                        onClick={() => dispatch(deleteContacts(props.id))}
                        type="button"
                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    </>

}
