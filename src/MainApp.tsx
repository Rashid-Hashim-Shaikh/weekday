import { useEffect, useState } from 'react';
import { FilterSection, JobList } from './component';
import mockApiResponse from './data/mockApi.json';
import { JdDetails } from './types';

const MainApp = () => {
  const [jobList, setJobList] = useState<JdDetails[] | null>(null);

  useEffect(() => {
    setJobList(mockApiResponse.jdList);
  }, []);

  return (
    <div>
      <FilterSection jobList={jobList} />
      {jobList && <JobList jobList={jobList} />}
    </div>
  );
};

export default MainApp;
