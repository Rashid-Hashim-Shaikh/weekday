import { useState } from 'react';
import { Grid } from '@mui/material';
import mockApiResponse from '../../data/mockApi.json';
import { JdDetails } from '../../types';
import JdCard from './JdCard';

const JobList = () => {
  const [jdList] = useState<JdDetails[]>(mockApiResponse.jdList);
  return (
    <Grid
      container
      sx={{
        border: '1px',
        backgroundColor: '#fff',
        marginTop: '2rem',
        maxWidth: '100%',
      }}
      spacing={3}
      alignItems="center"
    >
      {jdList && jdList.map((jd) => <JdCard key={jd.jdUid} jd={jd} />)}
    </Grid>
  );
};

export default JobList;
