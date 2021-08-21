import type { AppProps } from "next/app";
import {
    GoogleReCaptchaProvider
} from "react-google-recaptcha-v3";
import "../styles/globals.css";
import type { Page } from "../types/page";


// this should give a better typing
type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return getLayout(
    <GoogleReCaptchaProvider reCaptchaKey={process.env.reCaptchaKey}>
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
}
export default MyApp;