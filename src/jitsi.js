import React, { useState } from "react";
import { Jutsu } from "react-jutsu";

const VideoCall = () => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [call, setCall] = useState(false);
  const [password, setPassword] = useState("");
  const [sem, setSem] = useState("");
  const [topic, setTopic] = useState("");
  const handleClick = (event) => {
    event.preventDefault();
    if (subject && name) setCall(true);
  };

  return call ? (
    <Jutsu
      roomName={subject}
      displayName={name}
      password={password}
      onMeetingEnd={() => console.log("Meeting has ended")}
      loadingComponent={<p>loading ...</p>}
      errorComponent={<p>Oops, something went wrong</p>}
      containerStyles={{ width: "100%", height: "650px" }}
    />
  ) : (
    <form>
      
      <input
        id="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        id="subject"
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        id="sem"
        type="text"
        placeholder="Semester (optional)"
        value={sem}
        onChange={(e) => setSem(e.target.value)}
      />
      <input
        id="topic"
        type="text"
        placeholder="Topic (optional)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <input
        id="password"
        type="text"
        placeholder="Password (optional)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} type="submit">
        Start / Join
      </button>
    </form>
  );
};

export default VideoCall;