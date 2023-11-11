import XLogo from "@/public/icons/XLogo";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="mt-6 flex flex-wrap">
      {[
        {
          icon: <Linkedin size={20} />,
          title: "LinkedIn",
          link: "https://linkedin.com/in/pratv",
        },
        {
          icon: <Github size={20} />,
          title: "GitHub",
          link: "https://github.com/pratv1",
        },
        {
          icon: <XLogo className="h-[20px] w-[20px]" />,
          title: "@pratvar",
          link: "https://x.com/pratvar",
        },
        {
          icon: <Mail size={20} />,
          title: "pratikvar@pm.me",
          link: "mailto:pratikvar@pm.me",
        },
      ].map((el, i) => (
        <a
          key={i}
          className="mb-2 mr-2 flex w-fit items-center space-x-2.5 rounded-full border border-zinc-900 px-3.5 py-2 font-normal no-underline transition-all hover:border-zinc-800 hover:bg-zinc-900 active:bg-zinc-800"
          href={el.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {el.icon || null}
          <span>{el.title}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
