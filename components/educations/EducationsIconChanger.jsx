import { IconChanger } from '../../utility/IconChanger';

const EducationsIconChanger = ({ educationIcon }) => {
    const technologyIcons = educationIcon.split('-');
    const techResult = [];

    for (const elements of technologyIcons) {
        techResult.push(IconChanger(elements));
    }

    return techResult;
};

export default EducationsIconChanger;
