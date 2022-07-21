import { useState, useEffect } from 'react';

const Connect_apiList = () => {
  const [apiList, setApiList] = useState([]);
  const [apiListLoading, setApiListLoading] = useState(true);
  const [apiListError, setApiListError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/region/europe");
        const data = await response.json();
        setApiList(data);
        setApiListLoading(false);
        console.log(data)
      } catch (error) {
        setApiListError(true);
        setApiListLoading(false);
      }
    };
    fetchData();
  }, []);

  if (apiListLoading) {
    return <div>Loading...</div>;
  }

  if (apiListError) {
    return <div>Error...</div>;
  }

  const resultList = apiList.map((api) => {
      return(
                  <li key={api.name.common} className='flex inline-flex flex-col text-center align-middle h-56 w-96 border-2  items-center'>
                  <p>{api.name.common}</p>
                  <p className='text-cyan-500'>{api.region}</p>
                  <img src={api.flags.png} className='h-24 w-40 align-middle justify-center'/>
                  </li>
            )
      })


      return (
    <ul className='w-auto mx-auto flex inline-flex flex-col'>
      <h1>API List</h1>
      <div>
            {resultList}
      </div>
    </ul>

      )
}
 
export default Connect_apiList;