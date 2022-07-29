import EducationElements from "./EducationsElements.jsx"
import { educationListElements_HU, educationListElements_ENG } from "../../store/educations_data"

const EducationsComp = () => {
  return(
    educationListElements_HU.map(education => <EducationElements education={education}/>)
  )
}
 
export default EducationsComp;