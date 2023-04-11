import React from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { BsArrowRight, BsClockFill } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { useTheme } from "../layout";
import format from "date-fns/format";
import { Icon } from "../util/icon";

export const Posts = ({ data }) => {
  const theme = useTheme();
  const titleColorClasses = {
    blue: "group-hover:text-blue-600 dark:group-hover:text-blue-300",
    teal: "group-hover:text-teal-600 dark:group-hover:text-teal-300",
    green: "group-hover:text-green-600 dark:group-hover:text-green-300",
    red: "group-hover:text-red-600 dark:group-hover:text-red-300",
    pink: "group-hover:text-pink-600 dark:group-hover:text-pink-300",
    purple: "group-hover:text-purple-600 dark:group-hover:text-purple-300",
    orange: "group-hover:text-orange-600 dark:group-hover:text-orange-300",
    yellow: "group-hover:text-yellow-500 dark:group-hover:text-yellow-300",
  };
  const iconClasses = "inline-block -mt-1 w-auto opacity-70";
  const iconColorClasses = {
    blue: "text-blue-500 dark:text-blue-400",
    teal: "text-teal-500 dark:text-teal-400",
    green: "text-green-500 dark:text-green-400",
    red: "text-red-500 dark:text-red-400",
    pink: "text-pink-500 dark:text-pink-400",
    purple: "text-purple-500 dark:text-purple-400",
    orange: "text-orange-500 dark:text-orange-400",
    yellow: "text-yellow-500 dark:text-yellow-400",
  };

  // Temporary sorting post by newest date method (until I can figure out how to do it in Tina)
  data.sort((a, b) => {
    const dateA = new Date(a.node.date);
    const dateB = new Date(b.node.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <>
      {data.map((postData) => {
        const post = postData.node;
        const date = new Date(post.date);
        let formattedDate = "";
        if (!isNaN(date.getTime())) {
          formattedDate = format(date, "MMM dd, yyyy");
        }
        console.log(post);
        return (
          <Link
            key={post._sys.filename}
            href={`/posts/` + post._sys.filename}
            passHref
          >
            <a
              key={post.id}
              className="group block px-6 sm:px-8 md:px-10 py-2 mb-2 last:mb-0 bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-1000 dark:to-gray-1000 rounded-md shadow-sm transition-all duration-150 ease-out hover:shadow-md hover:to-gray-50 dark:hover:to-gray-800"
            >
              <h4
                className={`text-gray-700 dark:text-white text-md lg:text-xl font-semibold title-font mb-2 transition-all duration-150 ease-out ${
                  titleColorClasses[theme.color]
                }`}
              >
                {post._values.title}{" "}
                {/* <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <BsArrowRight className="inline-block h-8 -mt-1 ml-1 w-auto opacity-70" />
                </span> */}
                <div className="flex items-center">
                  {/* <div className="flex-shrink-0 mr-2">
                    <img
                      className="h-10 w-10 object-cover rounded-full shadow-sm"
                      src={post?.author?.avatar}
                      alt={post?.author?.name}
                    />
                  </div>
                  <p className="text-base font-medium text-gray-600 group-hover:text-gray-800 dark:text-gray-200 dark:group-hover:text-white">
                    {post?.author?.name}
                  </p> */}
                  {formattedDate !== "" && (
                    <>
                      <span className="font-bold text-sm text-gray-200 dark:text-gray-500 mr-2">
                        <BsClockFill className={`${iconClasses} ${iconColorClasses[theme.color]}`} />
                      </span>
                      <p className="text-sm text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-150">
                        {formattedDate}
                      </p>
                    </>
                  )}
                </div>
              </h4>
              <div className=" dark:prose-dark w-full max-w-none mb-4 opacity-70">
                <TinaMarkdown content={post._values.excerpt} />
              </div>
              {post._values.tags && (
                <div className="flex flex-wrap -m-1 mb-2">
                  {post._values.tags.map((tag) => (
                    <div key={tag} className="p-1">
                      <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-200 mr-1">
                        #{tag}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </a>
          </Link>
        );
      })}
    </>
  );
};
