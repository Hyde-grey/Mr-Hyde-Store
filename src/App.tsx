import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes";

import classNames from "classnames";
import styles from "./components/MainCanvas/MainCanvas.module.css";
import { AnimationProvider } from "./context/AnimationContext";

const App = () => (
  <AnimationProvider>
    <div className={classNames(styles.mainContainer)}>
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
    </div>
  </AnimationProvider>
);

export default App;
