import './Infos.css'
import Menu from "../../Components/Menu/Menu";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Infos() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [requiredPassword, setRequiredPassword] = useState("")

    return (
        <>
            <Menu/>

            <div className={'px-[3rem] mt-[3rem] mb-[4rem]'}>
                <div className="border-[1px] border-black/40 rounded-md">
                    <div>
                        <div className="">
                            <div className="w-full bg-[#bbc6d5]/30 py-[0.6rem] px-[1.5rem] border-b-[1px] border-black/40">
                                <Link className="text-xl" data-bs-toggle="collapse" to="">
                                    اطلاعات شما
                                </Link>
                            </div>
                            <div
                                className="p-[1rem]"
                            >
                                <div className="w-full">
                                    <form action="#" className="w-full">
                                        <div className={'w-full grid grid-from-custom gap-[1rem]'}>
                                            <div className="w-full relative">
                                                <span
                                                    className="text-black absolute top-[1.1rem] right-[0.8rem] fa fa-user"></span>
                                                <input
                                                    type="text"
                                                    name=""
                                                    value={firstname}
                                                    onChange={(e) => setFirstname(e.target.value)}
                                                    id="firstname"
                                                    placeholder="نام "
                                                    className="w-full py-[0.9rem] px-[2.3rem] placeholder:text-black border-[1px] border-black/40 rounded-md shadow-sm shadow-black/40 validation-form-error"
                                                    required
                                                />
                                            </div>

                                            <div className="w-full relative">
                                                <span
                                                    className="text-black absolute top-[1.1rem] right-[0.8rem] fa fa-users"></span>

                                                <input
                                                    type="text"
                                                    name=""
                                                    value={lastname}
                                                    onChange={(e) => setLastname(e.target.value)}
                                                    id="lastname"
                                                    placeholder="نام خانوادگی"
                                                    className="w-full py-[0.9rem] px-[2.3rem] placeholder:text-black border-[1px] border-black/40 rounded-md shadow-sm shadow-black/40 validation-form-error"
                                                    required
                                                />
                                            </div>

                                            <div className="w-full relative">
                                                <span
                                                    className="text-black absolute top-[1.1rem] right-[0.8rem] fa fa-address-book"></span>

                                                <input
                                                    lang="en"
                                                    type="text"
                                                    name=""
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    id="username"
                                                    placeholder="نام کاربری"
                                                    className="w-full py-[0.9rem] px-[2.3rem] placeholder:text-black border-[1px] border-black/40 rounded-md shadow-sm shadow-black/40 validation-form-error"
                                                    required
                                                />
                                            </div>

                                            <div className="w-full relative">
                                                <span
                                                    className="text-black absolute top-[1.1rem] right-[0.8rem] fa fa-globe"></span>

                                                <input
                                                    lang="en"
                                                    type="email"
                                                    name=""
                                                    value={'mohammadsrayan011@gmail.com'}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    id="email"
                                                    placeholder="email "
                                                    className="w-full py-[0.9rem] px-[2.3rem] placeholder:text-black border-[1px] border-black/40 rounded-md shadow-sm shadow-black/40 validation-form-error"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className={'w-full flex justify-between gap-[0.8rem] mt-[1rem]'}>
                                            <div className="w-full relative">
                                                <span
                                                    className="text-black absolute top-[1.1rem] right-[0.8rem] fa fa-key"></span>

                                                <input
                                                    type="password"
                                                    name=""
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="رمز جاری"
                                                    className="w-full py-[0.9rem] px-[2.3rem] placeholder:text-black border-[1px] border-black/40 rounded-md shadow-sm shadow-black/40 validation-form-error"
                                                    required
                                                />
                                            </div>

                                            <div className="w-full relative">
                                                <span
                                                    className="text-black absolute top-[1.1rem] right-[0.8rem] fa fa-key"></span>

                                                <input
                                                    type="password"
                                                    name=""
                                                    id="password"
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                    placeholder="رمز  جدید"
                                                    className="w-full py-[0.9rem] px-[2.3rem] placeholder:text-black border-[1px] border-black/40 rounded-md shadow-sm shadow-black/40 validation-form-error"
                                                    required
                                                />
                                            </div>

                                            <div className="w-full relative">
                                                <input
                                                    type="password"
                                                    name=""
                                                    id="password"
                                                    value={requiredPassword}
                                                    onChange={(e) => setRequiredPassword(e.target.value)}
                                                    placeholder="تکرار رمز"
                                                    className="w-full py-[0.9rem] px-[2.3rem] placeholder:text-black border-[1px] border-black/40 rounded-md shadow-sm shadow-black/40 validation-form-error"
                                                    required
                                                />
                                                <span
                                                    className="text-black absolute top-[1.1rem] right-[0.8rem] fa fa-key"></span>
                                            </div>
                                        </div>

                                        <div className="change-profile-box px-0 flex gap-4 mb-4 mt-[2rem]">
                                            <div className="change-profile-input-box">
                                                <img
                                                    src="/images/admin/profile/banana.png"
                                                    className="change-profile-pic"
                                                    alt=""
                                                />
                                                <label
                                                    htmlFor="upload-profile-input"
                                                    className="upload-profile-input-label"
                                                >
                                                    <input
                                                        type="file"
                                                        id="upload-profile-input"
                                                        name=""
                                                    />
                                                </label>
                                            </div>

                                            <div className="change-banner-input-box">
                                                <img
                                                    src="/images/admin/banner/banner.png"
                                                    className="change-banner-pic"
                                                    alt=""
                                                />
                                                <label
                                                    htmlFor="upload-banner-input"
                                                    className="upload-banner-input-label"
                                                >
                                                    <input type="file" id="upload-banner-input" name=""/>
                                                </label>
                                            </div>
                                        </div>

                                        <button
                                            className="mt-[1rem] w-[400px] py-[0.8rem] bg-[#0d6efd] shadow-sm shadow-[#0d6efd] text-white hover:bg-blue-500 hover:shadow-blue-500 duration-300 easy-in-out">
                                            اپدیت اطلاعات
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="border-t-[1px] border-black/40">
                            <div className="p-[1rem] bg-[#bbc6d5]/30">
                                <Link
                                    className="text-[1.1rem]"
                                    to={''}
                                >
                                    اطلاعات تیم
                                </Link>
                            </div>
                            {/*<div*/}
                            {/*    className=""*/}
                            {/*>*/}
                            {/*    <div*/}
                            {/*        id="collapseTwo"*/}
                            {/*        className="collapse"*/}
                            {/*        data-bs-parent="#accordion"*/}
                            {/*    >*/}
                            {/*        <div className="row justify-center mx-0 p-4">*/}
                            {/*            <div className="infromation-team-container">*/}
                            {/*                <div className="infromation-team-cards flex flex-wrap">*/}
                            {/*                    <div className="card col-4 information__team-card p-2">*/}
                            {/*                        <img*/}
                            {/*                            className="card-img-top information__admin-img"*/}
                            {/*                            src="/images/store/avaters/avatar2.png"*/}
                            {/*                            alt="admin photo"*/}
                            {/*                        />*/}
                            {/*                        <div*/}
                            {/*                            className="card-body flex flex-col justify-between p-4">*/}
                            {/*                            <div*/}
                            {/*                                className="flex justify-between items-center mb-4">*/}
                            {/*                                <h4 className="card-title information__admin-name my-0">*/}
                            {/*                                    عرشیا احسنی*/}
                            {/*                                </h4>*/}
                            {/*                                <p className="card-text information__admin-role my-0">*/}
                            {/*                                    باغدار*/}
                            {/*                                </p>*/}
                            {/*                            </div>*/}
                            {/*                            <div className="mt-4 flex justify-end gap-2">*/}
                            {/*                                <button className="btn btn-lg btn-danger">حذف</button>*/}
                            {/*                                <button className="btn btn-lg btn-info">ویرایش</button>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}

                            {/*            <button*/}
                            {/*                className="btn-custome btn-custome__red col-10 mt-4"*/}
                            {/*                data-bs-toggle="modal"*/}
                            {/*                data-bs-target="#new-member"*/}
                            {/*            >*/}
                            {/*                افزودن فرد جدید*/}
                            {/*            </button>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}