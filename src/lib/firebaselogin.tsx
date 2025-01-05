import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/lib/firebase/config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { fetchWithAuth, handleApiResponse } from "@/lib/base";

const handleLogin = async () => {
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    hd: "vitstudent.ac.in",
    prompt: "select_account",
  });

  const auth = getAuth(app);
  try {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();
    return idToken;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Login error: ", error);
    return null;
  }
};

export default handleLogin;
