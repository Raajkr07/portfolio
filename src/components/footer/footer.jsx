import {
  ActionIcon,
  Group,
  Text,
  Container,
} from '@mantine/core';
import { Heart } from 'lucide-react';
import {
  IconBrandX,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandYoutube,
  IconBrandSlack,
  IconBrandNotion,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { Icon: IconBrandX, href: 'https://x.com/', label: 'X' },
  { Icon: IconBrandLinkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { Icon: IconBrandGithub, href: 'https://github.com/', label: 'GitHub' },
  { Icon: IconBrandYoutube, href: 'https://youtube.com/', label: 'YouTube' },
  { Icon: IconBrandSlack, href: 'https://slack.com/', label: 'Slack' },
  { Icon: IconBrandNotion, href: 'https://notion.so/', label: 'Notion' },
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
    <footer className="bg-transparent border-0 px-4 ml-36 mr-36 mb-4">
      <Container
        size="lg"
        className="flex flex-col md:flex-row items-center justify-between pt-6 pb-2 gap-y-4 md:gap-y-0"
        role="contentinfo"
      >
        <Text className="text-sm sm:text-base text-center md:text-left text-white">
          © {new Date().getFullYear()}
        </Text>

        <div className="grid grid-cols-3 sm:grid-cols-6   justify-items-center w-full max-w-lg mx-auto py-4">
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
                className="text-gray-400 transition-shadow duration-300 hover:text-blue-400 hover:shadow-[0_4px_15px_0_rgba(59,130,246,0.35)] focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <Icon size={30} stroke={1.5} />
              </ActionIcon>
            </motion.div>
          ))}
        </div>

        <span
          className="flex items-center text-sm sm:text-base text-white"
          style={{ fontFamily: 'merriweather, serif' }}
        >
          made with
          <Heart className="mx-1 w-4 h-4 text-red-500 fill-red-500" />
          by Raaj
        </span>
      </Container>
    </footer>
  );
}
