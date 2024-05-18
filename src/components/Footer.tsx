import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-around border border-gray-300 rounded-xl py-3">
      <p className="text-xl font-mono bg-gradient-to-r from-blue-600 via-red-300 to-indigo-400 inline-block text-transparent bg-clip-text">
        E-Commerce site
      </p>
      <div className="flex  gap-5">
        <a href="" target="_blank">
          <GitHubLogoIcon width={30} height={30} />
        </a>
        <a href="" target="_blank">
          <LinkedInLogoIcon width={30} height={30} />
        </a>
      </div>
      <p>Made with ❤️ by Sudhakar</p>
    </div>
  );
};

export default Footer;
