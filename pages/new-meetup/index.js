import { useRouter } from "next/router";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from 'next/head'

function NewMeetupPage() {
  const router = useRouter();

  const onAddMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };
  return (
    <React.Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Add your own meetups"
        />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </React.Fragment>
  );
}

export default NewMeetupPage;
