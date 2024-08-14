import React, { useState } from "react";
import { useLoginMutation } from "../api/authApi";
import { setToken } from "../slice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ username, password }).unwrap();
      const data = response.data;

      dispatch(setToken(data));
      navigate("/home");
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col justify-center w-1/2 bg-[#20846c] p-10">
        <h1 className="text-white text-4xl text-center font-bold mb-4">
          Welcome 
        </h1>
        <p className="text-white text-lg">
          Manage your products, ads, health organizations, and much more from one central location.
          The dashboard provides all the tools you need to stay on top of your business.
        </p>
      </div>

      {/* Right Section */}
      <div
        className="flex items-center justify-center w-full lg:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://your-background-image-url.com')`, // Replace with your image URL
        }}
      >
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
          {/* <h2 className="text-center text-2xl font-semibold text-gray-900 mb-6">
            Sign In
          </h2> */}
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  placeholder="username"
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#20846c] outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  placeholder="password"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#20846c] outline-none"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#20846c] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-[#1a6b58] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#20846c]"
              >
                Sign in
              </button>
            </div>
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
