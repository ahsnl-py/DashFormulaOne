import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function DashChartLine({dataSets}) {

  const datasetYear = dataSets.map( (year) => year[0])
  const datasetTeamColor = dataSets.map( (color) => color[2])
  const exportData = []

  for (let i=0; i<datasetYear.length; i++) {
    exportData.push({
      year: datasetYear[i],
      ...dataSets[i][1]
    })
  }
  
  const Lines = []
  for (var key in exportData[0]) {
    if (key !== 'year') {
      
      Lines.push(
        <Line 
          type="monotone" 
          dataKey={key} 
          stroke={datasetTeamColor[0][key]} 
          dot={false}
          strokeWidth={2}
        />
      ) 
    }
      
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
        <LineChart
        // width={500}
        height={250}
        data={exportData}
        cx="50%"
        cy="50%"
        margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" fontSize={12} />
        <YAxis fontSize={12}/>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
        {[...Lines]}
        </LineChart>
        
    </ResponsiveContainer>
  );
}
