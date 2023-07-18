import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
	return (
		<>
			<Head>
				<title>{props.meetupData.title}</title>
				<meta
					name="description"
					content={props.meetupData.description}
				/>
			</Head>
			<MeetupDetail
				image={props.meetupData.image}
				title={props.meetupData.title}
				address={props.meetupData.address}
				description={props.meetupData.description}
			/>
		</>
	);
}

// getStaticPaths - needs to be exported in page component if it's a dynamic page and we're using getStaticProps.
// helps make sure we only pregenerate pages for id's that exist. Entering in a path that doesn't exist throws an error
export async function getStaticPaths() {
	// we don't need to use fetch because it's redundant. Instead we can directly connect to the DB
	const client = await MongoClient.connect(
		"mongodb+srv://sanindo:hansa@cluster0.h26hfvf.mongodb.net/meetups?retryWrites=true&w=majority"
	);

	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	// modify find() to only spit out iD's - first arg: filter criteria where empty means no filter criteria
	// second arg: define which fields to extract for each document.
	// assigning value of 1 means only fetch this items and not any of the others
	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		// fallback - lets next if your paths contains all supported params of just some of them.
		// false - paths: contains all meetupId values.
		// true - next tries to create a new path dynamically based on the request. Immediately 
		// pulls the page and populates it dynamically with the data so this lag needs to be handled
		// blocking - there might be more fallback pages. Only navigates to the page when it's fully ready 
		fallback: 'blocking',
		// paths object defines what paths should be pregenerated using the page ID param
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
	};
}

// cant use react hooks in this function
export async function getStaticProps(context) {
	// context has params
	// grab ID for items in the square bracket folder
	const meetupId = context.params.meetupId;

	// only shows in terminal since it doesn't run on the browser
	// console.log(meetupId);

	// we don't need to use fetch because it's redundant. Instead we can directly connect to the DB
	const client = await MongoClient.connect(
		"mongodb+srv://sanindo:hansa@cluster0.h26hfvf.mongodb.net/meetups?retryWrites=true&w=majority"
	);

	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	// we want to access a single meetup.
	// object in find() set criteria by which we want to find meetup info by (using id in this case but can use any key)
	const selectedMeetup = await meetupsCollection.findOne({
		// ensures meetupId is an ObjectId and not a string.
		_id: new ObjectId(meetupId),
	});

	client.close();

	return {
		props: {
			// transform data and convert objectId id back to string
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				address: selectedMeetup.address,
				image: selectedMeetup.image,
				description: selectedMeetup.description,
			},
		},
	};
}

export default MeetupDetails;
