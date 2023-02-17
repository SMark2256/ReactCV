import PageMotion from '../components/PageMotion';

const About = () => {
    return (
        <PageMotion>
            <h1 className="font-bold text-5xl pb-14 underline"> Rólam </h1>
            <div className="space-y-4 flex flex-col items-center">
                <div className="inline-flex space-x-10">
                    <div className="font-bold"> Születtem </div>
                    <div> Zalaegerszegen 1996 márciusában </div>
                </div>
                <div className="inline-flex space-x-10">
                    <div className="font-bold"> Hobbi </div>
                    <div> Zene, Gitározás, Fotózgatás, Túrázás, Biciklizés </div>
                </div>
            </div>
            {/* <div className="group h-96 w-96 [perspective:1000px]">
                <div className="absolute inset-0">
                    <img
                        src={welcome_HU.image}
                        alt="profile image"
                        className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    />
                </div>
            </div> */}
            <figure class="mt-10 md:flex bg-slate-900 w-[60rem] mx-auto rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <div
                    class={`md:w-[40rem] bg-[url('/mePic2.jpg')] bg-contain bg-no-repeat bg-center`}>
                    {/* <img
                        class="w-24 h-24 md:w-auto md:h-auto md:rounded-none rounded-full mx-auto"
                        src={welcome_HU.image}
                        alt="prof"
                    /> */}
                </div>
                <div class="pt-1 md:p-2 text-center md:text-left space-y-4 flex flex-col justify-between">
                    <blockquote>
                        <p class="text-2xl font-medium mb-auto">
                            “Tailwind CSS is the only framework that I've seen scale on large teams.
                            It’s easy to customize, adapts to any design, and the build size is
                            tiny.”
                        </p>
                    </blockquote>
                    <figcaption class="font-medium text-lg">
                        <div class="text-sky-500 dark:text-sky-400">Scridon-Siklódi Márk</div>
                        <div class="text-slate-700 dark:text-slate-500">Webfejlesztő</div>
                    </figcaption>
                </div>
            </figure>
        </PageMotion>
    );
};

export default About;
