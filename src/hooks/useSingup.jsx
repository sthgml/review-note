import { useState } from "react"
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    // Fb와 통신상태를 관리합니다. (에러? 통신중?)
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    // dispatch..
    const { dispatch } = useAuthContext();

    // onClick 에서 handleSubmit함수 안에 들어갈 함수
    const signup = (email, password, displayName) => {

        // 회원가입 처리 함수 - Fb에서 제공하는 함수 시작
        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in 
                // 유저정보를 user 변수에 저장
                const user = userCredential.user;

                if (!user) {
                    throw new Error('회원 정보를 불러올 수 없습니다.');
                }
                
                // 회원 정보 업데이트 함수 시작
                updateProfile(appAuth.currentUser, { displayName })
                    .then(() => {
                        // 회원정보를 context에 업데이트
                        // 유저정보가 저장된 user를 payload로 전달
                        dispatch({type: 'login', payload: user});
                        setError(null);
                        setIsPending(false);
                    }).catch((err) => {
                        setError(err.message);
                        setIsPending(false);
                        console.error(error);
                    })
                    // 회원 정보 업데이트 함수 끝

            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
                console.error(error);
            });
            // 회원가입 처리 함수 - Fb에서 제공하는 함수 끝
    }

    return { error, isPending, signup }
}