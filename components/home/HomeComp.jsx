import Image from 'next/image'
import { welcome_HU } from '../../store/welcome_data';

const HomeComp = () => {

      const currentYear = new Date().getFullYear();
      const currentAge = currentYear - welcome_HU.birth.substring(0, 4);

      return ( 
            <div className='align-middle items-center'>
                  <h1 className='font-bold'>{welcome_HU.name}</h1>
                  <h2 className='font-semibold text-slate-400'>{currentAge} éves {welcome_HU.profession} vagyok {welcome_HU.liveAt}ról</h2>
                  {/* <Image src={welcome_HU.image} height={400} width={200} /> */}
            </div>
       );
}
 
export default HomeComp;