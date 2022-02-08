import { useState } from 'react'
import axios from 'axios'

export const fetchUrl = (url) => {
  var options = {
    method: 'GET',
    url: 'https://yummly2.p.rapidapi.com/feeds/list',
    params: { limit: '18', start: '0', tag: 'list.recipe.popular' },
    headers: {
      'x-rapidapi-host': 'yummly2.p.rapidapi.com',
      'x-rapidapi-key': '4370470604msh3f176b397b35c82p17a945jsne17851935936',
    },
  }

  axios
    .request(options)
    .then(function (res) {
      const post = res.data
    })
    .catch(function (error) {
      console.error(error)
    })
  return
}
