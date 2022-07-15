import React, { useState } from "react";
import works from '../assets/works.json';
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

interface WorkInfo {
    company: string,
    link?: string,
    title: string,
    location: string,
    duration: string,
    descriptions: string[],
    advisor?: string,
}

interface WorkProps {
    work: WorkInfo
}

function Work(props: WorkProps) {
    const work = props.work;
    const [show, setShow] = useState<boolean>(false);
    return (
        <li className="relative border-l-2 border-gray-600 py-5 text-left">
            <div className="absolute mt-[0.425rem] w-3 h-3 bg-gray-600 rounded-full -left-[0.425rem] ring-2 ring-offset-2 ring-gray-600"></div>
            <div className="pl-10 ">
                <div className="flex justify-between items-center align-baseline">
                    {work.link?
                        <a href={work.link} className="text-sm md:text-lg font-semibold">{work.company}</a>
                        :
                        <p className="text-sm md:text-lg font-semibold">{work.company}</p>
                    }
                    <p className="text-[0.6rem] md:text-sm italic">{work.location}</p>
                </div>
                <div className="flex justify-between text-[0.6rem] md:text-sm italic text-gray-600">
                    <p>{work.title}</p>
                    <p>{work.duration}</p>
                </div>
                <div className={`${work.descriptions.length > 0 ? "block" : "hidden"} relative mt-4 text-xs md:text-sm text-gray-600 z-10`}>
                    <div className={`${show ? "block" : "h-[50px] overflow-y-hidden"} flex flex-col items-start`}>
                        <ul className="list-disc">
                            {
                                work.descriptions.map((des, index) => {
                                    return <li key={`des_${index}`} className="text-left">{des}</li>
                                })
                            }
                        </ul>
                        <div className={`${work.advisor? "block": "hidden"} mt-4 text-left`}>
                            Advised by {work.advisor}
                        </div>
                    </div>
                    <div className={`${show? "hidden": "block"} fade`}></div>
                </div>
                <div className={`${work.descriptions.length > 0 ? "block" : "hidden"} relative flex justify-end text-xs md:text-sm z-20`}>
                    <button className={`${show ? "hidden" : "block"} md:-mt-3 flex items-center gap-1 hover:underline`} onClick={() => setShow(true)}>
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

export default function Works() {
    return (
        <div id="work" className="w-full bg-neutral-300 flex flex-col justify-center items-center">
            <p className="mt-8 w-full font-bold text-xl md:text-3xl text-center underline underline-offset-2">WORK EXPERIENCE</p>
            <div className="mt-5 w-full md:w-4/5 lg:w-3/5 px-8 md:px-0">
                <ul className="w-full">
                    {works.map(work => {
                        return <Work key={work.company+"_"+work.duration} work={work} />
                    })}
                </ul>
            </div>
            <div className="w-full h-[50px]"></div>
        </div>
    );
}