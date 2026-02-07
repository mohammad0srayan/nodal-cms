import './Users.css'
import Menu from "../../Components/Menu/Menu";
import UserItem from "../../Components/UserItem/UserItem";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsersFromServer} from "../../Redux/Store/Users";

export default function Users() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersFromServer('https://redux-cms.iran.liara.run/api/users/'))
    }, [])

    return (
        <>
            <Menu/>
            <div className="mt-[4rem] px-[3rem]">
                <form action="#" className={'flex w-full justify-between gap-[4rem]'}>
                    <div className="relative w-full">
                        <span
                            className="z-[10] text-2xl text-black/40 absolute top-[0.7rem] right-[0.5rem] fa fa-search"></span>

                        <input
                            type="search"
                            name=""
                            id="search"
                            placeholder="نام یا ایمیل کاربر را وارد کنید"
                            className="w-full border-black/20 pr-[2.5rem] px-[1rem] border-[1px] py-[1rem] rounded-[10px] shadow-black drop-shadow-md"
                            required
                        />
                    </div>
                    <button type="reset"
                            className="w-[250px] py-[1rem] bg-[#133141] shadow-[#133141] shadow-md hover:bg-gray-400 hover:shadow-gray-400 duration-200 ease-in-out text-white">
                        حذف کاربر
                    </button>
                </form>

                <div className={'mt-[3rem] flex flex-col gap-[1rem]'}>
                    {
                        users.map(user => (
                            <UserItem key={user._id} {...user} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}