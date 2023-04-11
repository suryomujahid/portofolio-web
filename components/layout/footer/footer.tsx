import React from "react";
import Link from "next/link";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "../../util/container";
import { RawRenderer } from "./rawRenderer";
import { useTheme } from "..";
import { Icon } from "../../util/icon";

export const Footer = ({ data, icon, rawData }) => {
  const theme = useTheme();
  const socialIconClasses = "h-7 w-auto";
  const socialIconColorClasses = {
    blue: "text-blue-500 dark:text-blue-400 hover:text-blue-300",
    teal: "text-teal-500 dark:text-teal-400 hover:text-teal-300",
    green: "text-green-500 dark:text-green-400 hover:text-green-300",
    red: "text-red-500 dark:text-red-400 hover:text-red-300",
    pink: "text-pink-500 dark:text-pink-400 hover:text-pink-300",
    purple: "text-purple-500 dark:text-purple-400 hover:text-purple-300",
    orange: "text-orange-500 dark:text-orange-400 hover:text-orange-300",
    yellow: "text-yellow-500 dark:text-yellow-400 hover:text-yellow-300",
    primary: "text-white opacity-80 hover:opacity-100",
  };
  const copyrightClasses = "text-sm opacity-80";
  const copyrightColor = {
    default:
      "text-black dark:text-white from-gray-50 to-white dark:from-dark dark:to-dark",
    primary: {
      blue: "text-white from-blue-300 to-blue-500",
      teal: "text-white from-teal-400 to-teal-500",
      green: "text-white from-green-400 to-green-500",
      red: "text-white from-red-400 to-red-500",
      pink: "text-white from-pink-400 to-pink-500",
      purple: "text-white from-purple-400 to-purple-500",
      orange: "text-white from-orange-400 to-orange-500",
      yellow: "text-white from-yellow-400 to-yellow-500",
    },
  };

  const copyrightColorCss =
    data.color === "primary"
      ? copyrightColor.primary[theme.color]
      : copyrightColor.default;

  const footerColor = {
    default:
      "text-gray-800 from-white to-gray-50 dark:from-dark dark:to-dark",
    primary: {
      blue: "text-white from-blue-500 to-blue-700",
      teal: "text-white from-teal-500 to-teal-600",
      green: "text-white from-green-500 to-green-600",
      red: "text-white from-red-500 to-red-600",
      pink: "text-white from-pink-500 to-pink-600",
      purple: "text-white from-purple-500 to-purple-600",
      orange: "text-white from-orange-500 to-orange-600",
      yellow: "text-white from-yellow-500 to-yellow-600",
    },
  };

  const footerColorCss =
    data.color === "primary"
      ? footerColor.primary[theme.color]
      : footerColor.default;


  return (
    <footer className={`bg-gradient-to-br ${footerColorCss}`}>
      <Container size="custom" width="small" className="relative py-2">
        <div className="flex justify-between items-center gap-6 flex-wrap">
          <div className="flex flex-col gap-2">
            <p className={`${copyrightClasses} ${copyrightColorCss}`}>
              &copy; {new Date().getFullYear()} Suryo Mujahid | All rights reserved
            </p>
          </div>
          <div className="flex gap-4 items-center">
            {data.social && data.social.email && (
              <a
                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                href={`mailto:${data.social.email}`}
                target="_blank"
              >
                <FaEnvelope
                  className={`${socialIconClasses} ${
                    socialIconColorClasses[
                      data.color === "primary" ? "primary" : theme.color
                    ]
                  }`}
                />
              </a>
            )}
            {data.social && data.social.linkedin && (
              <a
                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                href={data.social.linkedin}
                target="_blank"
              >
                <FaLinkedin
                  className={`${socialIconClasses} ${
                    socialIconColorClasses[
                      data.color === "primary" ? "primary" : theme.color
                    ]
                  }`}
                />
              </a>
            )}
            {data.social && data.social.discord && (
              <a
                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                href={data.social.discord}
                target="_blank"
              >
                <FaDiscord
                  className={`${socialIconClasses} ${
                    socialIconColorClasses[
                      data.color === "primary" ? "primary" : theme.color
                    ]
                  }`}
                />
              </a>
            )}
            {data.social && data.social.github && (
              <a
                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                href={data.social.github}
                target="_blank"
              >
                <FaGithub
                  className={`${socialIconClasses} ${
                    socialIconColorClasses[
                      data.color === "primary" ? "primary" : theme.color
                    ]
                  }`}
                />
              </a>
            )}
          </div>
          {/* <RawRenderer parentColor={data.color} rawData={rawData} /> */}
        </div>
        <div
          className={`absolute h-1 bg-gradient-to-r from-transparent ${
            data.color === "primary" ? `via-white` : `via-black dark:via-white`
          } to-transparent top-0 left-4 right-4 opacity-5`}
        ></div>
      </Container>
    </footer>
  );
};
