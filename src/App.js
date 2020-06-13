import React from "react";
import "./styles.css";
import InfoItem from "./components/infoitem.js";
import ToolBar from "./components/toolbar.js";
import ClusterSummary from "./components/cluster-summary.js";


export default function App() {
  return (
    <div className="App">
      <ToolBar title="ISILON Capacity Report" />
      <div className="flex-container">
      <div className="flex-child">
      <InfoItem title="One "/>
      <InfoItem title="Two "/>
      <InfoItem title="Three "/>
      <InfoItem title="Four "/>
      </div>
      <div className="flex-child">
      <ClusterSummary title="Mom" />
        </div>
      </div>
    </div>
);  
}
