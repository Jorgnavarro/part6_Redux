

export function StatisticsLine({text, value}) {

    if(isNaN(value)){
            value = 0
    }

    return (
                <tbody className="tableColor">
                    <tr>
                        <th scope="row" className="text-start">{text}</th>
                        <td>{value}</td>
                    </tr>
                </tbody>
    )
}