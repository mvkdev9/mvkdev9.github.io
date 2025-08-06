import { socials } from '@/data/socials';
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
      const {instagram, twitter, github, youtube, buymeacoffee} = socials;
  return (
    <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join & Support My Journey</h2>
        <p className="text-gray-600 mb-6">
          Follow, share, or even sponsor me if you like what I&apos;m doing.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href={instagram.url} target="_blank" className="underline">
            <FaInstagram className="inline mr-1" />
          </a>
          <a href={youtube.url} target="_blank" className="underline">
            <FaYoutube className="inline mr-1" />
          </a>
          <a href={twitter.url} target="_blank" className="underline">
            <FaTwitter className="inline mr-1" />
          </a>
           <a href={github.url} target="_blank" className="underline">
            <FaGithub className="inline mr-1" />
          </a>
          <a href={buymeacoffee.url} target="_blank" className="underline">
            Buy Me a Coffee
          </a>
        </div>
      </section>
  );
};

export default Footer;