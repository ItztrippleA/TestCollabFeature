import React from 'react'
import { motion } from 'framer-motion'
// import ReactReadMoreReadLess from 'react-read-more-read-less'

const BlogsItem = ({ item }) => {
  return (
    <motion.div class="mt-8 mx-14  bg-slate-100 rounded-xl dark:bg-slate-800/40 ">
      <img
        class="rounded-t-lg w-96 h-52 md:w-58 h-52 flex place-content-center"
        src={item.img}
        alt="food"
      />
      <hr />
      <div class="font-bold text-white">
        <h2>{item.title}:</h2>

        <h3 className="font-light">{item.desc}</h3>
      </div>
    </motion.div>
  )
}

export default BlogsItem
