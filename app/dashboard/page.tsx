"use client"
import React, { useEffect, useState } from 'react';
import Banner from '@/components/Banner';
import BlogCard from '@/components/BlogCard';
import Navbar from '@/components/Navbar';

interface Article {
  _id: string;
  title: string;
  description: string;
}

const Page: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/post');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch articles');
        }

        setArticles(data.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <BlogCard heading="Trending now" articles={articles} />
          <BlogCard heading="Top Of the day" articles={articles} />
          <BlogCard heading="Featured now" articles={articles} />
          <BlogCard heading="Stocks today" articles={articles} />
        </>
      )}
    </>
  );
};

export default Page;
