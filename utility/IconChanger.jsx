import { DiReact, DiJsBadge, DiPhp, DiNodejsSmall, DiCss3, DiBootstrap, DiGithubBadge, DiMysql, DiHtml5 } from "react-icons/di"


export const IconChanger = (icon) => {
  switch (icon) {
    case "REACT":
      return <DiReact />
    case "JS":
      return <DiJsBadge />
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
    default:
      return ""
  }
}