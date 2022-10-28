import "../styles/globals.css";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "../context/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UserProvider>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </UserProvider>
    </Provider>
  );
}

export default MyApp;
