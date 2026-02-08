import './Courses.css'
import Menu from "../../Components/Menu/Menu";
import CourseBox from "../../Components/CourseBox/CourseBox";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesFromServer} from "../../Redux/Store/Courses";
import ModalCreateCourse from "../../Components/ModalCreateCourse/ModalCreateCourse";
import ModalDiscountAllCourse from "../../Components/ModalDiscountAllCourse/ModalDiscountAllCourse";
import ModalCreateCategoryCourse from "../../Components/ModalCreateCategoryCourse/ModalCreateCategoryCourse";

export default function Courses() {
    const [isShowModal, setIsShowModal] = useState(false);
    const [isModalCourseDisCount, setIsModalCourseDisCount] = useState(false);
    const [isModalCourseCategory, setIsModalCourseCategory] = useState(false);
    const courses = useSelector(state => state.courses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCoursesFromServer('https://redux-cms.iran.liara.run/api/courses/'))
    }, []);

    const closeModalCourse = () => {
        setIsShowModal(false);
    }

    const closeModalCourseDisCount = () => {
        setIsModalCourseDisCount(false)
    }

    const closeModalCourseCategory = () => {
        setIsModalCourseCategory(false)
    }

    return (
        <>
            <Menu/>

            <div className="px-[3rem] mt-[3rem]">
                <div className="products__list products-wrapper">
                    {courses.map(course => (
                        <CourseBox key={course._id} {...course} />
                    ))}
                </div>
            </div>

            <div className="new-course flex gap-2">
                <button
                    onClick={() => setIsShowModal(true)}
                    className="btn-custome btn-custome__blue"
                    data-bs-toggle="modal"
                    data-bs-target="#new-product"
                >
                    افزودن دوره جدید
                </button>
                <button
                    onClick={() => setIsModalCourseDisCount(true)}
                    className="btn-custome btn-custome__red"
                    data-bs-toggle="modal"
                    data-bs-target="#add-discount-all-product"
                >
                    اعمال تخفیف همه دوره‌ها
                </button>
                <button
                    onClick={() => setIsModalCourseCategory(true)}
                    className="btn-custome btn-custome__green"
                    data-bs-toggle="modal"
                    data-bs-target="#add-new-category"
                >
                    افزودن دسته بندی
                </button>
            </div>

            {isShowModal ? (
                <ModalCreateCourse closeModalCourse={closeModalCourse} />
            ) : null}

            {isModalCourseDisCount ? (
                <ModalDiscountAllCourse closeModalCourseDisCount={closeModalCourseDisCount} />
            ) : null}

            {isModalCourseCategory ? (
                <ModalCreateCategoryCourse closeModalCourseCategory={closeModalCourseCategory} />
            ) : null}
        </>
    )
}