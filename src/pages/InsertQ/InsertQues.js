const InsertQues = ({aidRef, anameRef, qidRef, handleInsert}) => {
    return (<div><h1>Insert a Question</h1>
        <div>ID<input type="text" ref={aidRef} /></div>
        <div>Question<input type="text" ref={qidRef} /></div>
        <div>Answer<input type="text" ref={anameRef} /></div>
        <div><button onClick={handleInsert}>Submit</button></div>
    </div>)
}
export default InsertQues;