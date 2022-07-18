import React from 'react';
import pubPng from '../assets/CVPR-W.png';
import { RiFilePaper2Fill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';

export default function Publication() {
    return (
        <div id="publish" className='w-full flex flex-col justify-center items-center'>
            <p className="mt-8 w-full font-bold text-xl md:text-3xl text-center underline underline-offset-2">PUBLICATION</p>
            <div className="mt-8 w-4/5 lg:w-3/5">
                <ul className="w-full">
                    <li className='w-full grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-8 items-center'>
                        <div className='w-full justify-center'>
                            <img src={pubPng} alt="project images" />
                        </div>

                        <div className='col-span-2 flex flex-col items-start'>
                            <p className='font-bold text-gray-600 underline underline-offset-1 text-left text-sm md:text-base'>Part-aware Measurement for Robust Multi-View Multi-Human 3D Pose Estimation and Tracking</p>
                            <p className='mt-1 text-left text-xs md:text-sm italic tracking-wide'>
                                <span className='font-bold'>Hau Chu</span>
                                , Jia-Hong Lee, Yao-Chih Lee, Ching-Hsien Hsu, Jia-Da Li,
                                <a href="https://imp.iis.sinica.edu.tw/">Chu-Song Chen</a>
                            </p>
                            <p className='mt-1 text-left text-xs md:text-sm italic'>CVPR Workshop 2021</p>
                            <div className='flex gap-3'>
                                <a
                                    href='https://openaccess.thecvf.com/content/CVPR2021W/AMFG/papers/Chu_Part-Aware_Measurement_for_Robust_Multi-View_Multi-Human_3D_Pose_Estimation_and_CVPRW_2021_paper.pdf'
                                    className='mt-2 flex justify-start items-center gap-2 py-0.5 px-2 text-xs border-2 border-black rounded-full hover:bg-black hover:text-white'
                                >
                                    <RiFilePaper2Fill /><p className='font-bold'>Paper</p>
                                </a>

                                <a
                                    href='https://github.com/B10532021/Part-Aware_Measurement_for_3D_Pose_Estimation_and_Tracking'
                                    className='mt-2 flex justify-start items-center gap-2 py-0.5 px-2 text-xs border-2 border-black rounded-full hover:bg-black hover:text-white'
                                >
                                    <BsGithub /><p className='font-bold'>Code</p>
                                </a>
                            </div>

                        </div>
                    </li>
                </ul>
            </div>
            <div className="w-full h-[50px]"></div>
        </div>
    );
}