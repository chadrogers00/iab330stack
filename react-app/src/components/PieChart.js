import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Colors } from "../utilities/GlobalStyles";

const pieChart = ({avaliable, occupied}) => {
	const COLORS = [Colors.blueTheme, Colors.iconRed];
	const data = [
		{
			name: "Avaliable",
			value: avaliable
		},
		{
			name: "Occupied",
			value: occupied
		}
]
  return(
		<div>
			<PieChart width={270} height={300}>
				<Pie
					data={data}
					color="#000000"
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					outerRadius={120}
					fill="#8884d8"
				>
				{
					data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
				}
				</Pie>
      	<Legend />
      </PieChart>
		</div>
	)
}

export default pieChart