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
            <div className='align-middle items-center'>
                  <h1 className='text-3xl lg:text-5xl font-bold pb-10'>Üdvözöllek!</h1>
                  <div className='md:flex-col lg:inline-flex text-3xl lg:text-2xl space-x-3 pb-2'>
                        <h1 className='font-bold'>A nevem</h1>
                        <h1 className='font-bold underline'> {welcome_HU.name}</h1>
                  </div>
                  <div className='lg:text-2xl'>
                        <p className=' text-slate-400 pb-10'>{currentAge} éves {welcome_HU.profession}</p>
                  </div>
                  <div className=''>
                        <img src={welcome_HU.image} className="object-cover w-80 h-60 lg:w-96 lg:h-72 object-right rounded-full mx-auto border-4 border-cyan-900"/> 
                        {/* <button className='mx-4 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/30 hover:bg-teal-600 hover:shadow-teal-700 duration-200 text-white font-semibold py-2 px-4' onClick={saveFile}>Önéletrajz Letöltés</button> */}
                  </div>
            </div>
       );
}

export default HomeComp;