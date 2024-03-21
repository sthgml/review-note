import { useReducer } from "react"
import { appFireStore, timestamp } from "../firebase/config";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";

const initState = {
    document: null, // firestore에 document생성을 요청하면 반환
    isPending: false, 
    error: null,
    success: false // 요청 응답이 성공했는지 (데이터 받기 성공? or not)
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case "addDoc" :
            return {
                isPending: false,
                document: action.payload,
                success: true,
                error: null
            }
        case "error" :
            return {
                isPending: false,
                document: null,
                success: false,
                error: action.payload
            }
        case "isPending" :
            return {
                isPending: true,
                document: null,
                success: true,
                error: null
            }
        case "deleteDoc":
            return {
                isPending: false,
                document: null,
                success: true,
                error: null
            }
        case "updateDoc":
            return {
                isPending: false,
                document: action.payload,
                success: true,
                error: null
            }
        default: return state;
    }
}

function useFirestore (transaction) {
    const [response, dispatch] = useReducer(storeReducer, initState)

    // collection의 참조값
    const colRef = collection(appFireStore, transaction) // appFirestore를 불러와야해

    const addDocument = async (doc)=>{
        // 우리가사용하려는 도큐먼트
        try {
            const createdTime = timestamp.fromDate(new Date());
            // 도큐먼트의 참조값
            const docRef = await addDoc(colRef, {doc, createdTime});
            dispatch({ type:'addDoc', payload: docRef })
        } catch (error){
            console.log('업로드 실패~!~!~!#@~!@~',error);
            dispatch({type:'error', payload: error.message});
        }
    }

    const deleteDocument = async (id)=>{
        try {
            const docRef = doc(colRef, id);
            await deleteDoc(docRef);
            dispatch({ type: "deleteDoc", payload: docRef });
        } catch (error) {
            console.log('삭제 실패!!!!', error)
            dispatch({type: 'error', payload: error.message})
        }
    }

    const updateDocument = async (id, data)=>{
        try {
            const docRef = doc(colRef, id);
            const updatedDocRef = await updateDoc(docRef, data);
            dispatch({ type: "updateDoc", payload: updatedDocRef });
        } catch (error) {
            console.log('수정 실패!!!!', error);
            dispatch({type: 'error', payload: error.message})
        }
    }

    return { addDocument, deleteDocument, updateDocument, response }
}

export default useFirestore