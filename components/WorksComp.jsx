const WorksComp = () => {

            const listElements = [
              {
                title: "Portfolio",
                description: "This is my portfolio website",
                years: "1 year",
                link: "feri.hu"
              },{
                  title: "Portfolio2",
                  description: "This is my portfolio website",
                  years: "1.5 years",
                  link: "index.hu"
                },{
                  title: "Portfolio3",
                  description: "This is my portfolio website",
                  years: "3 years",
                  link: "google.hu"
                },
            ]
    
        const showElements =  listElements.map((work) => {
            return (
                                <div className="inline-flex flex-col border-l-4 border-r-4 rounded-3xl align-middle mx-5 md:mx-5 w-96 md:w-96 items-center justify-center">
                                  <div className="flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center justify-center">
                                      <h1 className="text-2xl font-semibold">{work.title}</h1>
                                      <a className="text-xl font-semibold">{work.link}</a>
                                      <p className="text-xl font-semibold">{work.description}</p>
                                      <p className="text-lg justify-end font-semibold">{work.years}</p>
                                    </div>
                                  </div>
                                </div>
            )
          })


        return (
          <div>
            {showElements}
          </div>
        )
}
 
export default WorksComp;