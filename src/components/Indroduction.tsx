import React from "react";
import cornellTechJpg from '../assets/cornell_tech.jpg';
import myPic from '../assets/myprofilepic.jpg';
import { FaFacebookSquare, FaLinkedin, FaGitlab } from 'react-icons/fa';
import { BsInstagram, BsTwitter, BsSkype, BsGithub } from 'react-icons/bs';

export interface IntroProps {

}

export default function Intro(props: IntroProps) {
    return (
        <div id="intro" className="w-full h-screen min-h-[500px] bg-black flex flex-col justify-center gap-12 lg:gap-0 lg:grid lg:grid-cols-2">
            <div className="flex justify-center items-center">
                <img src={myPic} className="rounded-full w-1/2 md:w-2/5 lg:w-3/5" />
            </div>
            <div className="flex flex-col items-center justify-center w-full lg:w-4/5 px-10 md:px-32 lg:px-0 space-y-8">
                <p className="text-xl md:text-4xl text-white">Hi, I am Hau Chu! </p>
                <p className="mt-3 text-white w-full text-sm md:text-lg">
                    You can also called me Howard. I'm also a student in the Master of Information Science - Urban Tech at Cornell Tech, recently developing Web3.0 DApp to bring the blockchain technology to the urban society.
                </p>
                <p className="mt-3 text-white w-full text-sm md:text-lg">
                    My research interests lie in <span className="text-orange-500 font-bold italic">Blockchain</span>, <span className="text-orange-500 font-bold italic">Web3.0</span>, <span className="text-orange-500 font-bold italic">Urban Technology</span> and <span className="text-orange-500 font-bold italic">Computer Vision</span>
                </p>

                <div className="w-4/5 border-b-2 border-gray-600"></div>
                <div className="grid grid-cols-7 gap-3 md:gap-8 text-2xl md:text-3xl lg:text-4xl text-white">
                    <a href="https://www.facebook.com/hellodehong/" className="transition duration-150 ease-in-out hover:scale-125"><FaFacebookSquare /></a>
                    <a href="https://www.instagram.com/hauzzz___/" className="transition duration-150 ease-in-out hover:scale-125"><BsInstagram /></a>
                    <a href="" className="transition duration-150 ease-in-out hover:scale-125"><BsTwitter /></a>
                    <a href="" className="transition duration-150 ease-in-out hover:scale-125"><FaLinkedin /></a>
                    <a href="" className="transition duration-150 ease-in-out hover:scale-125"><BsSkype /></a>
                    <a href="https://github.com/hauchu1998" className="transition duration-150 ease-in-out hover:scale-125"><BsGithub /></a>
                    <a href="https://gitlab.com/hauchu1998" className="transition duration-150 ease-in-out hover:scale-125"><FaGitlab /></a>
                </div>
                {/* <div className="w-4/5 flex">
                    <button type="button" className="bg-gray-300 rounded-lg px-2 py-1 text-sm font-bold ring-2 ring-offset-2 ring-gray-300">Download Resume</button>
                </div> */}
            </div>
        </div>
    );
}