import React from "react";
import NavWidget from "@/components/home/header/navigation/navWidgate";
import NavTop from "@/components/home/header/navigation/topNav/Index";
import NavMiddle from "@/components/home/header/navigation/navMiddle/Index";

const Home = () => {
  return (
    <>
      <NavWidget />
      <NavTop/>
      <NavMiddle/>
    </>
  );
};

export default Home;
