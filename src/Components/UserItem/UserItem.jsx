import './UserItem.css'
import swal from 'sweetalert'
import {useDispatch} from "react-redux";
import {removeUsersFromServer} from "../../Redux/Store/Users"
import {useState} from "react";
import ModalUserDetail from "../ModalUserDetalis/ModalUserDetails";

export default function UserItem({ firstname, lastname, email, _id, username, city, age }) {
    const [isParentShowModal, setIsParentShowModal] = useState(false);
    const dispatch = useDispatch();

    const removeUsersFromList = (userID) => {
        swal({
            title: 'آیا میخواهید این کاربر را حذف کنید؟',
            icon: "warning",
            buttons: ['نه', 'بله']
        }).then(result => {
            if (result) {
                swal({
                    title: 'با موفقیت کاربر مورد نظر حذف شد',
                    icon: "success",
                    buttons: 'تایید'
                }).then(() => {
                    dispatch(removeUsersFromServer(`https://redux-cms.iran.liara.run/api/users/${userID}`))
                })
            }
        })
    }

    const closeModal = () => {
        setIsParentShowModal(false)
    }

    return (
        <>
            <div className={'pb-[2rem]'}>
                <div className="border-black/40 border-[1px] p-[1rem]">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-[1rem]">
                            <img
                                src='/images/admin/profile/banana.png'
                                className="w-[5rem] h-[5rem] object-cover"
                            />
                            <div className="flex flex-col gap-[0.2rem]">
                                <p className="text-xl">{firstname + '  ' + lastname}</p>
                                <p className="text-[1.1rem]">
                                    {email}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[0.5rem]">
                            <button
                                className="text-white bg-[#676879] py-[1.2rem] px-[2rem] shadow-md shadow-[#676879] hover:bg-gray-400 hover:shadow-gray-400 duration-200 ease-in-out">پیام
                                ها
                            </button>
                            <button
                                onClick={() => setIsParentShowModal(true)}
                                className="text-white bg-[#009cf0] py-[1.2rem] px-[2rem] shadow-md shadow-[#009cf0] hover:bg-blue-400 hover:shadow-blue-400 duration-200 ease-in-out">اطلاعات
                            </button>
                            <button
                                onClick={() => removeUsersFromList(_id)}
                                className="text-white bg-[#c70414] py-[1.2rem] px-[2rem] shadow-md shadow-[#c70414] hover:bg-red-400 hover:shadow-red-400 duration-200 ease-in-out">حذف
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isParentShowModal ? (
                <ModalUserDetail closeModal={closeModal} firstname={firstname} lastname={lastname} email={email} username={username} city={city} age={age} />
            ) : null}
        </>
    );
}