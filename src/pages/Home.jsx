import React from "react";
import NavWidget from "@/components/home/header/navigation/navWidgate";
import NavTop from "@/components/home/header/navigation/topNav/Index";
import NavMiddle from "@/components/home/header/navigation/navMiddle/Index";
import NavBottom from "@/components/home/header/navigation/navBottom/Index";
import Widget from "@/components/home/header/widgets/bigWidgets/Index";
import WidgetContainer from "@/components/home/header/widgets/widgetContainer/Index";

const Home = () => {
  return (
    <>
      <NavWidget />
      <NavTop />
      <NavMiddle />
      <NavBottom />
      <WidgetContainer />
    </>
  );
};

export default Home;
