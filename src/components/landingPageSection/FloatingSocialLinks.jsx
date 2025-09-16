import React from "react";
import { motion } from "framer-motion";
import {
  IconBrandX,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { useInView } from "react-intersection-observer";

const socialLinks = [
  { Icon: IconBrandX, href: "https://x.com/RajKuma05029694", label: "X" },
  { Icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/raajkumar07/", label: "LinkedIn" },
  { Icon: IconBrandGithub, href: "https://github.com/Raajkr07", label: "GitHub" },
  { Icon: IconMail, href: "mailto:rajkumar07.dev@gmail.com", label: "Mail" },
  { Icon: IconBrandInstagram, href: "https://www.instagram.com/raajkr.07/", label: "Insta" },
];

const iconVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.2, rotate: 5 },
};

export default function FloatingSocialLinks({ inView }) {
  return (
    <>
      {inView && (
        <div className="hidden lg:flex fixed right-6 top-1/3 flex-col items-center gap-4 z-50">
          {socialLinks.map(({ Icon, href, label }) => (
            <motion.div
              key={label}
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <ActionIcon
                aria-label={label}
                size="lg"
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                variant="subtle"
                className="text-gray-400 transition duration-300 hover:text-[#a176ff] focus:text-[#a176ff]"
              >
                <Icon size={28} stroke={1.6} />
              </ActionIcon>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
}