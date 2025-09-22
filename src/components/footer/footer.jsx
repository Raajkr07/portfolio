import {
  ActionIcon,
  Text,
  Container,
} from '@mantine/core';
import { Heart } from 'lucide-react';
import {
  IconBrandX,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconBrandInstagram,
  IconCalendarTime,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { Icon: IconBrandX, href: 'https://x.com/RajKuma05029694', label: 'X' },
  { Icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/raajkumar07/', label: 'LinkedIn' },
  { Icon: IconBrandGithub, href: 'https://github.com/Raajkr07', label: 'GitHub' },
  { Icon: IconMail, href: 'mailto:rajkumar07.dev@gmail.com', label: 'Mail' },
  { Icon: IconBrandInstagram, href: 'https://www.instagram.com/raajkr.07/', label: 'Insta' },
  { Icon: IconCalendarTime, href: 'https://cal.com/raajkumar', label: 'schedule Meeting' },
];

const iconVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.4,
    y: -8,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function Footer() {
  return (
    <footer className="bg-transparent border-0 px-4 mx-4 sm:mx-36 mb-12 font-main">
      <Container
        size="lg"
        className="flex flex-col md:flex-row items-center justify-between pt-6 pb-2 gap-y-4 md:gap-y-0"
        role="contentinfo"
      >
        <Text className="text-sm sm:text-base text-center md:text-left text-white">
          © {new Date().getFullYear()} Portfolio ♾️
        </Text>

        <div className="flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-3 w-full max-w-lg mx-auto py-4">
          {socialLinks.map(({ Icon, href, label }) => (
            <motion.div
              key={label}
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              style={{ display: 'inline-flex' }}
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
                className="text-gray-400 transition-shadow duration-300 hover:text-[#a176ff] focus:text-[#a176ff] focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <Icon size={32} stroke={1.5} />
              </ActionIcon>
            </motion.div>
          ))}
        </div>

        <span
          className="flex items-center text-sm sm:text-base text-white mt-4 md:mt-0"
        >
          Made with
          <Heart className="mx-1 w-6 h-6 text-red-500 fill-red-500" />
          by Raaj
        </span>
      </Container>
      <span className="absolute left-0 bottom-0 w-full h-1 bg-[#a529a1]"></span>
    </footer>
  );
}
