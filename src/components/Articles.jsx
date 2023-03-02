/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import articlesLink from "./../assets/articlesLink";

const Articles = () => {
  return (
    <div className=" backdrop-blur-lg">
      <h3 className="pt-5 text-3xl text-center mb-4">My Articles</h3>
      <ul role="list" className="border border-slate-300 p-5 rounded-lg divide-y divide-gray-200">
        {articlesLink.map((article, idx) => (
          <li key={idx} className="py-4">
            <div className="flex space-x-3">
              <div className="flex-1 space-y-1">
                <a href={article.blogLink} target="_blank" rel="noreferrer">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">{article.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    {article.shortDescription}
                  </p>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
