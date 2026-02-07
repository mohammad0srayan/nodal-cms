import './Sidebar.css'
import {Link} from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <div className="bg-white drop-shadow-xl shadow-black w-[400px] h-full relative pb-[3rem]">
                <div className="flex flex-col">
                    <div className="">
                        <img
                            className="w-full h-[15rem]"
                            src="/images/admin/banner.png"
                        />
                        <div className="mt-[3rem] px-[1.5rem]">
                            <h4 className="text-xl text-center font-semibold">محمد مهدی سرایان</h4>
                            <p className="text-md text-center text-black/40">
                                mohammadsrayan011@gmail.com
                            </p>
                            <ul className="flex flex-col mt-[1.5rem]">
                                <li className="border-t-2 border-black flex items-center justify-between py-[0.8rem]">
                                    <div className={'flex items-center gap-[1rem]'}>
                                        <span className="text-2xl fa fa-text-height"></span>
                                        <span className="font-semibold">نام کوچک</span>
                                    </div>

                                    <p className="">
                                        <span className="text-[1.1rem] text-blue-500">محمد مهدی</span>
                                    </p>
                                </li>
                                <li className="border-t-2 border-black flex items-center justify-between py-[0.8rem]">
                                    <div className={'flex items-center gap-[1rem]'}>
                                        <span className="text-2xl fa fa-text-width"></span>
                                        <span className="font-semibold">نام خانوادگی</span>
                                    </div>

                                    <p className="">
                                        <span className="text-[1.1rem] text-orange-400">سرایان</span>
                                    </p>
                                </li>
                                <li className="border-t-2 border-black flex items-center justify-between py-[0.8rem]">
                                    <div className={'flex items-center gap-[1rem]'}>
                                        <span className="text-2xl fa fa-wallet"></span>
                                        <span className="font-semibold">تعداد دوره</span>
                                    </div>

                                    <p className="">
                                        <span className="text-[1.1rem] text-blue-500">35</span>
                                    </p>
                                </li>
                            </ul>
                            <Link to={'/infos'} className="mt-[1rem] flex items-center justify-center gap-[0.5rem] w-full h-[3.5rem] hover:bg-blue-500 hover:shadow-blue-500 duration-300 ease-in-out bg-[#0d6efd] text-white shadow-[#0d6efd] shadow-md">
                                تغییر اطلاعات
                                <span className="text-2xl fa fa-pencil"></span>
                            </Link>
                        </div>

                        <div className="absolute top-[7rem] left-[8rem] bg-black/40 h-[10rem] w-[10rem] p-[0.7rem]">
                            <img
                                src="/images/admin/banana.png"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}