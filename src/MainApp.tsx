import { useEffect } from 'react';
import { FilterSection, JobList } from './component';
import mockApiResponse from './data/mockApi.json';

const MainApp = () => {
  console.log(mockApiResponse);
  useEffect(() => {
    // const myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');

    // const body = JSON.stringify({
    //   limit: 10,
    //   offset: 0,
    // });

    // const requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body,
    // };
    // const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
    // fetch(API_ENDPOINT, requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <FilterSection />
      <JobList />
    </div>
  );
};

export default MainApp;
