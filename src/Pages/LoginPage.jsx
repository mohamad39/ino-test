import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <div className="h-screen w-screen grid md:grid-cols-2">
      {/* Left Section */}
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-4xl font-bold mb-2">Holla, Welcome Back</h1>
        <p className="text-gray-500 mb-8">
          Hey, welcome back to your special place
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-sm w-full">
          <input
            type="email"
            placeholder="stanley@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="form-checkbox text-purple-600"
              />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-purple-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-purple-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center justify-center bg-gradient-to-tr p-4">
        <img
          src="/Rectangle 4.png"
          alt="Login Illustration"
          className="size-full"
        />
      </div>
    </div>
  );
}
