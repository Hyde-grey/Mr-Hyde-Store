import MainCanvas from "../../components/MainCanvas/MainCanvas";
import Spiral from "../../components/Spiral";
import HomeLayout from "./homeLayout";

import "./home.css";

const Home = () => {
  return (
    <>
      <MainCanvas numberOfPages={4}>
        <Spiral />
        <HomeLayout />
      </MainCanvas>
    </>
  );
};

export default Home;
