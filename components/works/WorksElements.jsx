import { motion } from 'framer-motion';
import IconChanger from '../../utility/IconChanger';

const WorkElements = ({ work }) => {
    return (
        <div className="relative cursor-pointer inline-flex flex-col border-cyan-900 bg-cyan-900/30 duration-200 hover:bg-teal-700/30 hover:border-teal-500/50 hover:shadow-teal-500/40 shadow-xl shadow-black-500/80 rounded-3xl w-96 md:flex-auto h-52 mb-10">
            <div className="text-2xl inline-flex justify-center font-bold bg-teal-500/30 w-full rounded-t-3xl">
                {work.start} <strong>&nbsp;-&nbsp;</strong>
                {work.end === 'Jelenleg' ? (
                    <motion.div
                        animate={{
                            color: [
                                'rgba(255,255,255, 1)',
                                'rgba(255,255,255, 0.2)',
                                'rgba(255,255,255, 1)',
                            ],
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}>
                        {work.end}
                    </motion.div>
                ) : (
                    work.end
                )}
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold py-7 pb-10 ">{work.position}</h1>
                <div className="absolute bottom-12 text-4xl font-semibold text-slate-200 align-middle rounded-xl dark:text-slate-900 inline-flex space-x-2.5 ">
                    <IconChanger icon={work.techonology} />
                </div>
                <h2 className="absolute bottom-0 right-5 w-auto text-center text-sm text-slate-400 font-semibold pb-2">
                    {work.location}
                </h2>
            </div>
        </div>
    );
};

export default WorkElements;
