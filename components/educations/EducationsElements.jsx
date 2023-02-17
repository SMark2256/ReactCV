import { motion } from 'framer-motion';
import IconChanger from '../../utility/IconChanger.jsx';

const EducationElements = ({ education }) => {
    return (
        <div className="relative cursor-pointer border-cyan-900 bg-cyan-900/30 duration-200 hover:bg-teal-600/30 hover:border-teal-500/50 hover:shadow-teal-500/40 shadow-xl shadow-black-500/80 rounded-3xl w-96 h-52 mb-10">
            <h1 className=" text-2xl justify-end font-bold bg-teal-500/30 w-full rounded-t-3xl md:mb-0 mb-3">
                {education.start} <strong>-</strong> {education.end}
            </h1>
            <div className="align-middle items-center justify-center">
                <div className="text-center">
                    <a
                        className="font-bold text-base w-auto no-underline hover:underline hover:text-teal-300"
                        href={education.url}
                        rel="noreferrer"
                        target="_blank">
                        {education.school}
                    </a>
                    <p className="text-base font-semibold text-slate-400">{education.level}</p>
                </div>
                {education.techonology && (
                    <>
                        <p className="border-t-2 border-slate-500 mx-auto w-5/6 md:mt-3 mt-2"></p>
                        <div className="text-lg absolute left-10 right-10 bottom-8">
                            <p className="hidden font-bold">Techológiák</p>
                            <div className="text-5xl font-semibold text-slate-200 align-middle rounded-xl dark:text-slate-900 inline-flex space-x-2.5 ">
                                <IconChanger icon={education.techonology} />
                            </div>
                        </div>
                    </>
                )}
                <div className="absolute text-sm text-slate-400 bottom-2 right-5">
                    <h2 className="font-semibold">{education.location}</h2>
                </div>
            </div>
        </div>
    );
};

export default EducationElements;
