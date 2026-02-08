import ReactDom from 'react-dom'
import {useDispatch} from "react-redux";
import {createCourseFromServer} from "../../Redux/Store/Courses";
import {useState} from "react";
import swal from 'sweetalert'

export default function ModalCreateCourse({ closeModalCourse }) {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [disCount, setDisCount] = useState(0)
    const [price, setPrice] = useState(0)
    const [registerCount, setRegisterCount] = useState(0)
    const [category, setCategory] = useState('')

    const createCourse = () => {
        if (title && desc && disCount && price && registerCount && category) {
            dispatch(createCourseFromServer({
                url: 'https://redux-cms.iran.liara.run/api/courses',
                title: title,
                price: price,
                category: category,
                registersCount: registerCount,
                discount: disCount,
                desc: desc
            }))
            swal({
                icon: 'success',
                title: "دوره با موفقیت اضافه شد",
                buttons: "OK"
            })
            closeModalCourse()
        } else {
            swal({
                icon: 'error',
                title: "دوره با موفقیت اضافه نشد",
                buttons: "OK"
            })
        }
    }

    return ReactDom.createPortal(
        <div
            className={`${closeModalCourse ? "open-modal" : "close-modal"}`}
            id="show-info-modal"
        >
            <div className="flex justify-center items-center h-[100vh]">
                <div className="bg-white rounded-md w-[500px] pb-[2rem]">
                    <div className="px-[1rem] py-[0.5rem] border-b-[1px] border-black/30">
                        <h4 className="text-xl">دوره جدید</h4>
                    </div>

                    <div className="p-[1rem]">
                        <form action="#" className="flex flex-col gap-[1rem]">
                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-user text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    type="text"
                                    name=""
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    id="firstname"
                                    placeholder={`نام دوره:`}
                                    className="px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl validation-form-subject"
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    نام دوره{" "}
                                </label>
                            </div>

                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-users text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    type="text"
                                    name=""
                                    onChange={(e) => setPrice(e.target.value)}
                                    value={price}
                                    id="firstname"
                                    placeholder={`قیمت دوره:`}
                                    className="px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl validation-form-subject"
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    قیمت دوره{" "}
                                </label>
                            </div>

                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-user text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    type="text"
                                    name=""
                                    onChange={(e) => setCategory(e.target.value)}
                                    value={category}
                                    id="firstname"
                                    placeholder={`دسته بندی:`}
                                    className="px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl validation-form-subject"
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    دسته بندی{" "}
                                </label>
                            </div>

                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-globe text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    type="text"
                                    name=""
                                    onChange={(e) => setRegisterCount(e.target.value)}
                                    value={registerCount}
                                    id="firstname"
                                    placeholder={`تعداد ثبت نامی`}
                                    className="px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl validation-form-subject"
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    تعداد ثبت نامی{" "}
                                </label>
                            </div>

                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-key text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    type="text"
                                    name=""
                                    onChange={(e) => setDisCount(e.target.value)}
                                    value={disCount}
                                    id="firstname"
                                    placeholder={`تخفیف دوره`}
                                    className="px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl validation-form-subject"
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    تخفیف دوره{" "}
                                </label>
                            </div>

                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-wallet text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <textarea
                                    name=""
                                    onChange={(e) => setDesc(e.target.value)}
                                    value={desc}
                                    id="firstname"
                                    placeholder={`توضیحات دوره`}
                                    className="px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl validation-form-subject"
                                ></textarea>
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    توضیحات دوره{" "}
                                </label>
                            </div>
                        </form>
                    </div>

                    <div className="mt-[1rem] px-[1rem] flex justify-end items-end gap-[1rem] w-full">
                        <button
                            onClick={closeModalCourse}
                            className="bg-red-700 text-white py-[0.5rem] px-[2rem] rounded-md"
                            data-bs-dismiss="modal"
                        >
                            بستن
                        </button>
                        <button
                            onClick={createCourse}
                            className="bg-green-700 text-white py-[0.5rem] px-[2rem] rounded-md"
                            data-bs-dismiss="modal"
                        >
                            ثبت
                        </button>
                    </div>
                </div>
            </div>
        </div>, document.getElementById("modal-parent")
    )
}