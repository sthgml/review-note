import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return {...state, user: action.payload, isAuthReady: true};
        case "logout":
            return {...state, user: null }
        case "authIsReady" :
            return {...state,user:action.payload, isAuthReady: true};
        default:
            return state;
    }
}

const AuthContextProvider = ({ children }) => { // redux같이 생겼지만 아님ㅋ 저작권 ㅇㅋ? 모름ㅋ
    
    const [state, dispatch] = useReducer(authReducer, {
        /**리듀서에서관리할 초기값*/ user: null,
        /**사용자 인증 정보가 준비가 됐냐? --> firebase 안의 onAuthStageChanged 검증*/ isAuthReady: false
    })

    // console.log('context state', state)

    useEffect(()=>{
        const unsubscribe = appAuth.onAuthStateChanged(function(user){
            // console.log(user)
            // if(user){
                // 단, 유저정보가 있을 때만 authIsReady값이 true 되므로 렌더링이 되지 않습니다.
                dispatch({ type: 'authIsReady', payload:user })
                // 구독을 끊는 함수 한 번만 확인하고 파베랑 연결을 끊는 겁니다! 트래픽자원을 소모하지 않기 위해!
            // }
        });

        return () => {
            unsubscribe();
            //클린업함수!
        }
    }, [])

    return (
        <AuthContext.Provider value = {{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };