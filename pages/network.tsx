import Heading from "@/components/Heading";
import Navigation from "@/components/Navigation";
import Modal from "@/components/NetworkModal";


// command to start mongodb: brew services start mongodb-community
// command to stop mongoDB: brew services stop mongodb-community
// launch the shell: mongosh
// list all databases: show dbs
// which database MongoDB is currently in: db
// create new DB or switch to DB: use [database name]
// heartsConnectedDB
// view all collections in db: db.getCollectionNames()
// create a new collection: db.createCollection("users")
// insert new document into collection: db.[collectionName].insertOne(document-to-insert)
// read documents: db.[collectionName].find()
// find document that meets condition: db.[collectionName].find( [Condition] ): ex: db.users.find( {"Location.City": "Chicago"})
// update field: db.users.updateOne( {"Name.First": "Mallory"}, { $set: { "Location.city": "Tulsa"}})
// add new field: db.users.update( [condition of which items to update], { $push: { [name of key to add]: "value"} })
// delete 1 collection: db.[collectionName].deleteOne({ "Genre.Name": "Comedy" })
// delete multiple collections: db.[collectionName].deleteMany({ "Genre.Name": "Comedy" })
// 

export default function Network() {
    return (
        <div>
            <Navigation />
            <Heading heading="Join Our Community"/>
            <div className="body">
                {/* <div className="cta w-full text-center my-20">
                    <div className="rounded-full w-fit m-auto text-white bg-cyan px-10 py-5 hover:opacity-70">
                        Join Our Community
                    </div>
                </div> */}
                <Modal />
                <div
                    className="drop-shadow-lg w-80 h-80 m-auto px-12 py-8 my-10 rounded bg-white text-center"
                >
                    <div className="text-xl text-center mb-10 font-bold">
                        Benefits of Joining
                    </div>
                    <ul>
                        <li className="text-left">Connect with others in the CHD family</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}