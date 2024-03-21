import useFirestore from "../../hooks/useFirestore"
import iconEdit from "../../images/icon/icon-edit-bk.png"
import iconDelete from "../../images/icon/icon-delete.svg"
import { useEffect, useRef, useState } from "react";

function DiaryItem ({ item }) {
    const [textareaValue, setTextareaValue] = useState('');
    const textarea = useRef();

    const { deleteDocument, updateDocument } = useFirestore('diary');
    const handleDelete = () => {
        if(confirm("정말로 삭제하시겠습니까?")) deleteDocument(item.id);
    }

    const handleUpdate = () => {
        if (confirm("수정하시겠습니까?")) updateDocument(item.id, {"doc.text": textareaValue});
    }

    // textarea 크기 변경!
    useEffect(()=>{
        textarea.current.style.height = 'auto';
        textarea.current.style.height = `${textarea.current.scrollHeight}px`;
    }, []);

    useEffect(()=>{
        textarea.current.style.height = 'auto';
        textarea.current.style.height = `${textarea.current.scrollHeight}px`;
    }, [textareaValue]);
    
    const handleTextareaChange = (e) => {
        const temp = e.target.value;
        setTimeout(()=>{
            if(temp === e.target.value){
                setTextareaValue(e.target.value);
            }
        }, 400)
    };

    const createdTime = item.createdTime.toDate();
    const timeString = `${createdTime.getFullYear()}년 ${createdTime.getMonth()+1}월 ${createdTime.getDate()}일 ${createdTime.getHours() > 12 ? "오후": "오전"} ${createdTime.getHours() % 12}시 ${createdTime.getMinutes()}분 ${createdTime.getSeconds()}초`;
    
    return (
        <>
            <li key={item.id} className="note-item">
                <article className="note-article">
                    <h4 className="note-title ell-1">
                        {item.doc.title}
                    </h4>
                    <p className="note-date assistive-text">
                        {timeString}
                    </p>
                    <textarea 
                        ref={textarea}
                        className="note-content" 
                        placeholder={item.doc.text}
                        defaultValue={item.doc.text}
                        onChange={handleTextareaChange}
                    >
                    </textarea>

                    <div className="div-btns">
                        <button type="button" onClick={() => handleUpdate()} className="edit-btn">
                            <img src={iconEdit} alt="수정" />
                        </button>
                        <span className="divider-btns"></span>
                        <button type="button" onClick={() => handleDelete()} className="delete-btn">
                            <img src={iconDelete} alt="삭제" />
                        </button>
                    </div>
                </article>
            </li>
        </>
    )
}

export default DiaryItem;