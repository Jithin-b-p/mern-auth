import { Link } from "react-router-dom";

function Signup() {
  return (
    <form className="flex flex-col justify-center w-4/5 gap-5 mx-auto text-center">
      <h1 className="mb-5 text-2xl font-bold">Sign up</h1>
      <input
        className="px-3 py-2 rounded-md bg-slate-50"
        id="username"
        type="text"
        placeholder="username"
      />

      <input
        className="px-3 py-2 rounded-md bg-slate-50"
        id="email"
        type="email"
        placeholder="email"
      />

      <input
        className="px-3 py-2 rounded-md bg-slate-50"
        id="password"
        type="password"
        placeholder="password"
      />
      <button
        type="submit"
        className="px-3 py-2 font-medium text-white uppercase bg-blue-900 rounded-md"
      >
        Sign up
      </button>
      <button className="px-3 py-2 font-medium text-white uppercase bg-red-600 rounded-md">
        Continue with Google
      </button>
      <span>
        Have an account?{" "}
        <Link className="text-blue-600" to="/signin">
          signin
        </Link>
      </span>
    </form>
  );
}

export default Signup;
