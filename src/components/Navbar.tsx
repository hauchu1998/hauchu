import React, { useState } from "react";
import resume from '../assets/resume.pdf';

interface NavbarProps {

}

export default function Navbar(props: NavbarProps) {
    const [curSection, setCurSection] = useState<string>("intro");
    return (
        <div className="w-full py-3 flex justify-center items-center fixed top-0 bg-black text-xs z-30">
            <ul className="flex gap-5 text-white font-bold">
                <li className={`${curSection === "intro" ? "text-orange-500" : "text-white"}`}>
                    <a href="#intro" className="tracking-wider" onClick={() => setCurSection("intro")}>INTRO</a>
                </li>
                <li className={`${curSection === "edu" ? "text-orange-500" : "text-white"}`}>
                    <a href="#edu" onClick={() => setCurSection("edu")}>EDUCATION</a>
                </li>
                <li className={`${curSection === "work" ? "text-orange-500" : "text-white"}`}>
                    <a href="#work" onClick={() => setCurSection("work")}>WORK</a>
                </li>
                <li className={`${curSection === "publish" ? "text-orange-500" : "text-white"}`}>
                    <a href="#publish" onClick={() => setCurSection("publish")}>PUBLICATION</a>
                </li>
                <li className={`${curSection === "skills" ? "text-orange-500" : "text-white"}`}>
                    <a href="#skills" onClick={() => setCurSection("skills")}>SKILLS</a>
                </li>
                <li className={`${curSection === "projects" ? "text-orange-500" : "text-white"}`}>
                    <a href="#projects" onClick={() => setCurSection("projects")}>PROJECTS</a>
                </li>
            </ul>
            <div className="absolute top-3 right-8">
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