import PageMotion from '../components/PageMotion';

const About = () => {
    return (
        <PageMotion>
            <figure className="mt-10 flex flex-col gap-14 w-[95%] bg-slate-900/50 md:w-[50rem] mx-auto rounded-xl p-10 dark:bg-slate-800">
                <section>
                    <h1 className="font-bold text-3xl md:text-5xl underline"> Rólam </h1>
                </section>
                <section>
                    <div className="flex flex-col gap-5 text-sm md:text-xl">
                        <div className="grid grid-cols-5 gap-5">
                            <div className="font-bold text-left md:pl-10">Születtem: </div>
                            <div className="col-span-4"> Zalaegerszegen 1996 márciusában </div>
                        </div>
                        <div className="grid grid-cols-5 gap-10">
                            <div className="font-bold md:col-span-2 text-left md:pl-10">Hobbi:</div>
                            <ul className="col-span-4 flex flex-col text-left md:col-span-3 list-disc list-inside pl-2">
                                <li>Tech</li>
                                <li>Videojáték</li>
                                <li>Zene</li>
                                <li>Zenélés</li>
                                <li>Hobbi Fotózás</li>
                                <li>Túrázás</li>
                                <li>Biciklizés</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </figure>
            {/* <div className="group h-96 w-96 [perspective:1000px]">
                <div className="absolute inset-0">
                    <img
                        src={welcome_HU.image}
                        alt="profile image"
                        className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    />
                </div>
            </div> */}
            {/* <figure className="mt-10 md:flex bg-slate-900 w-[60rem] mx-auto rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <div
                    className={`md:w-[40rem] bg-[url('/mePic2.jpg')] bg-contain bg-no-repeat bg-center`}>
                    <img
                        className="w-24 h-24 md:w-auto md:h-auto md:rounded-none rounded-full mx-auto"
                        src={welcome_HU.image}
                        alt="prof"
                    />
                </div>
                <div className="pt-1 md:p-2 text-center md:text-left space-y-4 flex flex-col justify-between">
                    <blockquote>
                        <p className="text-2xl font-medium mb-auto">
                            “Tailwind CSS is the only framework that I've seen scale on large teams.
                            It’s easy to customize, adapts to any design, and the build size is
                            tiny.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium text-lg">
                        <div className="text-sky-500 dark:text-sky-400">Scridon-Siklódi Márk</div>
                        <div className="text-slate-700 dark:text-slate-500">Webfejlesztő</div>
                    </figcaption>
                </div>
            </figure> */}
        </PageMotion>
    );
};

export default About;
