import { AppWrapper } from "./providers/app";
import { AppRoutes } from "./routes";

const App = () => {
  return <AppWrapper>{<AppRoutes />}</AppWrapper>;
};
export default App;
