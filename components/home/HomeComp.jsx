import Image from 'next/image'
import { welcome_HU } from '../../store/welcome_data';
import { saveAs } from "file-saver";

//import downloadFile from '../../utility/downloadPDF';

const HomeComp = () => {

      const currentYear = new Date().getFullYear();
      const currentAge = currentYear - welcome_HU.birth.substring(0, 4);

      const saveFile = () => {
            saveAs(
              "./dummy.pdf",
              "help.pdf"
            );
          };

      const downloadPDF = () => {
            downloadFile(
                  "../../store/files/help.pdf",
                  "help.pdf"
            )}

      return ( 
            <div className='align-middle items-center'>
                  <h1 className='font-bold'>{welcome_HU.name}</h1>
                  <h2 className='font-semibold text-slate-400 pb-10'>{currentAge} éves {welcome_HU.profession} vagyok {welcome_HU.liveAt}ról</h2>
                  {/* <Image src={welcome_HU.image} height={400} width={200} /> */}
                  {/* <button className='mx-4 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/30 hover:bg-teal-600 hover:shadow-teal-700 duration-200 text-white font-semibold py-2 px-4' onClick={downloadPDF}>Önéletrajz Letöltés</button> */}
            </div>
       );
}
 
export default HomeComp;