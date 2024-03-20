import Navbar from "@/components/navbar/Navbar";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <div>
          <Navbar />
          <div>
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </ThemeContextProvider>
  )
}
