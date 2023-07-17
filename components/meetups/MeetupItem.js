import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
	// react hooks can only be used at root level of component function
	const router = useRouter();

	function showDetailsHandler() {
		// gives us search queries and methods for navigating programatically
		// push - similar to link component
		router.push("/" + props.id);
	}

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
				</div>
				<div className={classes.actions}>
					<button onClick={showDetailsHandler}>Show Details</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
