import EducationsComp from '../components/educations/EducationsComp.jsx';
import PageMotion from '../components/PageMotion.jsx';

const Educations = () => {
    return (
        <PageMotion>
            <div>
                <h1 className="font-bold text-3xl lg:text-5xl pb-10 lg:pb-20 underline">
                    {' '}
                    Tanulmányaim{' '}
                </h1>
            </div>
            <section className="items-center align-middle flex-col-reverse flex">
                <EducationsComp />
            </section>
        </PageMotion>
    );
};

export default Educations;
