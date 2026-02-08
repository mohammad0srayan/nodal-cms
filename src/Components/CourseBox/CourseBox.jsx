import './CourseBox.css'
import swal from "sweetalert";
import {removeArticlesFromServer} from "../../Redux/Store/Articles";
import {useDispatch} from "react-redux";

export default function CourseBox({title, price, category, desc, registersCount, discount, _id}) {
    const dispatch = useDispatch();

    const removeCourseFromList = (courseID) => {
        swal({
            title: 'آیا میخواهید این دوره را حذف کنید؟',
            icon: "warning",
            buttons: ['نه', 'بله']
        }).then(result => {
            if (result) {
                swal({
                    title: 'با موفقیت دوره مورد نظر حذف شد',
                    icon: "success",
                    buttons: 'تایید'
                }).then(() => {
                    dispatch(removeArticlesFromServer(`https://redux-cms.iran.liara.run/api/courses/${courseID}`))
                })
            }
        })
    }

    return (
        <>
            <div className="products__item">
                <img
                    src="/images/store/redux.png"
                    className="products__img"
                />
                <div className="products__details w-full">
                    <div className="products__info">
                        <h3 className="products__name">{title}</h3>
                        <p className="products__short-desc">
                            جاوااسکریپت یکی از بزرگترین زبان های برنامه نویسی...
                        </p>
                    </div>
                    <div className="products__tags">
                        <div className="products__boxes">
                            <div className="products__price-box flex gap-[0.2rem]">
                                <span className="fa fa-wallet"></span>

                                <span className="product__teg-text">قیمت :</span>
                                <span
                                    className="product__teg-text products__price-value">{price === 0 ? 'رایگان' : price?.toLocaleString()}</span>
                            </div>
                            <div className="products__category-box flex gap-[0.2rem]">
                                <span className="fa fa-folder"></span>

                                <span className="product__teg-text">دسته بندی:</span>
                                <span className="product__teg-text products__category">{category}</span>
                            </div>
                            <div className="products__shop-box flex gap-[0.2rem]">
                                <span className="fa fa-users"></span>

                                <span className="product__teg-text">تعداد ثبت نام :</span>
                                <span className="product__teg-text products__sell">{registersCount}</span>
                            </div>
                        </div>
                        <div className="products__btns flex gap-[0.5rem]">
                            <button onClick={() => removeCourseFromList(_id)} className="btn btn-danger btn-lg">حذف
                            </button>
                            <button className="btn btn-info btn-lg">ویرایش</button>
                        </div>
                    </div>
                </div>

                <div className="product__discount-Box">{discount}%</div>
            </div>
        </>
    )
}