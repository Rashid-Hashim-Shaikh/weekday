import { useState } from 'react';
import Select from 'react-select';
import { Box } from '@mui/material';
import { techStackOptions } from '../../constants/options';

const LABEL = 'Tech Stack';

const SelectTechStack = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelect = (value) => {
    setSelectedValues(value);
  };

  return (
    <Box>
      {selectedValues.length > 0 && <p>{LABEL}</p>}
      <Select
        isMulti
        placeholder={LABEL}
        className="basic-multi-select"
        classNamePrefix="select"
        options={techStackOptions}
        value={selectedValues}
        onChange={handleSelect}
      />
    </Box>
  );
};

export default SelectTechStack;
