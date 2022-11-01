import TitleBar from "../components/TitleBar"
import Stats from "../components/Stats"

const StatsPage = () => {
	return(
		<div>
			<TitleBar title="Stats"/>
			<Stats title={"All Rooms"} cardID={"BHS-J65-987"} openedTime={"9:40 PM"} openedDate={"27 October 2022"}/>
		</div>
	) 
}

export default StatsPage