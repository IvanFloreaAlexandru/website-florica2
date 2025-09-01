import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  Mail,
  GitBranch,
  Rocket,
  User,
  Workflow,
  ClipboardList,
  Users,
  Code,
  Cloud,
  HardDrive,
  GitPullRequest,
  Target,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ForgotPasswordForm {
  email: string;
}

export default function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>();

  const onSubmit = (data: ForgotPasswordForm) => {
    console.log("Password reset request:", data);
    // Here you would call your API to send the reset email
    setIsSubmitted(true);
    toast({
      title: "Reset link sent",
      description: "Check your email for password reset instructions.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans text-gray-900 bg-black">
      {/* Left Side: Forgot Password Form */}
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
              Forgot password?
            </h1>
            <p className="text-gray-600 text-lg">
              {isSubmitted
                ? "We've sent a password reset link to your email address."
                : "Enter your email address and we'll send you a link to reset your password."}
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-black font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-700" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`pl-10 pr-4 py-2 border rounded-lg w-full text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send reset link
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-center text-sm text-gray-600">
                Didn't receive the email? Check your spam folder or{" "}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-red-600 hover:underline font-medium"
                >
                  try again
                </button>
              </p>
            </div>
          )}

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

      {/* Right Side: Promotional Content with Enhanced Gradient & Shine */}
      <div className="hidden md:flex w-full md:w-1/2 p-12 lg:p-16 flex-col justify-between text-white relative overflow-hidden">
        {/* Enhanced Gradient Background (Culori originale) */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #333333, #dd1818)",
          }}
        ></div>

        {/* Shine Effect */}
        <div
          className="absolute inset-0 opacity-20 z-0"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.2) 0%, transparent 40%), radial-gradient(circle at 0% 100%, rgba(255,255,255,0.2) 0%, transparent 40%)",
          }}
        ></div>

        {/* Grain Effect Layer - Folosește calea relativă către fișier */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "url('/images/textura.png')",
            opacity: 0.5,
            backgroundSize: "256px 256px",
            pointerEvents: "none",
          }}
        ></div>

        {/* Content (Z-index ensures it's above gradients and grain) */}
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
