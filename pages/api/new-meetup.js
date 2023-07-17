// not about creating react components, we define server side functions
// API routes only run on the server and will never be exposed to the client
// URL - /api/new-meetup

// lets us connect
import { MongoClient } from "mongodb";

// next function
async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;

		const client = await MongoClient.connect(
			"mongodb+srv://sanindo:hansa@cluster0.h26hfvf.mongodb.net/meetups?retryWrites=true&w=majority"
		);

		// if db doesnt exist it's created on the fly
		const db = client.db();

		// collection - table, document - entry
		const meetupsCollection = db.collection("meetups");

		// insert one new document into collection.
		// accepts objects, where result will be object with automatically generated ID
		const result = await meetupsCollection.insertOne(data);

		console.log(result);

		// close db once completed
		client.close();

		// return a status code with a json response
		res.status(201).json({ message: "Meetup inserted!" });
	}
}

export default handler;
