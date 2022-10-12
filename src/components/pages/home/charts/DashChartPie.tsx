import React, {FC} from 'react'
import { ResponsiveContainer, PieChart, Pie } from "recharts";

type Charter = {
    Name: string
    Point: number
}

interface CharterProps {
    dataSets: Array<Charter>
}

const DashChartPie: FC<CharterProps> = ({ dataSets }): JSX.Element => {
    const getPieData = dataSets.map(charter => {
        return {
            name: charter.Name,
            value: charter.Point
        }
    })
  return (
    <ResponsiveContainer width="100%" height={350}>
        <PieChart height={250}>
            <Pie
                data={getPieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"                
                label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    value,
                    index
                }) => {
                    const RADIAN = Math.PI / 180;
                    // eslint-disable-next-line
                    const radius = 25 + innerRadius + (outerRadius - innerRadius);
                    // eslint-disable-next-line
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    // eslint-disable-next-line
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                    <text
                        x={x}
                        y={y}
                        fill="var(--clr-black)"
                        textAnchor={x > cx ? "start" : "end"}
                        dominantBaseline="central"
                        fontSize={12}
                    >
                        {getPieData[index].name} ({value})
                    </text>
                    );
                }}
            />
        </PieChart>
    </ResponsiveContainer>
  )
}

export default DashChartPie