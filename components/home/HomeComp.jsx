import Image from 'next/image'
import { welcome_HU } from '../../store/welcome_data'
import { saveAs } from "file-saver"
import pdf from './help.pdf'

//import downloadFile from '../../utility/downloadPDF';

const HomeComp = () => {

      const currentYear = new Date().getFullYear();
      const currentAge = currentYear - welcome_HU.birth.substring(0, 4);

      const saveFile = () => {
            saveAs(
              pdf,
              "help.pdf"
            );
          };

      const downloadPDF = () => {
            downloadFile(
                  "../../store/files/help.pdf",
                  "help.pdf"
            )}

      return (
            <div className='align-middle items-center space-y-8'>
                  <div className='inline-flex space-x-3'>
                        <h1 className='font-bold'>A nevem</h1>
                        <h1 className='font-bold underline'> {welcome_HU.name}</h1>
                  </div>
                  <div className='text-xl'>
                        <p className='font-semibold'>Üdvözöllek a Weboldalomon!</p>
                        <p className=' text-slate-400 pb-10'>{currentAge} éves {welcome_HU.profession} vagyok {welcome_HU.liveAt}ról</p>
                        <Image src={welcome_HU.image} height={300} width={300} className="rounded-full hover:ring-1 duration-200 ring-teal-300"/> 
                        {/* <button className='mx-4 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/30 hover:bg-teal-600 hover:shadow-teal-700 duration-200 text-white font-semibold py-2 px-4' onClick={saveFile}>Önéletrajz Letöltés</button> */}
                  </div>
            </div>
       );
}

export default HomeComp;