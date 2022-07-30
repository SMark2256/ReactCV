import EducationElements from "./EducationsElements.jsx"
import { educationListElements_HU, educationListElements_ENG } from "../../store/educations_data"

const EducationsComp = () => {
  return(
    <>
      <div className="flex flex-col-reverse"> 
        {educationListElements_HU.map((education,index) => <EducationElements key={index} education={education}/>)}
      </div>
    </>
  )
}
 
export default EducationsComp;