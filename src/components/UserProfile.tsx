import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Award,
  Calendar,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Edit3,
  Check,
  X,
  Camera,
  Briefcase,
  Users,
  Clock,
  Star,
} from "lucide-react";

export default function ProfileDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Andrei",
    lastName: "Ionescu",
    displayName: "Andrei Ionescu",
    email: "andrei.ionescu@devteam.ro",
    phone: "+40 721 234 567",
    location: "Cluj-Napoca, România",
    company: "DevTeam Solutions",
    department: "Engineering",
    position: "Senior Software Engineer",
    manager: "Maria Popescu",
    joinDate: "January 2022",
    employeeId: "EMP-2022-045",
    bio: "Passionate full-stack developer with 6+ years of experience in building scalable web applications. Specialized in React, Node.js, and cloud technologies. Team lead for the core platform development.",
    skills: ["React", "Node.js", "TypeScript", "Azure", "Docker", "GraphQL"],
    website: "https://andrei-dev.ro",
    github: "https://github.com/andrei-ionescu",
    linkedin: "https://linkedin.com/in/andrei-ionescu-dev",
    twitter: "https://twitter.com/andrei_codes",
  });

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saving profile:", profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSkillsChange = (value) => {
    const skillsArray = value
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill);
    setProfileData((prev) => ({ ...prev, skills: skillsArray }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="relative h-40 bg-gradient-to-r from-blue-600 to-indigo-600">
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="absolute bottom-6 left-8 flex items-end space-x-6">
              <div className="relative">
                <div className="w-28 h-28 rounded-lg bg-white shadow-lg flex items-center justify-center border-2 border-white">
                  <User className="h-14 w-14 text-gray-600" />
                </div>
                {isEditing && (
                  <button className="absolute -bottom-1 -right-1 bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-md shadow-md transition-colors">
                    <Camera className="h-3 w-3" />
                  </button>
                )}
              </div>
              <div className="text-white pb-2">
                <h1 className="text-2xl font-semibold mb-1">
                  {profileData.displayName}
                </h1>
                <p className="text-blue-100 font-medium">
                  {profileData.position}
                </p>
                <p className="text-blue-200 flex items-center text-sm mt-1">
                  <Building className="h-3 w-3 mr-1" />
                  {profileData.department} • {profileData.company}
                </p>
              </div>
            </div>
            <div className="absolute top-6 right-6">
              {!isEditing ? (
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="secondary"
                  className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Profile Information */}
          <div className="xl:col-span-3 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <User className="h-5 w-5 mr-2 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Personal Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-700"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={profileData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    disabled={!isEditing}
                    className="h-10 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={profileData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    disabled={!isEditing}
                    className="h-10 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="displayName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Display Name
                  </Label>
                  <Input
                    id="displayName"
                    value={profileData.displayName}
                    onChange={(e) =>
                      handleInputChange("displayName", e.target.value)
                    }
                    disabled={!isEditing}
                    className="h-10 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={!isEditing}
                    className="h-10 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    disabled={!isEditing}
                    className="h-10 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="location"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <MapPin className="h-4 w-4 mr-1" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={profileData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    disabled={!isEditing}
                    className="h-10 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>
              </div>
            </div>

            {/* Work Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Work Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="position"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <Award className="h-4 w-4 mr-1" />
                    Position
                  </Label>
                  <Input
                    id="position"
                    value={profileData.position}
                    onChange={(e) =>
                      handleInputChange("position", e.target.value)
                    }
                    disabled={!isEditing}
                    className="h-10 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="department"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <Building className="h-4 w-4 mr-1" />
                    Department
                  </Label>
                  <Input
                    id="department"
                    value={profileData.department}
                    onChange={(e) =>
                      handleInputChange("department", e.target.value)
                    }
                    disabled={!isEditing}
                    className="h-10 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="manager"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <Users className="h-4 w-4 mr-1" />
                    Manager
                  </Label>
                  <Input
                    id="manager"
                    value={profileData.manager}
                    onChange={(e) =>
                      handleInputChange("manager", e.target.value)
                    }
                    disabled={!isEditing}
                    className="h-10 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="employeeId"
                    className="text-sm font-medium text-gray-700"
                  >
                    Employee ID
                  </Label>
                  <Input
                    id="employeeId"
                    value={profileData.employeeId}
                    disabled={true}
                    className="h-10 bg-gray-100 text-gray-600"
                  />
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <User className="h-5 w-5 mr-2 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">About</h2>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="bio"
                  className="text-sm font-medium text-gray-700"
                >
                  Biography
                </Label>
                <textarea
                  id="bio"
                  rows={4}
                  value={profileData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600 resize-none"
                  placeholder="Tell us about yourself..."
                />
              </div>
            </div>

            {/* Skills & Expertise */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 mr-2 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Skills & Expertise
                </h2>
              </div>
              {!isEditing ? (
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  <Label
                    htmlFor="skills"
                    className="text-sm font-medium text-gray-700"
                  >
                    Skills (comma separated)
                  </Label>
                  <Input
                    id="skills"
                    value={profileData.skills.join(", ")}
                    onChange={(e) => handleSkillsChange(e.target.value)}
                    className="h-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="React, Node.js, TypeScript..."
                  />
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <Globe className="h-5 w-5 mr-2 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Social & Professional Links
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="website"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <Globe className="h-4 w-4 mr-1" />
                    Personal Website
                  </Label>
                  <Input
                    id="website"
                    value={profileData.website}
                    onChange={(e) =>
                      handleInputChange("website", e.target.value)
                    }
                    disabled={!isEditing}
                    className="h-10 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="linkedin"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <Linkedin className="h-4 w-4 mr-1 text-blue-600" />
                    LinkedIn
                  </Label>
                  <Input
                    id="linkedin"
                    value={profileData.linkedin}
                    onChange={(e) =>
                      handleInputChange("linkedin", e.target.value)
                    }
                    disabled={!isEditing}
                    className="h-10 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="github"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </Label>
                  <Input
                    id="github"
                    value={profileData.github}
                    onChange={(e) =>
                      handleInputChange("github", e.target.value)
                    }
                    disabled={!isEditing}
                    className="h-10 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="twitter"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <Twitter className="h-4 w-4 mr-1 text-blue-400" />
                    Twitter
                  </Label>
                  <Input
                    id="twitter"
                    value={profileData.twitter}
                    onChange={(e) =>
                      handleInputChange("twitter", e.target.value)
                    }
                    disabled={!isEditing}
                    className="h-10 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-600">
                    Joined {profileData.joinDate}
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-600">Active today</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-600">
                    Reports to {profileData.manager}
                  </span>
                </div>
              </div>
            </div>

            {/* Team Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-4">
                Team Contributions
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Active Projects</span>
                  <span className="font-semibold text-blue-600">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Completed Tasks</span>
                  <span className="font-semibold text-green-600">127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Team Reviews</span>
                  <span className="font-semibold text-purple-600">45</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-3 text-sm">
                <div className="border-l-2 border-blue-200 pl-3">
                  <p className="text-gray-700">Updated project roadmap</p>
                  <p className="text-gray-500 text-xs">2 hours ago</p>
                </div>
                <div className="border-l-2 border-green-200 pl-3">
                  <p className="text-gray-700">Completed code review</p>
                  <p className="text-gray-500 text-xs">5 hours ago</p>
                </div>
                <div className="border-l-2 border-purple-200 pl-3">
                  <p className="text-gray-700">Joined team meeting</p>
                  <p className="text-gray-500 text-xs">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
