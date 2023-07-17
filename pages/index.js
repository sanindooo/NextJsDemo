// lets us add head elements to head of the page
import Head from "next/head";

// when you import a package and only use it in getServerProps or getStaticProps, the
// imported package is only availbale in server side. Next JS feature
import { MongoClient } from "mongodb";

// these components aren't rendered as pages
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
// 	{
// 		id: "m1",
// 		title: "A First Meetup",
// 		image:
// 			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg",
// 		address: "Some address 5, 12345 Some City",
// 		description: "This is a first meetup!",
// 	},
// 	{
// 		id: "m2",
// 		title: "A Second Meetup",
// 		image:
// 			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg",
// 		address: "Some address 5, 12345 Some City",
// 		description: "This is a Second meetup!",
// 	},
// 	{
// 		id: "m3",
// 		title: "A Third Meetup",
// 		image:
// 			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg",
// 		address: "Some address 5, 12345 Some City",
// 		description: "This is a Third meetup!",
// 	},
// ];

function HomePage(props) {
	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta
					name="description"
					content="Browse a huge list of highly reactive React meetups!"
				/>
			</Head>
			<MeetupList meetups={props.meetups} />
		</>
	);
}

// render the component for each request.
// this only runs on the server after deployment.
// only use if your data updates every second or it'll slow down your website.
// export async function getServerSideProps(context) {
// 	// can get access to request and response object
// 	const req = context.req;
// 	const res = context.res;

// 	// fetch data from API
// 	// can run operations that contain credentials that shouldn't be exposed

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }

// only works in page component files
// executes function during prerendering process - runs this before calling component function
// it can return promises which causes next to wait for data before rendering component
// you can access code that can execute on a server, this code never executes on the client-side

export async function getStaticProps() {
	// always returns an object

	// we don't need to use fetch because it's redundant. Instead we can directly connect to the DB
	const client = await MongoClient.connect(
		"mongodb+srv://sanindo:hansa@cluster0.h26hfvf.mongodb.net/meetups?retryWrites=true&w=majority"
	);

	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	// fidns all documents in collection asynchronously.
	// toArray - ensure we get an array of documents
	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		// set as props for page component (HomePage(props) {...})
		props: {
			// transform dataa to match props
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				// converts object to string which is usable
				id: meetup._id.toString(),
			})),
		},
		// adds incremental static generation.
		// number of seconds next waits before regenerating the results.
		// server regenerates this every 10 seconds if requests are coming for this page.
		// you now don't have to redeploy and rebuild for each time data changes.
		revalidate: 10,
	};
}

export default HomePage;
