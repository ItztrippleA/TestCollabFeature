import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="container">
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="food"
          className="img"
        />
      </div>
      <div>
        <form>
          <input type="text" className="title_input" placeholder="title.." />

          <textarea className="title_input" rows="10" cols="50" />
        </form>
      </div>
    </div>
  )
}

export default Footer
