import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <div className="bg-white shadow-black drop-shadow-2xl w-full p-[1.5rem]">
                <header className="flex justify-between items-center">
                    <div className="flex items-center gap-[1rem]">
                        <img
                            src="/images/admin/banana.png"
                            className="w-[6rem] h-[6rem] object-cover"
                        />
                        <div className="flex flex-col gap-[0.5rem]">
                            <h4 className="text-3xl">محمد مهدی سرایان</h4>
                            <p className="text-xl text-[#9da8b8]">
                                توسعه دهنده جاوا اسکریپت
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[1.5rem]">

                        <button className="hover:bg-yellow-400 hover:shadow-hover:bg-yellow-400 duration-300 ease-in-out py-[0.8rem] px-[2rem] flex items-center justify-center bg-[#ffc107] shadow-[#ffc107] shadow-md">
                            <span className="text-white text-2xl fa fa-sun"></span>
                        </button>

                        <button className="hover:bg-gray-400 hover:shadow-hover:bg-gray-400 duration-300 ease-in-out relative py-[0.8rem] px-[2rem] flex items-center justify-center bg-[#676879] shadow-[#676879] shadow-md">
                            <span className="text-white text-2xl fa fa-bell"></span>
                            <span className="absolute text-white bg-[#dc3545] flex items-center justify-center h-[25px] w-[25px] rounded-xl top-[-0.3rem] right-[-0.3rem] header__alert-count">0</span>
                        </button>

                        <button className="hover:bg-blue-400 hover:shadow-blue-400 duration-300 ease-in-out py-[0.8rem] px-[2rem] flex items-center justify-center bg-[#009cf0] text-white gap-[0.5rem] shadow-[#009cf0] shadow-md">
                            <span className="text-white text-2xl fa fa-sign-out"></span>
                            خروج از پنل
                        </button>
                    </div>
                </header>
            </div>
        </>
    )
}