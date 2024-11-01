const Home = ({questions, answers}) => {
    return (<div><h1>Home</h1>
        <table>
        <thead>
            <tr><td>ID</td><td>Question</td><td>Answer</td></tr>
        </thead>
        <tbody>
        {
             answers.map( (e) => {
                const ques = questions.find( (d) => e.qid === d.qid);
                return (<tr><td>{e.aid}</td>
                <td>{ques.qname}</td>
                <td>{e.aname}</td></tr>
                
                )
             })
        }
        </tbody>
        </table>
        </div>
    )
}
export default Home;