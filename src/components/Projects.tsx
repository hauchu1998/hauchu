import React, { useState, useReducer, useMemo } from "react";
import projects from '../assets/projects.json';
import pubPng from '../assets/CVPR-W.png';
import { RiGlobalLine } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { FaGitlab } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

interface ProjectInfo {
    title: string,
    category: string,
    duration: string,
    tools: string[],
    description: string,
    images: string[],
    url: string,
    github: string,
    gitlab: string
}

interface ModalProps {
    project: ProjectInfo,
    setShow: Function,
}

interface ProjectProps {
    index: number,
    project: ProjectInfo,
    setShow: Function,
    setIndex: Function,
}

interface SelectedProjects {
    projects: ProjectInfo[]
}
interface Action {
    type: string,
}

const initialState = { projects: projects }
function reducer(state: SelectedProjects, action: Action) {
    switch (action.type) {
        case "all":
            var tempProjects = projects;
            break;
        case "CV":
            var tempProjects = projects.filter(order => order.category == "CV");
            break;
        case "front-end":
            var tempProjects = projects.filter(order => order.category == "front-end");
            break;

        default:
            var tempProjects = projects;
            throw new Error(`category ${action.type} does not exist`);
    }
    return { projects: tempProjects }
}

function ProjectModal(props: ModalProps) {
    const project = props.project;
    const [index, setIndex] = useState(0);

    const getToolsString = () => {
        var tools = project.tools[0];
        for(let i = 1; i < project.tools.length; i++) {
            tools += `, ${project.tools[i]}`
        }
        return tools
    }

    const handleNextClick = () => {
        if (index < project.images.length - 1) {
            setIndex(prev => prev + 1);
        }
    }

    const handlePrevClick = () => {
        if (index > 0) {
            setIndex(prev => prev - 1);
        }
    }

    return (
        <div 
            className="max-h-[80%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white modal-content overflow-y-scroll py-5 px-10"
            onClick={(e) => {e.stopPropagation()}}
        >
            <button className="absolute top-3 right-2 z-30 text-3xl font-bold text-gray-400" onClick={() => props.setShow(false)}><AiOutlineClose /></button>
            <div className="flex flex-col">
                <div className="relative w-full flex justify-center border-r border-gray-600">
                    <img src={project.images[index]} className="object-cover" />
                    <button className="absolute -left-8 top-1/2 text-gray-400 text-3xl" onClick={handlePrevClick}><AiOutlineLeft /></button>
                    <button className="absolute -right-8 top-1/2 text-gray-400 text-3xl" onClick={handleNextClick}><AiOutlineRight /></button>
                </div>

                <div className="w-full py-2 space-y-2">
                <p className="text-left font-bold text-sm">{project.title}</p>
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-5">
                        <p className="text-xs font-semibold text-gray-600 text-left">{getToolsString()}</p>
                        <p className="text-xs italic text-gray-600 text-left">{project.duration}</p>
                    </div>

                    <div className="flex gap-3">
                        <a
                            href={project.url}
                            className={`${project.url ? "block" : "hidden"} flex justify-start items-center gap-2 py-0.5 px-2 text-xs border-2 border-black rounded-full hover:bg-black hover:text-white`}
                        >
                            <RiGlobalLine /><p className='font-bold'>Website</p>
                        </a>

                        <a
                            href={project.github}
                            className={`${project.github ? "block" : "hidden"} flex justify-start items-center gap-2 py-0.5 px-2 text-xs border-2 border-black rounded-full hover:bg-black hover:text-white`}
                        >
                            <BsGithub /><p className='font-bold'>Code</p>
                        </a>

                        <a
                            href={project.gitlab}
                            className={`${project.gitlab ? "block" : "hidden"} flex justify-start items-center gap-2 py-0.5 px-2 text-xs border-2 border-black rounded-full hover:bg-black hover:text-white`}
                        >
                            <FaGitlab /><p className='font-bold'>Code</p>
                        </a>
                    </div>

                    <div className="text-xs italic text-gray-600 text-left">
                        {project.description}
                    </div>
                    
                </div>
            </div>
        </div>

    );

}

function Project(props: ProjectProps) {
    const project = props.project;
    const showProject = () => {
        props.setShow(true);
        props.setIndex(props.index);
    }
    return (
        <div className="border border-gray-600 shadow-lg rounded-lg flex transition duration-150 ease-in-out hover:scale-[1.03]">
            <div className="w-1/3 flex justify-center border-r border-gray-600 rounded-l-lg">
                <img src={project.images[0]} className="object-cover rounded-l-lg" />
            </div>

            <div className="w-2/3 px-5 py-2 space-y-1">
                <p className="text-left font-bold text-sm">{project.title}</p>
                <p className="text-xs italic text-gray-600 text-left">{project.duration}</p>
                <div className="h-16 text-xs italic text-gray-600 text-left overflow-y-hidden text-ellipsis">
                    {project.description}
                </div>
              
                <div className="flex justify-end text-xs">
                    <button className="underline" onClick={() => showProject()}>click to see more</button>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const [index, setIndex] = useState<number>(0);
    const [show, setShow] = useState<boolean>(false);
    const [category, setCategory] = useState<string>('all');
    const [state, dispatch] = useReducer(reducer, initialState);
    const filterProjects = (cat: string) => {
        setCategory(cat);
        dispatch({ type: cat })
    }

    // const testMemo = useMemo(() => test(state.projects), [state.projects])

    // function test(projects: ProjectInfo[]) {
    //     console.log("project change")
    //     return projects
    // }

    return (
        <div id="projects" className="w-full bg-white flex flex-col justify-center items-center">
            <p className="mt-8 w-full font-bold text-3xl text-center underline underline-offset-2">SELECTED PROJECTS</p>
            <div className="mt-5 w-3/5">
                <div className="flex gap-3 font-semibold">
                    <button
                        className={`${category === "all" ? "bg-black text-white" : "text-black"} min-w-[4rem] text-center mt-2 py-0.5 px-2 text-xs border-2 border-black rounded-full hover:bg-black hover:text-white`}
                        onClick={() => filterProjects('all')}
                    >
                        All
                    </button>
                    <button
                        className={`${category === "web" ? "bg-black text-white" : "text-black"} min-w-[4rem] text-center mt-2 py-0.5 px-2 text-xs border-2 border-black rounded-full hover:bg-black hover:text-white`}
                        onClick={() => filterProjects('front-end')}
                    >
                        Web3.0 (Front-End)
                    </button>
                    <button
                        className={`${category === "cv" ? "bg-black text-white" : "text-black"} min-w-[4rem] text-center mt-2 py-0.5 px-2 text-xs border-2 border-black rounded-full hover:bg-black hover:text-white`}
                        onClick={() => filterProjects('CV')}
                    >
                        Computer Vision
                    </button>
                </div>
            </div>
            <div className="mt-5 w-[90%] grid grid-cols-2 gap-5 justify-center">
                {
                    state.projects.map((project, index) => {
                        return <Project key={project.title} index={index} project={project} setShow={setShow} setIndex={setIndex} />
                    })
                }
            </div>
            <div className={`${show ? "block" : "hidden"} fixed w-full h-screen bg-black bg-opacity-70 modal-backdrop z-50`} onClick={() => setShow(false)}>
                <ProjectModal project={state.projects[index]} setShow={setShow} />
            </div>
            <div className="w-full h-[50px]"></div>
        </div>
    );
}