// IMPORTS
import React from "react";

// LOCAL IMPORTS
import ReusablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/state/api";

const High = () => {
  return <ReusablePriorityPage priority={Priority.High} />;
};

export default High;
