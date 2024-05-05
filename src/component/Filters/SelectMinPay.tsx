import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { Box } from '@mui/material';
import { minPayOptions, Option } from '../../constants/options';

const LABEL = 'Minimum Base Pay Salary';

const SelectMinPay = () => {
  const [selectedValues, setSelectedValues] = useState<Option | null>(null);

  const handleSelect = (value: SingleValue<Option | null>) => {
    setSelectedValues(value);
  };

  return (
    <Box>
      {selectedValues && <p>Min Base Pay</p>}
      <Select
        isClearable
        isSearchable
        placeholder={LABEL}
        options={minPayOptions}
        value={selectedValues}
        onChange={handleSelect}
      />
    </Box>
  );
};

export default SelectMinPay;
