import React from 'react'
import Blogs from '../Blogs/Blogs'
// import MidText from '../MidText/MidText'

const MidCard = () => {
  // const [post, setPost] = useState([])
  // var options = {
  //   method: 'GET',
  //   url: 'https://yummly2.p.rapidapi.com/feeds/list',
  //   params: { limit: '5', start: '0', tag: 'list.recipe.popular' },
  //   headers: {
  //     'x-rapidapi-host': 'yummly2.p.rapidapi.com',
  //     'x-rapidapi-key': '4370470604msh3f176b397b35c82p17a945jsne17851935936',
  //   },
  // }
  // useEffect(() => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       // console.log(response.data)
  //       setPost(response.data.feed)
  //     })
  //     .catch(function (error) {
  //       console.error(error)
  //     })
  // })
  return (
    <div className=" ">
      <Blogs />
    </div>
  )
}

export default MidCard
