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
  const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();
    console.log(idToken);
    const user = result.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData?.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  }
};

export default handleLogin;
