import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { signinSuccess } from "../redux/user/userSlice";

function OAuthBtn() {
  const dispatch = useDispatch();
  const handleOAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await res.json();
      dispatch(signinSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleOAuth}
      className="px-3 py-2 font-medium text-white uppercase bg-red-600 rounded-md"
    >
      Continue with Google
    </button>
  );
}

export default OAuthBtn;
