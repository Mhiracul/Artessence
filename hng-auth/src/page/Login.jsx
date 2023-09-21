import { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Auth";

const Login = () => {
  const { signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signIn(email, password);

      await Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Redirecting...",
        showConfirmButton: false,
        timer: 1500,
      });

      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
      await Swal.fire({
        icon: "error",
        title: "Login Error",
        text: "Email or Password is Incorrect",
      });
    }
  };

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
              <p>
                Dont have an account?{" "}
                <Link to="/signup" className="text-red-600">
                  Sign up
                </Link>{" "}
              </p>
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
