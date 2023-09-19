import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setError(null); // Clear any previous errors

    try {
      if (!email || !password) {
        throw new Error("Please fill in both email and password fields.");
      }

      if (email !== "mailto:user@example.com" || password !== "1Password") {
        throw new Error(
          "Invalid email or password. Please use the provided credentials."
        );
      }

      // Handle successful login (e.g., redirect to another page)
      await Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Redirecting...",
        showConfirmButton: false,
        timer: 1500, // Automatically close after 1.5 seconds
      });
    } catch (error) {
      setError(error.message);

      // Show an error notification using SweetAlert
      await Swal.fire({
        icon: "error",
        title: "Login Error",
        text: error.message,
      });
    }
  };

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
