"use client";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

import UserProvider from "../context/user.provider";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import Loading from "../components/Loading";
import { useUser } from "../context/user.provider";
import { Provider } from "react-redux";
import { store, persistor } from "../Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import StaffingHeader from "../components/StaffingHeader";
import StaffingFooter from "../components/StaffingFooter";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});



function GlobalPreloader() {
  const { isLoading: userLoading } = useUser();
  const showPreloader = userLoading;
  return showPreloader ? <Loading /> : null;
}

export default function RootLayout({ children }) {
  const router = useRouter();

  return (
    <html lang="en">
      <head>
        <title>Md. Hamim Howlader Asif</title>
        
        
        <meta
          name="Md. Hamim Howlader Asif"
          content="I am a full-stack developer, and I love to build web applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`antialiased ${inter.variable} ${bebasNeue.variable}`} suppressHydrationWarning>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <UserProvider>
              <NextUIProvider navigate={router.push}>
                <StaffingHeader />
                <Toaster />
                <GlobalPreloader />
                {children}
                <StaffingFooter />
              </NextUIProvider>
            </UserProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
