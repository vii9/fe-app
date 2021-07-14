import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutMaster from "../components/Layout/Master";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutMaster>
      <Component {...pageProps} />
    </LayoutMaster>
  );
}
export default MyApp;
