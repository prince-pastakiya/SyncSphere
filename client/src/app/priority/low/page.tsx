// IMPORTS
import React from "react";

// LOCAL IMPORTS
import ReusablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/state/api";

const Low = () => {
  return <ReusablePriorityPage priority={Priority.Low} />;
};

export default Low;
