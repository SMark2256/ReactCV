import EducationElements from './EducationsElements.jsx';
import { educationListElements_HU, educationListElements_ENG } from '../../store/educations_data';

const EducationsComp = () => {
    return (
        <>
            <div className="2xl:inline-flex 2xl:space-x-10 items-center align-middle ml-96 mr-96">
                {educationListElements_HU
                    .map((education, index) => (
                        <EducationElements key={index} education={education} />
                    ))
                    .reverse()}
            </div>
        </>
    );
};

export default EducationsComp;
