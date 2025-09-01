import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  GitBranch,
  Lock,
  MessageCircle,
  Rocket,
  User,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TwoFactorAuthForm {
  code: string;
}

export default function TwoFactorAuth() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TwoFactorAuthForm>();

  const onSubmit = (data: TwoFactorAuthForm) => {
    console.log("2FA code submitted:", data);
    // Here you would verify the 2FA code with your backend
    toast({
      title: "Authentication successful",
      description: "You have been logged in successfully.",
    });
    navigate("/"); // Redirect to the dashboard
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans text-gray-900 bg-black">
      {/* Left Side: Two-Factor Auth Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-white">
        <div className="max-w-md w-full">
          <div className="mb-10">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg bg-gray-50 shadow-sm">
                <GitBranch className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-2xl font-bold text-black">DevOpsFlow</span>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
              Two-factor authentication
            </h1>
            <p className="text-gray-600 text-lg">
              Please enter the authentication code from your authenticator app.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="code" className="text-black font-medium">
                Authentication Code
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-700" />
                <Input
                  id="code"
                  type="text"
                  placeholder="Enter your 6-digit code"
                  {...register("code", {
                    required: "Authentication code is required",
                    minLength: {
                      value: 6,
                      message: "Code must be 6 digits",
                    },
                    maxLength: {
                      value: 6,
                      message: "Code must be 6 digits",
                    },
                  })}
                  className={`pl-10 pr-4 py-2 border rounded-lg w-full text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 ${
                    errors.code ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.code && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.code.message}
                </p>
              )}
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Didn't receive a code or have an issue?{" "}
                <Link
                  to="/forgot-password" // Link to a support or resend page
                  className="text-red-600 hover:underline font-medium"
                >
                  Contact support
                </Link>
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
            >
              Verify Code
            </Button>
          </form>

          <div className="mt-8 text-center">
            <Link
              to="/login"
              className="text-sm text-red-600 hover:underline flex items-center justify-center gap-2 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to login
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side: Promotional Content (same as other auth pages) */}
      <div className="hidden md:flex w-full md:w-1/2 p-12 lg:p-16 flex-col justify-between text-white relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #333333, #dd1818)",
          }}
        ></div>

        <div
          className="absolute inset-0 opacity-20 z-0"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.2) 0%, transparent 40%), radial-gradient(circle at 0% 100%, rgba(255,255,255,0.2) 0%, transparent 40%)",
          }}
        ></div>

        <div
          className="absolute inset-0 z-0"
          style={{
            background: "url('/images/textura.png')",
            opacity: 0.5,
            backgroundSize: "256px 256px",
            pointerEvents: "none",
          }}
        ></div>

        <div className="relative z-10 space-y-6 max-w-md mx-auto flex flex-col justify-center h-full">
          <h2 className="text-4xl font-extrabold leading-tight drop-shadow-lg">
            Empower Your Team. Deliver with Confidence.
          </h2>
          <div className="relative pl-10">
            <Rocket className="absolute left-0 top-0 h-8 w-8 text-red-300 drop-shadow" />
            <p className="text-lg italic text-gray-200 drop-shadow">
              "Our team's productivity soared with this platform. Streamlined
              workflows and seamless collaboration are game-changers."
            </p>
          </div>
          <div className="flex items-center mt-6">
            <div className="w-12 h-12 rounded-full mr-3 border-2 border-red-300 shadow-md flex items-center justify-center bg-gray-700">
              <User className="h-7 w-7 text-white" />
            </div>
            <div>
              <p className="font-semibold text-lg text-white">Alex Devlin</p>
              <p className="text-red-200 text-sm">
                Lead Project Manager at Innovate Solutions
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm uppercase tracking-wider text-red-100 mb-4 font-semibold">
              Trusted by Leading Innovators
            </p>
            <div className="grid grid-cols-4 gap-x-8 gap-y-6 opacity-90">
              <div className="flex items-center space-x-2">
                <img
                  src="/images/microsoft.png"
                  alt="Microsoft"
                  className="h-8 w-8 "
                />
                <span className="text-sm text-white">Microsoft</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/images/asana.png" alt="Asana" className="h-8 w-8 " />
                <span className="text-sm text-white">Asana</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/images/jira.png" alt="Jira" className="h-8 w-8 " />
                <span className="text-sm text-white">Jira</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/images/slack.png" alt="Slack" className="h-8 w-8 " />
                <span className="text-sm text-white">Slack</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/images/dropbox.png"
                  alt="Dropbox"
                  className="h-8 w-8 "
                />
                <span className="text-sm text-white">Dropbox</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/images/atlassian.png"
                  alt="Atlassian"
                  className="h-8 w-8 "
                />
                <span className="text-sm text-white">Atlassian</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/images/github.png"
                  alt="GitHub"
                  className="h-8 w-8 "
                />
                <span className="text-sm text-white">GitHub</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/images/gitlab.png"
                  alt="GitLab"
                  className="h-8 w-8 "
                />
                <span className="text-sm text-white">GitLab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
