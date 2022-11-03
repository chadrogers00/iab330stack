import { useLocation, useParams } from "react-router-dom";
import TitleBar from "../components/TitleBar";

const RoomDetailsPage = ({match}) => {
	const {id} = useParams();
	
  return(
		<div>
			<TitleBar title={id}/>
		</div>
		
	)
}

export default RoomDetailsPage