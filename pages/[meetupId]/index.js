import React from "react";
import { MeetupDetail } from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/M%C3%BCnchen_Blick_vom_Neuen_Rathaus_zu_St_Peter_September_2017.jpg/1280px-M%C3%BCnchen_Blick_vom_Neuen_Rathaus_zu_St_Peter_September_2017.jpg"
      title="First meetup"
      address="Some street 5"
      description="The meet description"
    />
  );
}

export async function getStaticPaths(){
  return {
    fallback: false,
    paths:[
      {params:{
        meetupId: 'm1',
      }},
      {params:{
        meetupId: 'm2',
      }}
    ]
  }
}

export async function getStaticProps(context){
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
  return{
    props:{
      meetupData:{
        id:meetupId,
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/M%C3%BCnchen_Blick_vom_Neuen_Rathaus_zu_St_Peter_September_2017.jpg/1280px-M%C3%BCnchen_Blick_vom_Neuen_Rathaus_zu_St_Peter_September_2017.jpg",
        title:"First meetup",
        address:"Some street 5",
        description:"The meet description"
      }
    }
  }
}

export default MeetupDetails;
