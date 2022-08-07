export default function RankItem(props) {
    let data = props.data
    let sequence = props.sequence + 1

    if (data !== undefined){
        return (
            <>
                <tr>
                    <td style={{ color: "#ED0A00" }}>{sequence}</td>
                    <td>{data.email}</td>
                    <td>{data.countNumber}</td>
                </tr>
            </>
        )
    
    }
}