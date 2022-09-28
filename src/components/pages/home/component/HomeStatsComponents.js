import React from 'react'

export default function HomeStatsComponents(props) {
    
    const [statsProps, setStatsProps] = React.useState({
        columns: [],
        data: []
    })

    React.useEffect(function() {
        fetch(`http://dash-formula-one-api.herokuapp.com/api/v1/stats/${props.id}/${props.session}`)
            .then(res => res.json())
            .then(data => setStatsProps(data))
    }, [props.id])

  return (
        <div className='home-stats__stats'>
        <div className='stats__charts'>
            <p>.score-stats-profile</p>
        </div>
        <div className='stats__table'>
            <GenerateTable data={statsProps["data"]} headers={statsProps["columns"]} />
            <MyResponsiveLine />
        </div>
    </div>
  )
}


function GenerateTable({headers, data}) {
    const tableHeader = headers.map( header => <th scope='col'>{header}</th>)
    const tableData = data.map( dict => {
        const tempArr = [];
        for (const key of Object.keys(dict)) {
            tempArr.push(<td title={headers[parseInt(key)]}>{dict[key]}</td>)
        }
        return (
            <tr>
                {tempArr}
            </tr>
        )
    })
    return (
        <table> 
            <thead>
                <tr>
                    {tableHeader}
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
        </table>
    )
}