import React, { useContext, useState } from "react";
import MyContext from "../context/myContext";
import { toast } from "react-toastify";
import { auth, fireDB } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { LoaderPage } from "../Components/Loader/Loader";

const Signup = () => {
  const [isSignUped, setIsSignedUp] = useState(false);
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(MyContext);
  const { loading, setLoading } = context;
  const signup = async () => {
    setLoading(true);
    console.log("Clicked");
    if (username === "" || email === "" || password === "") {
      return toast.error("All fields are required");
    }
    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);
      const user = {
        username: username,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Signup Succesfully");
      setIsSignedUp(true);
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return toast.error(error.message);
      // console.log(error.message)
    }
  };

  return (
    <div className="w-full border h-[100vh]">
      <div className="flex items-center justify-center h-full">
        {loading && <LoaderPage />}
        <div className="lg:w-1/4 mx-auto  flex flex-col gap-y-5 border rounded-xl py-10 px-10 shadow-xl">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <div className=" flex flex-col items-center gap-3">
            <button
              disabled={isSignUped}
              onClick={signup}
              className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
            >
              SignUp
            </button>
            {isSignUped && (
              <button
                onClick={() => (window.location.href = "/editprofile")}
                className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
              >
                Next
              </button>
            )}
            <p className="font-light text-sm mt-5">Already Have an Account? <a href="/login" className="text-links">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
