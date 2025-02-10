import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes";

import classNames from "classnames";
import styles from "./components/MainCanvas/MainCanvas.module.css";

const App = () => (
  <div className={classNames(styles.mainContainer)}>
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  </div>
);

export default App;
