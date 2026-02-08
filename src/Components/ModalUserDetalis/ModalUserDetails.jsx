import ReactDom from 'react-dom'

export default function ModalUserDetail({ firstname, lastname, email, username, city, age, closeModal }) {
    return ReactDom.createPortal(
        <div
            className={`${closeModal ? "open-modal" : "close-modal"}`}
            id="show-info-modal"
        >
            <div className="flex justify-center items-center h-[100vh]">
                <div className="bg-white rounded-md w-[500px] pb-[2rem]">
                    <div className="px-[1rem] py-[0.5rem] border-b-[1px] border-black/30">
                        <h4 className="text-xl">جزئیات</h4>
                    </div>

                    <div className="p-[1rem]">
                        <form action="#" className="flex flex-col gap-[1rem]">
                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-user text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    type="text"
                                    name=""
                                    id="firstname"
                                    value={`نام: ${firstname}`}
                                    className="px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl validation-form-subject cursor-default"
                                    readOnly
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    نام{" "}
                                </label>
                            </div>

                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-users text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    type="text"
                                    name=""
                                    id="firstname"
                                    value={`نام خانوادگی: ${lastname}`}
                                    className="px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl validation-form-subject cursor-default"
                                    readOnly
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    نام خانوادگی{" "}
                                </label>
                            </div>

                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-user text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    type="text"
                                    name=""
                                    id="firstname"
                                    value={`نام کاربری: ${username}`}
                                    className="px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl validation-form-subject cursor-default"
                                    readOnly
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    نام کاربری{" "}
                                </label>
                            </div>

                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-globe text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    type="text"
                                    name=""
                                    id="firstname"
                                    value={`ایمیل: ${email}`}
                                    className="px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl validation-form-subject cursor-default"
                                    readOnly
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    ایمیل{" "}
                                </label>
                            </div>

                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-key text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    type="text"
                                    name=""
                                    id="firstname"
                                    value={`شهر: ${city}`}
                                    className="px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl validation-form-subject cursor-default"
                                    readOnly
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    شهر{" "}
                                </label>
                            </div>

                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-wallet text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    type="text"
                                    name=""
                                    id="firstname"
                                    value={`سن: ${age}`}
                                    className="px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl validation-form-subject cursor-default"
                                    readOnly
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    سن{" "}
                                </label>
                            </div>
                        </form>
                    </div>

                    <div className="mt-[1rem] px-[1rem] flex justify-end items-end w-full">
                        <button
                            onClick={closeModal}
                            className="bg-red-700 text-white py-[0.5rem] px-[2rem] rounded-md"
                            data-bs-dismiss="modal"
                        >
                            بستن
                        </button>
                    </div>
                </div>
            </div>
        </div>, document.getElementById("modal-parent")
    )
}