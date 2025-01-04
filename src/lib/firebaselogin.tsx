import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/lib/firebase/config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Cookies from "js-cookie";

const handleLogin = async () => {
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    hd: "vitstudent.ac.in",
    prompt: "select_account",
  });
  const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();
    const user = result.user;

    Cookies.set("authToken", idToken, { expires: 7 }); // Expires in 7 days
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData?.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  }
};

export default handleLogin;
