import swal from "sweetalert";
import {useState} from "react";
import ReactDom from 'react-dom'
import {useDispatch} from "react-redux";
import {categoryCoursesFromServer} from "../../Redux/Store/Courses";

export default function ModalCreateCategoryCourse({ closeModalCourseCategory }) {
    const [category, setCategory] = useState('')
    const dispatch = useDispatch()

    const createCategoryCourse = () => {
        if (category) {
            dispatch(categoryCoursesFromServer({
                url: 'https://redux-cms.iran.liara.run/api/api/categories/',
                title: category,
            }))
            swal({
                icon: 'success',
                title: "دسته بندی با موفقیت ایجاد شد",
                buttons: "OK"
            })
            closeModalCourseCategory()
        } else {
            swal({
                icon: 'error',
                title: "دسته بندی با موفقیت ایجاد نشد",
                buttons: "OK"
            })
        }
    }

    return ReactDom.createPortal(
        <div
            className={`${closeModalCourseCategory ? "open-modal" : "close-modal"}`}
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
                                <span className="fa fa-wallet text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    name=""
                                    onChange={(e) => setCategory(e.target.value)}
                                    value={category}
                                    id="firstname"
                                    placeholder={`دسته بندی دوره ها`}
                                    className={`px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl ${!category ? 'validation-form-error' : 'validation-form-subject'}`}
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    دسته بندی دوره ها{" "}
                                </label>
                            </div>
                        </form>
                    </div>

                    <div className="mt-[1rem] px-[1rem] flex justify-end gap-[1rem] items-end w-full">
                        <button
                            onClick={closeModalCourseCategory}
                            className="bg-red-700 text-white py-[0.5rem] px-[2rem] rounded-md"
                            data-bs-dismiss="modal"
                        >
                            بستن
                        </button>
                        <button
                            onClick={createCategoryCourse}
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