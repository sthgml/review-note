import { signOut } from "firebase/auth";
import { useState } from "react";
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    // 에러정보를 관리합니다.
    const [error, setError] = useState(null);

    // 통신 상태를 관리합니다.
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    const logout = () => {
        setIsPending(true);

        signOut(appAuth).then(()=>{
            // then == 잘 되면은~ == SIGNOUT SUCCESS;
            dispatch({ type: 'logout' })
            setIsPending(false);
        }).catch((errormsg)=>{
            // catch == 에러 잡으면은~~
            setError(errormsg);
            setIsPending(false);
            console.error(error)
        })
    }
    return { error, isPending, logout }
}

