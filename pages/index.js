import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from 'mongodb';
import Head from 'next/head'
import React from "react";

const HomePage = (props) => {  
  return(   
  <React.Fragment>
    <Head>
      <title>React Meetups</title>
      <meta name="description" content="Browse a huge list of highly active React meetups!" />
    </Head>
    <MeetupList meetups={props.meetups} />
  </React.Fragment>
  )
};

// export function getServerSideProps(context){
//   const{req,res} = context;
//   return{
//     props:{
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }
export async function getStaticProps(){
  //fetch data from an API
  const client = await MongoClient.connect('mongodb+srv://fabianes96:x2bDzRrdaq7R8lSf@cluster0.9clfq.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollections = db.collection('meetups');

  const meetups = await meetupsCollections.find().toArray()

  client.close();
  return{
    props:{
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    }
  }
}

export default HomePage;
