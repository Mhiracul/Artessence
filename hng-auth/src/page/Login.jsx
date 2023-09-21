import { useState } from "react";
import { auth } from "../firebase"; // Import your Firebase configuration
import Swal from "sweetalert2";
import Gallery from "./Gallery";

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
        // For default user, set isLoggedIn to true
        setIsLoggedIn(true);
      } else {
        await auth.signInWithEmailAndPassword(email, password);

        // For other users, set isLoggedIn to true
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

  // Render the Gallery component if isLoggedIn is true
  if (isLoggedIn) {
    return <Gallery />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="email"
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
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        {error && <p className="mt-2 text-center text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
