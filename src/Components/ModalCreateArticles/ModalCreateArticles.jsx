import swal from "sweetalert";
import {useState} from "react";
import ReactDom from 'react-dom'
import {useDispatch} from "react-redux";
import {createArticleFromServer} from "../../Redux/Store/Articles";

export default function ModalCreateArticles({ closeModalArticle }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [views, setViews] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch()

    const createArticle = () => {
        if (title && category && views && description) {
            dispatch(createArticleFromServer({
                url: 'https://redux-cms.iran.liara.run/api/articles/',
                title: title,
                category: category,
                views: views,
                desc: description
            }))
            swal({
                icon: 'success',
                title: "مقاله با موفقیت ایجاد شد",
                buttons: "OK"
            })
            closeModalArticle()
        } else {
            swal({
                icon: 'error',
                title: "مقاله با موفقیت ایجاد نشد",
                buttons: "OK"
            })
        }
    }

    return ReactDom.createPortal(
        <div
            className={`${closeModalArticle ? "open-modal" : "close-modal"}`}
            id="show-info-modal"
        >
            <div className="flex justify-center items-center h-[100vh]">
                <div className="bg-white rounded-md w-[500px] pb-[2rem]">
                    <div className="px-[1rem] py-[0.5rem] border-b-[1px] border-black/30">
                        <h4 className="text-xl">مقاله جدید</h4>
                    </div>

                    <div className="p-[1rem]">
                        <form action="#" className="flex flex-col gap-[1rem]">
                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-wallet text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    name=""
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    id="firstname"
                                    placeholder={`نام مقاله`}
                                    className={`px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl ${!title ? 'validation-form-error' : 'validation-form-subject'}`}
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    نام مقاله{" "}
                                </label>
                            </div>

                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-wallet text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    name=""
                                    onChange={(e) => setCategory(e.target.value)}
                                    value={category}
                                    id="firstname"
                                    placeholder={`دسته بندی مقاله`}
                                    className={`px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl ${!category ? 'validation-form-error' : 'validation-form-subject'}`}
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    دسته بندی مقاله{" "}
                                </label>
                            </div>

                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-wallet text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    name=""
                                    onChange={(e) => setViews(e.target.value)}
                                    value={views}
                                    id="firstname"
                                    placeholder={`بازدید کننده ها`}
                                    className={`px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl ${!views ? 'validation-form-error' : 'validation-form-subject'}`}
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    بازدید کننده ها{" "}
                                </label>
                            </div>

                            <div className="flex flex-col-reverse relative">
                                <span className="fa fa-wallet text-xl absolute top-[2.8rem] right-[0.6rem] text-sm"></span>
                                <input
                                    name=""
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    id="firstname"
                                    placeholder={`توضیحات مقاله`}
                                    className={`px-[2rem] py-[0.8rem] border-[1px] border-black/20 rounded-xl ${!description ? 'validation-form-error' : 'validation-form-subject'}`}
                                />
                                <label htmlFor="firstname" className="mb-[0.3rem] px-[0.5rem]">
                                    توضیحات مقاله{" "}
                                </label>
                            </div>
                        </form>
                    </div>

                    <div className="mt-[1rem] px-[1rem] flex justify-end gap-[1rem] items-end w-full">
                        <button
                            onClick={closeModalArticle}
                            className="bg-red-700 text-white py-[0.5rem] px-[2rem] rounded-md"
                            data-bs-dismiss="modal"
                        >
                            بستن
                        </button>
                        <button
                            onClick={createArticle}
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