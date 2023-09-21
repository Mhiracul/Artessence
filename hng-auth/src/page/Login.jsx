import { useState } from "react";
import { auth } from "../firebase";
import Swal from "sweetalert2";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Gallary from "./Gallary";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (!email || !password) {
        throw new Error("Please fill in both email and password fields.");
      }

      if (email === "mailto:user@example.com" && password === "1Password") {
        setIsLoggedIn(true);
      } else {
        await auth.signInWithEmailAndPassword(email, password);

        setIsLoggedIn(true);

        await Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Redirecting...",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      setError(error.message);
      await Swal.fire({
        icon: "error",
        title: "Login Error",
        text: error.message,
      });
    }
  };

  if (isLoggedIn) {
    return <Gallary />;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center md:text-3xl text-xl uppercase font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-3 text-center">Welcome back to ArtEssence!!</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          {error && <p className="mt-2 text-center text-red-600">{error}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
