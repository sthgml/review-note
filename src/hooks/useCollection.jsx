import { collection, onSnapshot, where, query } from "firebase/firestore";
import { useEffect, useState } from "react"
import { appFireStore } from "../firebase/config";

function useCollection (transaction, myQuery) { // sever의 데이터르 ㄹ불러오겠다./
    /* transaction : collection 이름 내맘대로 햇던그것 */
    
    // 문서들의 데이터를 관리
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        let q;
        if(myQuery){
            q = query(
                collection(appFireStore, transaction),
                where(...myQuery)
            );
            console.log('myQuery', myQuery);
            console.log('q',q);
            console.log('collection', collection(appFireStore, transaction))
        }

        const unsubscribe = onSnapshot( // 구독을 끊어주는 함수 반환
            collection(appFireStore, transaction),
            where(...myQuery),
            // (myQuery ? q : collection(appFireStore, transaction)), 
            // collection(appFireStore, transaction),
            (snapshot)=>{ //snapshot (사진직은것처럼 지금 데이터 전부를 담아옴)
                let result = [];
                 // snapshot.docs안에 데이터가 배열상태로 저장되어있음
                snapshot.docs.forEach((doc)=>{
                    result.push({
                        ...doc.data(),
                        id:doc.id
                    })
                })

                console.log('useCollection,result :',result)

                setDocuments(result);
            },
            (errMsg)=>{
                setError(errMsg);
            }
        )

        return ()=>{
            unsubscribe();
        }
    }, []) // 의존 배열을 비워두면 첨에 한 번만 실행되죵?

    return { documents, error }
}
export default useCollection