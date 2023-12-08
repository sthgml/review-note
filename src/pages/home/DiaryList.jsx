import DiaryItem from "./DiaryItem";

function DiaryList ({ diaries }) {
    // 다이어리 아이템 반복 생성
    const oldDiaries = diaries.map((item) => {
        return (
            <DiaryItem item={item}/>
        )
    });
    
    return (
        <>
            {oldDiaries}
        </>
    )
}

export default DiaryList