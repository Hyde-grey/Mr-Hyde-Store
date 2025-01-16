import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes";
import { ScrollProvider } from "../src/contexts/ScrollContext";
import { MenuProvider } from "../src/contexts/MenuContext";
import classNames from "classnames";
import styles from "./components/mainCanvas/mainCanvas.module.css";

const App = () => (
  <MenuProvider>
    <ScrollProvider>
      <div className={classNames(styles.mainContainer)}>
        <BrowserRouter>
          <RoutesConfig />
        </BrowserRouter>
      </div>
    </ScrollProvider>
  </MenuProvider>
);

export default App;
