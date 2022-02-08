import React from 'react'
import { blogs } from '../../../data'
import { motion } from 'framer-motion'
import BlogsItem from './BlogsItem'
const Blogs = () => {
  return (
    <motion.div class="flex flex-wrap place-content-around  ">
      {blogs.map((item) => (
        <BlogsItem item={item} key={item.id} />
      ))}
    </motion.div>
  )
}

export default Blogs
