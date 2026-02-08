import './Articles.css'
import Menu from "../../Components/Menu/Menu";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getArticlesFromServer} from "../../Redux/Store/Articles";
import ModalCreateArticles from "../../Components/ModalCreateArticles/ModalCreateArticles";

export default function Articles () {
    const articles = useSelector(state => state.articles)
    const [isShowModalArticles, setIsShowModalArticles] = useState(false);
    const dispatch = useDispatch();

    const closeModalArticle = () => {
        setIsShowModalArticles(false)
    }

    useEffect(() => {
        dispatch(getArticlesFromServer('https://redux-cms.iran.liara.run/api/articles/'))
    }, []);

    return (
        <>
            <Menu/>

            <div className="articles">
                <div className="articles__list">
                    {articles.map(article => (
                        <ArticleBox key={article._id} {...article} />
                    ))}
                </div>
            </div>

            <div className="new-article">
                <button
                    onClick={() => setIsShowModalArticles(true)}
                    className="btn-custome btn-custome__blue"
                    data-bs-toggle="modal"
                    data-bs-target="#new-article"
                    id="btn-modal-new-article"
                >
                    افزودن مقاله جدید
                </button>
            </div>

            {isShowModalArticles ? (
                <ModalCreateArticles closeModalArticle={closeModalArticle} />
            ) : null}
        </>
    )
}