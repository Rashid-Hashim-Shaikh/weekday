import { useState } from 'react';
import Select from 'react-select';
import { Box } from '@mui/material';
import { noOfEmpOptions } from '../../constants/options';

const LABEL = 'Number of Employees';

const SelectEmployees = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelect = (value) => {
    setSelectedValues(value);
  };

  return (
    <Box>
      {selectedValues.length > 0 && <p>No of Employees</p>}
      <Select
        isMulti
        placeholder={LABEL}
        className="basic-multi-select"
        classNamePrefix="select"
        options={noOfEmpOptions}
        value={selectedValues}
        onChange={handleSelect}
      />
    </Box>
  );
};

export default SelectEmployees;
