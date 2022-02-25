import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/M%C3%BCnchen_Blick_vom_Neuen_Rathaus_zu_St_Peter_September_2017.jpg/1280px-M%C3%BCnchen_Blick_vom_Neuen_Rathaus_zu_St_Peter_September_2017.jpg",
    address: 'Some address 5, 12345 Some city',
    description: 'This is a first meetup'
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/M%C3%BCnchen_Blick_vom_Neuen_Rathaus_zu_St_Peter_September_2017.jpg/1280px-M%C3%BCnchen_Blick_vom_Neuen_Rathaus_zu_St_Peter_September_2017.jpg",
    address: 'Some address 5, 12345 Some city',
    description: 'This is a second meetup'
  },
];
const HomePage = () => {
  return( 
    <MeetupList meetups={DUMMY_MEETUPS} />
  )
};

export default HomePage;
