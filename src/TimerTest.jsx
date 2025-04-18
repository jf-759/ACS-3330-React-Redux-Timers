import React from "react";
import { createTimer } from "./features/timers/createTimer";

function TimerTest() {
  const timer = createTimer("Reading");

  return <pre>{JSON.stringify(timer, null, 2)}</pre>;
}

export default TimerTest;
