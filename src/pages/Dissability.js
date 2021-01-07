import React, { useEffect } from 'react'
import axios from 'axios'

async function getCourses() {
  // const data = axios.get("https://devcamper-marlon.herokuapp.com/api/v1/auth/login")
  const data = await axios.post(
    'https://devcamper-marlon.herokuapp.com/api/v1/auth/login',
    {
      email: 'user@gmail.com',
      password: '123456',
    },
  )
  console.log(data)
}
const Dissability = () => {
  useEffect(() => {
    getCourses()
  }, [])
  return <div>dissability page</div>
}

export default Dissability
