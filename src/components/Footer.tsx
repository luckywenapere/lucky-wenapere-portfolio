"use client";

import { MessageCircle, Instagram, Linkedin, Mail, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/+2347067367057",
      hoverColor: "hover:text-green-400"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/luckydidthis",
      hoverColor: "hover:text-pink-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://ng.linkedin.com/in/lucky-oyinbrakemi-wenapere",
      hoverColor: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:luckywenapere@gmail.com",
      hoverColor: "hover:text-red-400"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/luckywenapere",
      hoverColor: "hover:text-gray-300"
    }
  ];

  return (
    <footer className="bottom-0 w-full bg-black text-white py-4 px-6 z-50 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Copyright */}
        <div className="text-sm text-gray-300">
          Copyright © Lucky Oyinbrakemi Wenapere 2025
        </div>
        
        {/* Social Links */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors duration-200 ${social.hoverColor}`}
                aria-label={social.name}
              >
                <IconComponent size={20} />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}