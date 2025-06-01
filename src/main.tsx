import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-url-polyfill/auto";
import Routes from "./routes";
import { supabase } from "../supabase.config";
import { setLogin } from "../store/slices/LoginSlice";
import { useDispatch } from "react-redux";
import { useToast } from "native-base";
import { setSession } from "../store/slices/User";
import Loader from "./components/Loader";

const MainApp = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [loading, set_loading] = useState(false);

  const handle_session_change = (event, session) => {
    dispatch(setSession({ session: session }));
    dispatch(setLogin(session ? true : false));
  };

  const fetch_session = async () => {
    set_loading(true);
    try {
      const { data: session, error } = await supabase.auth.getSession();
      if (error) {
        toast.show({
          title: error?.message,
          placement: "top",
          background: "red.800",
        });
      }
      dispatch(setSession(session));
      dispatch(setLogin(session ? true : false));
      set_loading(false);
    } catch (error) {
      console.error("Fetch Session Error:", error.message);
    }
  };

  useEffect(() => {
    fetch_session();
    const subscription: any = supabase.auth.onAuthStateChange(
      handle_session_change
    );
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
};

export default MainApp;
