// IMPORTS
import React from "react";

// LOCAL IMPORTS
import ReusablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/state/api";

const Medium = () => {
  return <ReusablePriorityPage priority={Priority.Medium} />;
};

export default Medium;
