import React, { useEffect, useState } from "react";
import { personalInfo } from "../constants/data";
import Button from "../components/Button";
import { ArrowDownCircle } from "lucide-react";

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = [
    
    "Frontend Developer",
    "Backend Developer",
    "Angular Developer",
    "React Developer",
    "Database Designer",
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && typedText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const timeout = setTimeout(() => {
        setTypedText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return currentRole.slice(0, prev.length + 1);
          }
        });
      }, typeSpeed);

      return () => clearTimeout(timeout);
    }
  }, [typedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-blue-900 to-gray-900"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute top-[60%] -left-[5%] w-[30%] h-[30%] bg-purple-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-20 md:mt-0">
        {/* Content Section */}
        <div className="text-center md:text-center">
          <p className="text-blue-400 font-medium mb-3 animated fadeIn">
            {personalInfo.title}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animated fadeInUp">
            Hi, I'm {personalInfo.name}
          </h1>
          <div className="h-8 md:h-12">
            <h1 className="text-xl md:text-3xl text-gray-300 font-light mb-8 min-h-8 typed-text animated fadeIn delay-500">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
          </div>
          <p className="text-gray-300 mb-10 w-2xl animated fadeIn delay-700">
            {personalInfo.description}
          </p>
          <div className="space-x-4 animated fadeInUp delay-1000">
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              as="a"
              className="animated pulseEffect"
            >
              Let's Work Together
            </Button>
            <Button variant="outline" size="sm" href="#projects" as="a">
              View My Work
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animated bounce delay-1500">
          <a
            href="#projects"
            className="text-white opacity-80 hover:opacity-100 transition-all duration-300"
            aria-label="Scroll down"
          >
            <ArrowDownCircle size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
