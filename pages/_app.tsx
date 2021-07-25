import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutMaster from "../components/Layout/Master";
import Router from "next/router";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutMaster>
      <Component {...pageProps} />
    </LayoutMaster>
  );
}
export default MyApp;
