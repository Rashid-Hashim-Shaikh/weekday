import { Box, TextField } from '@mui/material';

const SearchCompany = () => (
  <Box>
    <TextField
      size="small"
      id="companyName"
      label="Search Company Name"
      variant="outlined"
      color="primary"
      placeholder="Search Company Name"
    />
  </Box>

);

export default SearchCompany;
