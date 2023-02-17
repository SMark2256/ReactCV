import WorkElements from './WorksElements';
import { workListElements_ENG, workListElements_HU } from '../../store/works_data';

const WorksComp = () => {
    return (
        <>
            <div className="2xl:inline-flex 2xl:space-x-10 items-center align-middle ml-96 mr-96">
                {workListElements_HU
                    .map((work, index) => <WorkElements key={index} work={work} />)
                    .reverse()}
            </div>
        </>
    );
};

export default WorksComp;
