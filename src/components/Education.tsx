import React, { useState } from "react";
import schools from '../assets/schools.json';
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

interface EducationProps {

}

interface SchoolInfo {
    name: string,
    major: string,
    location: string,
    duration: string,
    GPA: string,
    descriptions: string[],
    advisor: string,
}

interface SchoolProps {
    school: SchoolInfo
}

function School(props: SchoolProps) {
    const school = props.school;
    const [show, setShow] = useState<boolean>(false);
    return (
        <li className="relative border-l-2 border-gray-600 py-5">
            <div className="absolute mt-[0.425rem] w-3 h-3 bg-gray-600 rounded-full -left-[0.425rem] ring-2 ring-offset-2 ring-gray-600"></div>
            <div className="pl-10 ">
                <div className="flex justify-between items-center align-baseline">
                    <p className="text-lg font-semibold">{school.name}</p>
                    <p className="text-sm italic">{school.location}</p>
                </div>
                <div className="flex justify-between text-sm italic text-gray-600">
                    <p>{school.major}</p>
                    <p>{school.duration}</p>
                </div>
                <div className="mt-4 text-left text-sm text-gray-600">
                    GPA: {school.GPA}
                </div>
                <div className={`${school.descriptions.length > 0 ? "block" : "hidden"} mt-4 text-sm text-gray-600`}>
                    <div className={`${show ? "block" : "hidden"} flex flex-col items-start`}>
                        <ul className="list-disc">
                            {
                                school.descriptions.map((des, index) => {
                                    return <li key={`des_${index}`} className="text-left">{des}</li>
                                })
                            }
                        </ul>
                        <div className="mt-4 text-left">
                            Advised by {school.advisor}
                        </div>
                    </div>
                </div>
                <div className={`${school.descriptions.length > 0 ? "block" : "hidden"} flex justify-end text-sm`}>
                    <button className={`${show ? "hidden" : "block"} flex items-center gap-1 hover:underline`} onClick={() => setShow(true)}>
                        <span className="text-base"><MdExpandMore /></span> 
                        <span>view more</span>
                    </button>
                    <button className={`${show ? "block" : "hidden"} flex items-center gap-1 hover:underline`} onClick={() => setShow(false)}>
                        <span className="text-base"><MdExpandLess /></span> 
                        <span>view less</span>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default function Education() {
    return (
        <div id="edu" className="w-full bg-white flex flex-col justify-center items-center">
            <p className="mt-8 w-full font-bold text-3xl text-center underline underline-offset-2">EDUCATION</p>
            <div className="mt-5 w-3/5">
                <ul className="w-full">
                    {schools.map(school => {
                        return <School key={school.name} school={school} />
                    })}
                </ul>
            </div>
            <div className="w-full h-[50px]"></div>
        </div>
    );
}