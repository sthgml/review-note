import { deleteDoc } from "firebase/firestore"
import useFirestore from "../../hooks/useFirestore"
import iconEdit from "../../images/icon/icon-edit-bk.png"
import iconDelete from "../../images/icon/icon-delete.svg"

function DiaryList ({ diaries }) {
    const { deleteDocument } = useFirestore('diary');
    console.log('diaries', diaries);

    const oldDiaries = diaries.map((item) => {
        return (
            <li key={item.doc.id}>
                <article>
                    <h4 className="note-title ell-1">
                        {item.doc.title}
                    </h4>
                    <p className="note-date assistive-text">{item.createdTime.seconds}
                    </p>
                    <textarea 
                        className="note-content" 
                        placeholder={"item.doc.text"} rows="8">
                            {item.doc.text}
                    </textarea>

                    <div>
                        <button type="button">
                            <img src={iconEdit} alt="수정" />
                        </button>
                        <span></span>
                        <button type="button" onClick={deleteDoc}>
                            <img src={iconDelete} alt="삭제" />
                        </button>
                    </div>
                </article>
            </li>
        )
    });

    return (
        <>
            {oldDiaries}
        </>
    )
}

export default DiaryList