import { ArrowRight, Facebook, Github, X } from "lucide-react";

const LoginModal = () => {
  return (
    <div className="flex min-h-screen bg-slate-500">
      <div className="flex m-auto bg-white shadow-2xl rounded-2xl overflow-hidden max-w-4xl">
        <div className="flex flex-col p-8 w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600">
            Log in to your account to access your content and settings
          </p>
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0"
          />
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-orange-600 hover:underline">
              Forgot password?
            </a>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition duration-300">
              Log In <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
              <Facebook className="mr-2 h-5 w-5 text-blue-600" />
              <span>Facebook</span>
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
              <Github className="mr-2 h-5 w-5 text-gray-800" />
              <span>GitHub</span>
            </button>
          </div>
        </div>
        <div className="hidden md:block w-1/2 relative">
          <img
            src="https://picsum.photos/600/600?random=1"
            alt="Login background"
            className="object-cover w-full h-full"
          />
          <X className="absolute right-2 top-2 bg-white rounded-2xl h-7 w-7 shadow-lg hover:bg-gray-300 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
