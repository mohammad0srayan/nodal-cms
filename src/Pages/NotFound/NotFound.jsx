import './NotFound.css'
import {Link} from "react-router-dom";

export default function NotFound () {
    return (
        <div className={'background-notfound-page h-screen flex justify-center items-center text-white flex-col gap-[1rem]'}>
            <h1 className={'text-3xl'}>Error 404 |</h1>
            <h2 className={'text-center  text-3xl'}>متاسفانه این صحفه یافت نشد :(</h2>
            <ul className={'flex items-center justify-between gap-[0.5rem] w-[200px]'}>
                <Link to={'/'} className={'text-[1.1rem] text-white hover:text-white/40 duration-300 ease-in-out'}>خانه</Link>
                <Link to={'/'} className={'text-[1.1rem] text-white hover:text-white/40 duration-300 ease-in-out'}>بازگشت</Link>
            </ul>
        </div>
    )
}