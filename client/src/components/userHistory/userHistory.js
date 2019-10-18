// Working with Section 20-11 as a template for Posting and Getting comments via Mongo
// This activity also makes use of an integrated delete button that may be nice to bring in?

// Import VVV this VVV into dashboard
// import { History, HistoryItem } from "../components/userHistory";

// Do we need a Comment model?


import React from "react";
import "./userHistory.css";

// This file exports both the List and ListItem components ==> History and HistoryItem (commentAll & comment resp.)

export function History({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function HistoryItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

// Component to be added to dashboard page! VVV

<History>

</History>
