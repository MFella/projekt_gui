import React, { useEffect } from "react";
import Topbar from "./components/Topbar/Topbar";
import OrdersWidget from "./widgets/Orders/OrdersWidget";
import QualityWidget from "./widgets/Quality/QualityWidget";
import ChartWidget from "./widgets/Chart/ChartWidget";

const App = () => {

  return (
    <div className="App">
      <Topbar />
      <OrdersWidget />
      <QualityWidget />
      <ChartWidget />
    </div>
  );
};

export default App;
