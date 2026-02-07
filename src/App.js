import './App.css';
import routes from "./Routes"
import {useRoutes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

export default function App() {

    const router = useRoutes(routes)

    return (
        <div className={'h-max bg-[#f5f5f5] px-[5rem] py-[4rem]'}>
            <Navbar />
            <div className={'flex justify-between gap-[4rem] mt-[5rem] h-[680px]'}>
                <div>
                    <Sidebar />
                </div>

                <div className={'bg-white drop-shadow-xl shadow-black w-full h-full overflow-y-scroll'}>
                    {router}
                </div>
            </div>
        </div>
    )
}