// Working with Section 20-11 as a template for Posting and Getting comments via Mongo

// Import VVV this VVV into dashboard
// import { History, HistoryItem } from "../components/userHistory";


import React from "react";
import "./userHistory.css";

// This file exports both the List and ListItem components ==> Comments and CommentAll resp.

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
