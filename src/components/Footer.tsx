import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-around border border-gray-300 rounded-xl py-3">
      <p className="text-xl font-mono bg-gradient-to-r from-blue-600 via-red-300 to-indigo-400 inline-block text-transparent bg-clip-text">
        E-Commerce site
      </p>
      <div className="flex  gap-5">
        <a href="https://github.com/Sudhakar961612" target="_blank">
          <GitHubLogoIcon width={30} height={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/sudhakar-pandey-929638188/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <LinkedInLogoIcon width={30} height={30} />
        </a>
      </div>
      <p>Made with ❤️ by Sudhakar</p>
    </div>
  );
};

export default Footer;
