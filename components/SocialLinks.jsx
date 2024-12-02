import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/mdi/github';
import linkedinIcon from '@iconify-icons/mdi/linkedin';
import instagramIcon from '@iconify-icons/mdi/instagram';

const SocialLinks = () => (
  <div>
    {/* Fondo oscuro */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>
    
    {/* Íconos sociales */}
    <div className="social-links fixed bottom-4 right-4 flex flex-col space-y-4 z-50">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Icon
          icon={githubIcon}
          width="32"
          height="32"
          className="text-white group-hover:text-gray-300 transition-transform duration-200 group-hover:scale-110"
        />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Icon
          icon={linkedinIcon}
          width="32"
          height="32"
          className="text-white group-hover:text-gray-300 transition-transform duration-200 group-hover:scale-110"
        />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Icon
          icon={instagramIcon}
          width="32"
          height="32"
          className="text-white group-hover:text-gray-300 transition-transform duration-200 group-hover:scale-110"
        />
      </a>
    </div>
  </div>
);

export default SocialLinks;