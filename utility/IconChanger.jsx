import { DiReact, DiDrupal, DiJavascript1, DiPhp, DiNodejsSmall, DiCss3, DiBootstrap, DiGithubBadge, DiMysql, DiHtml5 } from "react-icons/di"
import { TbCSharp, TbApi} from "react-icons/tb"

const IconSwitch = (icon) => {
  switch (icon) {
    case "REACT":
      return <DiReact />
    case "JS":
      return <DiJavascript1 />
    case "PHP":
      return <DiPhp />
    case "NODE":
      return <DiNodejsSmall />
    case "CSS":
      return <DiCss3 />
    case "BOOTSTRAP":
      return <DiBootstrap />
    case "GITHUB":
      return <DiGithubBadge />
    case "SQL":
      return <DiMysql />
    case "HTML":
      return <DiHtml5 />
    case "C#":
      return <TbCSharp />
    case "API":
      return <TbApi />
    case "Drupal":
      return <DiDrupal />
    default:
      return ""
  }
}

const IconChanger = ({ icon }) => {

  const technologyIcons = icon.split("-")
  const techResult = []

  for (const elements of technologyIcons) {
        techResult.push(IconSwitch(elements))
  }

  return (
        techResult
  )
}

export default IconChanger