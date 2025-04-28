"use client";
import { useEffect, useState } from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import axios from "axios";

export function Projects() {
  const [project, setProject] = useState<
    { name: string; description: string; deployedUrl: string }[]
  >([]);
  // useEffect(() => {
  //   const func = async () => {
  //       const result = await axios.get('/api/get-project');
  //       setProject(result.data.data);
  //   }
  //   func();
  // }, [])

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="flex justify-center font-bold text-4xl">Projects</div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Employee Payroll Management",
    description:
      "Developed a secure dual-login Java Spring MVC system with Oracle Database, featuring separate admin and employee functionalities for efficient management of HR tasks like employee data, leave requests, and salary processing.",
    link: "https://github.com/tanya0131/employee-payroll-management",
  },
  {
    title: "Holistic e-learning website ",
    description:
      "Developed a self-learning Java Spring MVC e-learning platform with JavaScript quizzes, enabling students to register, access courses, progress at their own pace, and receive instant feedback.",
    link: "https://github.com/tanya0131/holistic-e-learning",
  },
  {
    title: "Deploying fitness tracking website on aws cloud ",
    description:
      "Implemented a CI/CD pipeline using AWS CodeCommit, CodeBuild, and CodeDeploy to automatically build and deploy a Spring Boot Java application on scalable and highly available EC2 instances within an Auto Scaling Group, while also automating infrastructure provisioning with AWS CloudFormation.",
    link: "https://github.com/tanya0131/Deploying_spring_boot_application_on_aws",
  },
];
