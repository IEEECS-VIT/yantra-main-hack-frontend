import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/lib/firebase/config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
  } catch (error: any) {
    console.error("Login error: ", error);
    return null;
  }
};

export default handleLogin;
