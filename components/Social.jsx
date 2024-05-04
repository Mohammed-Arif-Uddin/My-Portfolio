"use client";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com/watch?v=Rew98iFupBM&ab_channel=CristianMihai",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/mohammed-arif-uddin-1450611a2/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Mohammed-Arif-Uddin",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/mohammedarifuddinnsu/",
    name: <RiFacebookFill />,
  },
];

const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
