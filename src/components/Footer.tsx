import React from "react";
// import { FaFacebookSquare, FaLinkedin, FaGitlab } from 'react-icons/fa';
// import { BsInstagram, BsTwitter, BsSkype, BsGithub } from 'react-icons/bs';

export default function Footer() {
    return (
        <div className="w-full py-5 bg-black flex justify-center">
            <div className="w-3/4 flex justify-between items-center text-sm text-white">
                <p>© 2022, Hau Chu | Powered by Hau Chu</p>
                {/* <div className="grid grid-cols-7 gap-4 text-lg">
                    <a href="https://www.facebook.com/hellodehong/"><FaFacebookSquare /></a>
                    <a href="https://www.instagram.com/hauzzz___/"><BsInstagram /></a>
                    <BsTwitter />
                    <FaLinkedin />
                    <BsSkype />
                    <a href="https://github.com/hauchu1998"><BsGithub /></a>
                    <a href="https://gitlab.com/hauchu1998"><FaGitlab /></a>
                </div> */}
                <div>
                    <p className="italic">Phone: (+886) 932-297-232</p>
                    <p className="italic">Email: hchoward1998@gmail.com</p>
                </div>
            </div>
        </div>
    )
}