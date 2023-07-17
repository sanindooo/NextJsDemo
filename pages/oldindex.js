// these components aren't rendered as pages
import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A First Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg",
		address: "Some address 5, 12345 Some City",
		description: "This is a first meetup!",
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg",
		address: "Some address 5, 12345 Some City",
		description: "This is a Second meetup!",
	},
	{
		id: "m3",
		title: "A Third Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg",
		address: "Some address 5, 12345 Some City",
		description: "This is a Third meetup!",
	},
];

function HomePage(props) {
	// the first time component renders loadedMeetups is an empty array. 
	// next prerendering only uses the first component cycle as the HTML code so the items are missing (bad for SEO). 
	// Static generation - page component is prerendered when application is built for production. 
	// this prerendered code doesn't change whilst on the server unless you build again. 
	const [loadedMeetups, setLoadedMeetups] = useState([]);
	// this hook causes the component to re-render with the collected data
	useEffect(() => {
		setLoadedMeetups(DUMMY_MEETUPS)
	}, [])
	return <MeetupList meetups={loadedMeetups} />;
}

// only works in page component files
// executes function during prerendering process - runs this before calling component function
// it can return promises which causes next to wait for data before rendering component 
// you can access code that can execute on a server, this code never executes on the client-side
export async function getStaticProps() {
	// always returns an object
	return {
		props: {
			meetups: DUMMY_MEETUPS
		}
	}
}

export default HomePage;
