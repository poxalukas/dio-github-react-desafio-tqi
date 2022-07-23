import App from "./App";
import { ResetCSS } from "./Global/resetCSS";
import GithubProvider from "./providers/GithubProvider";

function Providers() {
  return(
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  )
};

export default Providers;