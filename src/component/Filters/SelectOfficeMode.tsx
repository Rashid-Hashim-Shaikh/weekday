import { useState } from 'react';
import Select from 'react-select';
import { Box } from '@mui/material';
import { modeOptions } from '../../constants/options';

const LABEL = 'Remote';

const SelectOfficeMode = () => {
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
        options={modeOptions}
        value={selectedValues}
        onChange={handleSelect}
      />
    </Box>
  );
};

export default SelectOfficeMode;
