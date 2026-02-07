import { socials } from '@/data/socials';
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { instagram, twitter, github, youtube } = socials;
  
  return (
    <footer className="py-20 border-t border-[#334155] mt-20">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">MVK<span className="text-cta">.</span>DEV</h3>
          <p className="text-gray-400 text-sm max-w-xs">
            Building 100 apps and sharing the journey. Join me as I build the future.
          </p>
        </div>

        <div className="flex gap-6 items-center">
          <a href={github.url} target="_blank" className="text-gray-400 hover:text-white transition-colors text-2xl">
            <FaGithub />
          </a>
          <a href={twitter.url} target="_blank" className="text-gray-400 hover:text-white transition-colors text-2xl">
            <FaTwitter />
          </a>
          <a href={instagram.url} target="_blank" className="text-gray-400 hover:text-white transition-colors text-2xl">
            <FaInstagram />
          </a>
          <a href={youtube.url} target="_blank" className="text-gray-400 hover:text-white transition-colors text-2xl">
            <FaYoutube />
          </a>
        </div>
      </div>
      
      <div className="mt-12 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} MVK Dev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;