import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className="flex flex-col text-center bg-blue-950 w-full">
        <h1 className="text-white py-2">For Enquiries contact : help@hpsupport.com</h1>
        <div className="flex text-center justify-center gap-3 pb-3">
            <a href=""><FaInstagram className="text-white"/></a>
            <a href=""><FaTwitter className="text-white"/></a>
            <a href=""><FaFacebook className="text-white"/></a>
        </div>
    </div>
  )
}

export default Contact