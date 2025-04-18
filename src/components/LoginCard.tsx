import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from 'lucide-react';
import WaveDecoration from './WaveDecoration';

const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleMagicLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle magic link login
    console.log('Magic link requested for:', email);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle traditional login
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 relative">
      <WaveDecoration />
      <div className="w-full max-w-md p-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg relative z-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login to ReferralHub
        </h2>

        {/* OAuth Button */}
        <Button 
          variant="outline" 
          className="w-full mb-6 h-11 text-gray-700 border border-gray-300"
          onClick={() => console.log('OAuth clicked')}
        >
          Continue with Google/Microsoft
        </Button>

        {/* Magic Link Section */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Magic Link Login</p>
          <form onSubmit={handleMagicLinkSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Send Magic Link
            </Button>
          </form>
        </div>

        <div className="relative flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative bg-white px-4">
            <span className="text-sm text-gray-500">or</span>
          </div>
        </div>

        {/* Traditional Login Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <Input
              type="email"
              placeholder="robert.fox@myemail.com"
              className="mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="mt-1 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[60%] transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember" className="h-4 w-4 text-blue-500" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember Me
              </label>
            </div>
            <button type="button" className="text-sm text-blue-500 hover:text-blue-600">
              Forgot password?
            </button>
          </div>

          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            Login
          </Button>
        </form>

        {/* Social Login */}
        <div className="mt-6">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative bg-white px-4">
              <span className="text-sm text-gray-500">or</span>
            </div>
          </div>

          <div className="mt-4 flex justify-center space-x-4">
            {['google', 'facebook', 'twitter', 'linkedin'].map((social) => (
              <Button
                key={social}
                variant="outline"
                className="w-10 h-10 p-0 rounded-full"
                onClick={() => console.log(`${social} login clicked`)}
              >
                <span className="sr-only">Login with {social}</span>
                <div className="w-5 h-5 text-gray-700">
                  {/* Icon placeholder - replace with actual social icons */}
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button className="text-blue-500 hover:text-blue-600 font-medium">
            Register now
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
