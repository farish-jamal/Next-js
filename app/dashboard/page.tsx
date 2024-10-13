import Banner from '@/components/Banner'
import BlogCard from '@/components/BlogCard'
import Navbar from '@/components/Navbar'
import React from 'react'
import articles from "@/dumps/test"

const page:React.FC = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <BlogCard heading='Treading now' articles={articles} />
    <BlogCard heading='Top Of the day' articles={articles} />
    <BlogCard heading='Featured now' articles={articles} />
    <BlogCard heading='Stocks today' articles={articles} />
    </>
  )
}

export default page