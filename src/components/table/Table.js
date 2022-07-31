import "./Table.css"
const Table = ({data})=>{
   
    return(
        <div className="table">
            <table>
            <tr className="row-header">
                <th className="cell">Five I-messages:</th>
                <th className="cell">express</th>
                <th className="cell">Example</th>
            </tr>
            {data.map((message)=>(
                <tr className="row">
                    <th className="cell">{message.message}</th>
                    <th className="cell">{message.express}</th>
                    <th className="cell">{message.content}</th>
                </tr>
            ))}
            </table>
        </div>
    )
}

export default Table;