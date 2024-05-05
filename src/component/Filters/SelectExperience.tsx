import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { Box } from '@mui/material';
import { expOptions, ExpOption } from '../../constants/options';

const LABEL = 'Experience';

const SelectExperience = () => {
  const [selectedValues, setSelectedValues] = useState<ExpOption | null>(null);

  const handleSelect = (value: SingleValue<ExpOption | null>) => {
    setSelectedValues(value);
  };

  return (
    <Box>
      {selectedValues && <p>{LABEL}</p>}
      <Select
        isClearable
        isSearchable
        placeholder={LABEL}
        options={expOptions}
        value={selectedValues}
        onChange={handleSelect}
      />
    </Box>
  );
};

export default SelectExperience;
