import React, { PureComponent } from 'react'
import DashChartPie from '../charts/DashChartPie.tsx';
import DashChartLine from '../charts/DashChartLine.js'
import { DashAPICore } from '../../../../service/api/utils/core';

export default function HomeStatsComponents(props) {

    const url_tables = `api/v1/stats/${props.id}/${props.session}`
    const url_charts = `api/v1/stats/${props.id}-charts/${props.session}`
    const raceStatsAPI = new DashAPICore({
        request: 'GET',
        url: ''
    })

    const dataFrame = {
        columns: [],
        data: []
    }

    const [statsProps, setStatsProps] = React.useState(
        JSON.parse(window.localStorage.getItem("statsData"))|| dataFrame
    )
    
    const [chartData, setChartData] = React.useState(
        JSON.parse(window.localStorage.getItem("chartData"))|| dataFrame    
    );

    React.useEffect(function() {
        // dash-formula-one-api.herokuapp.com/
        const dataSetOne = window.localStorage.setItem("statsData", JSON.stringify(statsProps))
        const dataSetTwo = window.localStorage.setItem("chartData", JSON.stringify(chartData))
        if (!(dataSetOne && dataSetTwo)) {
            raceStatsAPI.url = url_tables
            raceStatsAPI.getData().then(res => res.json()).then(data => setStatsProps(data))

            raceStatsAPI.url = url_charts
            raceStatsAPI.getData().then(res => res.json()).then(data => setChartData(data))
        }

    }, [props.id]);

    const chartType = (props.id === "driver-stats") ? "Driver" : "Constructor"
    const charts = statsProps.data.map( chart => {
        let key = chart[statsProps.columns.indexOf(chartType)]
        key = (chartType === 'Driver') ? key.substring(0, key.indexOf(" ")) : key
        let val = chart[statsProps.columns.indexOf("Points")]
        return {
            Name: key,
            Point: val
        }
    })

  return (

    <div className='home-stats__stats'>
        <div className='stats__charts'>
            <div className='chart__line'>
                <h3>{chartType} Standing By Events {props.session}</h3>
                <DashChartLine 
                    dataSets={chartData["data"]}
                />
            </div>
            <div className='chart__pie'>
                <h3>{chartType} Total Points {props.session}</h3>
                <DashChartPie 
                    dataSets={charts.slice(0,5)}
                ></DashChartPie>
            </div>
        </div>
        <div className='stats__table'>
            <GenerateTable 
                data={statsProps["data"]} 
                headers={statsProps["columns"]} 
            />
        </div>
    </div>
  )
}


function GenerateTable({headers, data}) {
    const tableHeader = headers.map( header => {
        if (header !== 'Teamcolor')
            return <th scope='col'>{header}</th> 
    })
    const tableData = data.map( dict => {
        const tempArr = [];
        for (const key of Object.keys(dict)) {
            if (key !== '4')
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
