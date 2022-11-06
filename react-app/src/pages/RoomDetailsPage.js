import { useLocation, useParams } from "react-router-dom";
import TitleBar from "../components/TitleBar";
import RoomStats from "../components/RoomStats"

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
const RoomDetailsPage = ({match}) => {
	const {id} = useParams();
	
  return(
		<div>
			<TitleBar title={id}/>
			<RoomStats id={id}/>
		</div>
		
	)
}

export default RoomDetailsPage