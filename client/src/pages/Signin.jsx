import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  signinStart,
  signinSuccess,
  signinError,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signinError(false));
      dispatch(signinStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resJson = await res.json();

      dispatch(signinSuccess(resJson.data));
      if (resJson.status === "failure") {
        throw Error(resJson.message);
      }

      navigate("/");
    } catch (error) {
      dispatch(signinError(error.message));
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col justify-center w-4/5 gap-5 mx-auto text-center"
    >
      <h1 className="mb-5 text-2xl font-bold">Sign in</h1>
      <input
        className="px-3 py-2 rounded-md bg-slate-50 disabled:text-slate-500"
        id="email"
        type="email"
        name="email"
        value={formData.email}
        placeholder="email"
        onChange={handleOnChange}
        disabled={loading}
      />

      <input
        className="px-3 py-2 rounded-md bg-slate-50 disabled:text-slate-500"
        id="password"
        type="password"
        name="password"
        value={formData.password}
        placeholder="password"
        onChange={handleOnChange}
        disabled={loading}
      />
      {error ? (
        <span className="block text-left text-red-700">{error}</span>
      ) : (
        ""
      )}
      <button
        type="submit"
        className="px-3 py-2 font-medium text-white uppercase bg-blue-900 rounded-md disabled:hover:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "Loading..." : "Sign in"}
      </button>
      <button className="px-3 py-2 font-medium text-white uppercase bg-red-600 rounded-md">
        Continue with Google
      </button>

      <span>
        Don&apos;t have an account?{" "}
        <Link className="text-blue-600" to="/signup">
          signup
        </Link>
      </span>
    </form>
  );
}

export default Signin;
