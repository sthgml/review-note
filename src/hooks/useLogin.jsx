import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    // 에러정보를 관리합니다.
    const [error, setError] = useState(null);

    // 통신 상태를 관리합니다.
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    const login = (email, password) => {
        setIsPending(true);

        signInWithEmailAndPassword(appAuth, email, password).then((userCredential)=>{
            // then == 잘 되면은~ == SIGNOUT SUCCESS;
            const user = userCredential.user
            dispatch({ type: 'login', payload: user})
            setIsPending(false);
            if(!user){
                throw new Error("회원정보를 받아올 수 없습니다.")
            }
        }).catch((errormsg)=>{
            // catch == 에러 잡으면은~~
            setError(errormsg);
            setIsPending(false);
            console.log(errormsg);
        })
    }
    return { error, isPending, login }
}

