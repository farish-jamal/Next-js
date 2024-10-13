import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

type ArticleType = {
  imageUrl: string,
  title: string,
  description: string,
}

type BlogCardProps = {
  heading: string,
  articles: Array<ArticleType>
}

const BlogCard: React.FC<BlogCardProps> = ({heading, articles}) => {
  return (
    <div className="px-32 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{heading}</h2>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white">
            <Image
              src={article.imageUrl}
              width={300}
              height={300}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{article.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
