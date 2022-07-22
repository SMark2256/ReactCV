 import {useState, useEffect} from 'react';

const TestComp = () => {
  const [countryList, setCountryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetch(
            "https://restcountries.com/v3.1/region/europe"
            );
        const data = await result.json();
        setCountryList(data);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
      <div>
      {countryList.map((country) => (
      
            <div className="country-list inline-flex flex-col w-56 h-44 border-2">
                  <div key={country.name}>
                        <p>{country.name.common}</p>
                  <p>{country.region}</p>
                  </div>
            </div>
      
      ))}
      </div>
    
  );
  

}


export default TestComp