import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { FilterSection, JdList } from './component';
import mockApiResponse from './data/mockApi.json';
import { JdDetails } from './types';
import { fetchJdList, selectJdList } from './redux/slices/jdListSlice';
import { useSelector, useDispatch } from 'react-redux';

const MainApp = () => {
  const [jdList, setJdList] = useState<JdDetails[] | null>(null);
  const dispatch = useDispatch();
  const selectedjdList = useSelector(selectJdList);

  useEffect(() => {
    // call API and set the JD list, later on add redux and store it in global store
    setJdList(mockApiResponse.jdList);
    dispatch(fetchJdList());
  }, [dispatch]);
  
console.log("JDlist", selectedjdList)
  return (
    <Container maxWidth="xl">
      <FilterSection />
      {jdList && <JdList />}
    </Container>
  );
};

export default MainApp;
