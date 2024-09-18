// IMPORTS
import React from "react";

// LOCAL IMPORTS
import ReusablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/state/api";

const Backlog = () => {
  return <ReusablePriorityPage priority={Priority.Backlog} />;
};

export default Backlog;
