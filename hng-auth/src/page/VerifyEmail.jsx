import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const [emailVerified, setEmailVerified] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          await user.reload();
          setEmailVerified(user.emailVerified);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    verifyEmail();
  }, []);
  const handleVerifyEmail = () => {
    window.open("https://mail.google.com/", "_blank");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {emailVerified ? (
        <div className="text-white text-center ">
          <p className="text-2xl py-4">Your email has been verified.</p>
          <Link
            className="bg-[#dc2626] w-[100px] rounded-md font-medium my-3  mx-auto px-6 py-1"
            to="/login"
          >
            Back to login
          </Link>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-white text-center font-uppercase text-2xl">
            Check your Email for the Verification link
          </h1>
          <button onClick={handleVerifyEmail}>Verify Email</button>

          <p className="mb-4">
            Your email has not been verified. Please check your inbox for a
            verification email and click the link to verify your email address.
          </p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default VerifyEmail;
