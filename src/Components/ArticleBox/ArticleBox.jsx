import './ArticleBox.css'
import {useDispatch} from "react-redux";
import {removeArticlesFromServer} from "../../Redux/Store/Articles"
import swal from "sweetalert";

export default function ArticleBox({title, desc, views, category, _id}) {
    const dispatch = useDispatch()

    const removeArticleFromList = (articleID) => {
        swal({
            title: 'آیا میخواهید این مقاله را حذف کنید؟',
            icon: "warning",
            buttons: ['نه', 'بله']
        }).then(result => {
            if (result) {
                swal({
                    title: 'با موفقیت مقاله مورد نظر حذف شد',
                    icon: "success",
                    buttons: 'تایید'
                }).then(() => {
                    dispatch(removeArticlesFromServer(`https://redux-cms.iran.liara.run/api/articles/${articleID}`))
                })
            }
        })
    }


    return (
        <>
            <div className="articles__item">
                <img
                    src="/images/store/products/product-img-1.jpg"
                    className="articles__img"
                />
                <div className="articles__details w-full">
                    <div className="articles__info">
                        <h3 className="articles__name">{title}</h3>
                        <p className="articles__short-desc">
                            {desc}
                        </p>
                    </div>
                    <div className="articles__tags">
                        <div className="articles__boxes">
                            <div className="articles__category-box flex gap-2 items-center">
                                <span className="fa fa-tags"></span>
                                <p className="articles__tag-text articles__category my-0">
                                    <span className={'text-[1rem]'}>دسته بندی :</span>
                                    <span className="articles__category-value text-[1.1rem]">{category}</span>
                                </p>
                            </div>
                            <div className="articles__category-box flex gap-2 items-center">
                                <span className="fa fa-users"></span>
                                <p className="articles__tag-text articles__visited my-0 text-[0.9rem]">
                                    <span className={'text-[1rem]'}>تعداد بازدید :</span>
                                    <span className="articles__visited-count text-[1.1rem]">{views}</span>
                                </p>
                            </div>
                        </div>
                        <div className="articles__btns">
                            <button onClick={() => removeArticleFromList(_id)} className="op-btn btn btn-danger btn-lg">حذف</button>
                            <button className="op-btn btn btn-info btn-lg">ویرایش</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}