import MainCanvas from "../../components/MainCanvas/MainCanvas";
import { SpaceManModel } from "../../components/models/SpaceMan";
import { useGetCollections } from "../../hooks/useGetCollections";
import useScreenSize from "../../hooks/useScreenSize";
import ShopHtmlLayout from "./shophtmlLayout";

const Shop = () => {
  const collections = useGetCollections();
  const { isMobile, isTablet } = useScreenSize();

  return (
    <MainCanvas
      numberOfPages={isMobile ? 13 : isTablet ? 5 : collections.length + 1}
      cameraPosition={[6, 0, 50]}
    >
      <SpaceManModel />
      <ShopHtmlLayout collections={collections} />
    </MainCanvas>
  );
};

export default Shop;
