import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { FilterSection, JdList } from './component';
import mockApiResponse from './data/mockApi.json';
import { JdDetails } from './types';

const MainApp = () => {
  const [jdList, setJdList] = useState<JdDetails[] | null>(null);

  useEffect(() => {
    // call API and set the JD list, later on add redux and store it in global store
    setJdList(mockApiResponse.jdList);
  }, []);

  return (
    <Container maxWidth="xl">
      <FilterSection />
      {jdList && <JdList />}
    </Container>
  );
};

export default MainApp;
