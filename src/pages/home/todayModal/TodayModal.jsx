import React, { useEffect, useRef } from 'react'
import { useAuthContext } from '../../../hooks/useAuthContext'
import DiaryForm from './DiaryForm'
import iconHeart from "../../../images/icon/heart.svg"
import * as TM from "./TodayModal.Style.jsx"

export default function TodayModal({ setIsModalOpen }) {
	const { user } = useAuthContext();
    const dim = useRef();
    const handleClose = (e) => {
        setIsModalOpen(false);
        // console.log('modal close');
    };

    useEffect(() => {
        dim.current.addEventListener("click", handleClose);
    }, []);

    return (
        <>
            <TM.Dim ref={dim} className="dim"></TM.Dim>
            <TM.Section className="today">

                <h2 className="title typing">
                    <span className="mark">당장</span>&nbsp;기록해서 복습하기
                </h2>

                <h3 className="title">
                    <img src={iconHeart} alt="icon-heart" className="icon-heart"/>
                    <strong>당장</strong> &nbsp;기록해서 복습하면&nbsp; 
                    <strong>42%</strong>&nbsp;를 더 기억할 수 있어요!
                </h3>
        
                <DiaryForm uid={user.uid} handleClose={handleClose}></DiaryForm>
            </TM.Section> 
        </>
    )
}