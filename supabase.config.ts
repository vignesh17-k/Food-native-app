import "react-native-url-polyfill/auto";
import { AppState } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supa_base_url = 'https://tquyucgrwwfywwszdehp.supabase.co';
const supa_base_anon_Key ="sb_publishable_Hijhc65fkV4PQcMBy6-ORg_hMYY4pHi";


export const supabase = createClient(supa_base_url, supa_base_anon_Key, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
