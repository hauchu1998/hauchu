import React, { useEffect, useState } from "react";
import resume from '../assets/resume.pdf';
import { BsList } from 'react-icons/bs';

interface NavbarProps {

}

export default function Navbar(props: NavbarProps) {
    const [curSection, setCurSection] = useState<string>("intro");
    const [mobile, setMobile] = useState<boolean>(window.matchMedia('(max-width: 768px)').matches);
    const [show, setShow] = useState<boolean>(false);
    // 偵測螢幕大小
	useEffect(() => {
		function isMobile() {
			setMobile(window.matchMedia('(max-width: 767px)').matches)
		}
		window.addEventListener('resize', isMobile);
		return () => {
			window.removeEventListener('resize', isMobile);
		}
	})

    const handleOnClick = (section: string) => {
        setCurSection(section);
        setShow(false)
    }

    return (
        <div className="w-full py-5 lg:py-3 flex justify-center items-center fixed top-0 bg-black text-xs md:text-sm lg:text-xs z-30">
            <button className={`${mobile? "block": "hidden"} absolute left-3 top-3 text-xl text-white`} onClick={() => setShow(!show)}><BsList /></button>
            <ul className={`${mobile && !show? "hidden" : "block"} flex flex-col md:flex-row gap-5 text-white font-bold`}>
                <li className={`${curSection === "intro" ? "text-orange-500" : "text-white"}`}>
                    <a href="#intro" className="tracking-wider" onClick={() => setCurSection("intro")}>INTRO</a>
                </li>
                <li className={`${curSection === "edu" ? "text-orange-500" : "text-white"}`}>
                    <a href="#edu" onClick={() => handleOnClick("edu")}>EDUCATION</a>
                </li>
                <li className={`${curSection === "work" ? "text-orange-500" : "text-white"}`}>
                    <a href="#work" onClick={() => handleOnClick("work")}>WORK</a>
                </li>
                <li className={`${curSection === "publish" ? "text-orange-500" : "text-white"}`}>
                    <a href="#publish" onClick={() => handleOnClick("publish")}>PUBLICATION</a>
                </li>
                <li className={`${curSection === "skills" ? "text-orange-500" : "text-white"}`}>
                    <a href="#skills" onClick={() => handleOnClick("skills")}>SKILLS</a>
                </li>
                <li className={`${curSection === "projects" ? "text-orange-500" : "text-white"}`}>
                    <a href="#projects" onClick={() => handleOnClick("projects")}>PROJECTS</a>
                </li>
            </ul>
            <div className="absolute top-3 md:top-5 lg:top-3 right-3 md:right-8">
                <a 
                    href={resume}
                    className="bg-gray-300 rounded-lg px-2 py-1 text-xs font-bold transition duration-150 ease-in-out hover:scale-110"
                    target="_blank"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
}