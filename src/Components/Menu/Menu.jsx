import './Menu.css'
import {Link} from "react-router-dom";
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';

export default function Menu() {
    return (
        <>
            <div className="py-[1rem] border-b-[2px] border-blue-500/40 relative">
                <ul className="flex items-center gap-[1.5rem] px-[1rem]">
                    <li className="">
                        <Link to="/" className="flex items-center gap-[0.5rem] text-xl">
                            <span className="text-3xl"><Person3OutlinedIcon fontSize='large' /></span>
                            کاربران
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/infos" className="flex items-center gap-[0.5rem] text-xl">
                            <span className="text-3xl"><BookmarksOutlinedIcon fontSize='large' /></span>
                            اطلاعات
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/courses" className="flex items-center gap-[0.5rem] text-xl">
                            <span className="text-3xl"><StorefrontOutlinedIcon fontSize='large' /></span>
                            دوره‌ها
                        </Link>
                    </li>

                    <li className="">
                        <Link to="/articles" className="flex items-center gap-[0.5rem] text-xl">
                            <span className="text-3xl"><NewspaperOutlinedIcon fontSize='large' /></span>
                            وبلاگ
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={'active'}></div>
        </>
    )
}