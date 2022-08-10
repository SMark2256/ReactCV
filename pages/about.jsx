import PageMotion from "../components/PageMotion";

const About = () => {
      return ( 
      <PageMotion>
            <h1 className='font-bold text-5xl pb-14 underline'>  Rólam </h1>
            <div className="space-y-4 flex flex-col items-center">
                  <div className="inline-flex space-x-10">
                        <div className="font-bold"> Születtem  </div>
                        <div> Zalaegerszegen 1996 márciusában </div>
                  </div>
                  <div className="inline-flex space-x-10">
                        <div className="font-bold"> Hobbi </div>
                        <div> Zene, Gitározás, Fotózgatás, Túrázás, Biciklizés </div>
                  </div>
            </div>
            
      </PageMotion> 
      )
}
 
export default About;