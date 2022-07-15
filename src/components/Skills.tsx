import React from 'react';

export default function Skills() {
    return (
        <div id="skills" className="w-full bg-neutral-300 flex flex-col justify-center items-center">
            <p className="mt-8 w-full font-bold text-xl md:text-3xl text-center underline underline-offset-2">Skills</p>
            <div className="mt-10 w-full lg:w-3/4 px-10 lg:px-0 grid grid-cols-1 md:grid-cols-3 justify-center gap-5 lg:gap-3">
                <div className='border border-black h-full px-10 py-5'>
                    <p className='font-bold italic text-lg'>Full Stack</p>
                    <div>
                        <p className='text-left italic text-gray-600'>HTML / CSS / Javascript</p>
                        <div className="w-full bg-neutral-300 border border-black">
                            <div className="w-[65%] bg-black text-xs font-medium text-white text-center p-0.5 leading-none "> 65%</div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-left italic text-gray-600'>React</p>
                        <div className="w-full bg-neutral-300 border border-black">
                            <div className="w-[80%] bg-black text-xs font-medium text-white text-center p-0.5 leading-none "> 80%</div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-left italic text-gray-600'>Typescript</p>
                        <div className="w-full bg-neutral-300 border border-black">
                            <div className="w-[75%] bg-black text-xs font-medium text-white text-center p-0.5 leading-none "> 75%</div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <p className='italic font-medium'>Packages & Tools</p>
                        <p className='text-sm text-gray-600'>Vite/ Tailwinds CSS/ Ether.js/ Web3.js</p>
                    </div>
                </div>

                <div className='border border-black h-full px-10 py-5'>
                    <p className='font-bold italic text-lg'>Artificial Intelligence</p>
                    <div>
                        <p className='text-left italic text-gray-600'>Computer Vision</p>
                        <div className="w-full bg-neutral-300 border border-black">
                            <div className="w-[75%] bg-black text-xs font-medium text-white text-center p-0.5 leading-none "> 75%</div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-left italic text-gray-600'>Machine Learning</p>
                        <div className="w-full bg-neutral-300 border border-black">
                            <div className="w-[60%] bg-black text-xs font-medium text-white text-center p-0.5 leading-none "> 60%</div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-left italic text-gray-600'>Deep Learning</p>
                        <div className="w-full bg-neutral-300 border border-black">
                            <div className="w-[70%] bg-black text-xs font-medium text-white text-center p-0.5 leading-none "> 70%</div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <p className='italic font-medium'>Packages & Tools</p>
                        <p className='text-sm text-gray-600'>OpenCV, Pytorch, Tensorflow</p>
                    </div>
                </div>

                <div className='border border-black h-full px-10 py-5'>
                    <p className='font-bold italic text-lg'>Programming Language</p>
                    <div>
                        <p className='text-left italic text-gray-600'>C/C++</p>
                        <div className="w-full bg-neutral-300 border border-black">
                            <div className="w-[70%] bg-black text-xs font-medium text-white text-center p-0.5 leading-none "> 70%</div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-left italic text-gray-600'>Python</p>
                        <div className="w-full bg-neutral-300 border border-black">
                            <div className="w-[85%] bg-black text-xs font-medium text-white text-center p-0.5 leading-none "> 85%</div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-left italic text-gray-600'>Java</p>
                        <div className="w-full bg-neutral-300 border border-black">
                            <div className="w-[45%] bg-black text-xs font-medium text-white text-center p-0.5 leading-none "> 45%</div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-left italic text-gray-600'>C#</p>
                        <div className="w-full bg-neutral-300 border border-black">
                            <div className="w-[50%] bg-black text-xs font-medium text-white text-center p-0.5 leading-none "> 50%</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full h-[50px]"></div>
        </div>
    );
}