import { useState } from 'react';
import Select from 'react-select';
import { Box } from '@mui/material';
import { groupedRolesOption } from '../../constants/options';

const LABEL = 'Role';

const SelectRoles = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  // TODO: Handling filtering logic pending and few types declaration pending
  const handleChange = (value) => {
    // Check if the selected value belongs to the same group (here role)
    // as the previously selected value. If the group/role is different,
    // remove the previously selected value and add the newly selected value.
    setSelectedValues((prev) => {
      if (prev?.length === 0
      || prev.map((v) => v?.role).includes(value[value.length - 1]?.role)) {
        return value;
      }
      return [value[value?.length - 1]];
    });
  };

  const formatGroupLabel = (data) => (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>{data.label}</span>
    </div>
  );
// TODO: Style refinement pending
  return (
    <Box sx={{
      minWidth: 200,
    }}
    >
      <p>{ selectedValues.length > 0 ? LABEL : '' }</p>
      <Select
        isMulti
        onChange={handleChange}
        formatGroupLabel={formatGroupLabel}
        placeholder={LABEL}
        options={groupedRolesOption}
        value={selectedValues}
      />
    </Box>
  );
};

export default SelectRoles;
