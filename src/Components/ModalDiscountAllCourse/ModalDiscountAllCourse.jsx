import swal from "sweetalert";
import {useState} from "react";
import ReactDom from 'react-dom'
import {useDispatch} from "react-redux";
import {disCountAllCoursesFromServer} from "../../Redux/Store/Courses";

export default function ModalDiscountAllCourse({ closeModalCourseDisCount }) {
    const dispatch = useDispatch()
    const [disCount, setDisCount] = useState(0)

    const allCourseDisCount = () => {
        if (disCount) {
            dispatch(disCountAllCoursesFromServer({
                url: 'https://redux-cms.iran.liara.run/api/courses/discount',
                discount: disCount,
            }))
            swal({
                icon: 'success',
                title: "تخفیف با موفقیت اعمال شد",
                buttons: "OK"
            })
            closeModalCourseDisCount()
        } else {
            swal({
                icon: 'error',
                title: "تخفیف با موفقیت اعمال نشد",
                buttons: "OK"
            })
        }
    }

    return ReactDom.createPortal(
        <div
            className={`${closeModalCourseDisCount ? "open-modal" : "close-modal"}`}
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
                                    onChange={(e) => setDisCount(e.target.value)}
                                    value={disCount}
                                    id="firstname"
                                    placeholder={`تحفیف دوره ها`}
                                    className={`px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl ${!disCount ? 'validation-form-error' : 'validation-form-subject'}`}
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    تخفیف دوره ها{" "}
                                </label>
                            </div>
                        </form>
                    </div>

                    <div className="mt-[1rem] px-[1rem] flex justify-end gap-[1rem] items-end w-full">
                        <button
                            onClick={closeModalCourseDisCount}
                            className="bg-red-700 text-white py-[0.5rem] px-[2rem] rounded-md"
                            data-bs-dismiss="modal"
                        >
                            بستن
                        </button>
                        <button
                            onClick={allCourseDisCount}
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