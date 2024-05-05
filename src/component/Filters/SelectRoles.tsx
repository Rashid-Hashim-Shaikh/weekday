import { useState } from 'react';
import Select, { ActionMeta, ValueType } from 'react-select';
import { Box } from '@mui/material';
import { groupedRolesOption, GroupedRolesOption, RolesOption } from '../../constants/options';

const LABEL = 'Role';

const SelectRoles = () => {
  const [selectedValues, setSelectedValues] = useState<RolesOption[] | []>([]);

  // TODO: Handling filtering logic pending and few types declaration pending
  // eslint-disable-next-line max-len
  const handleChange = (value: ValueType<RolesOption[], true>, actionMeta: ActionMeta<RolesOption>) => {
    // Check if the selected value belongs to the same group (here role)
    // as the previously selected value. If the group/role is different,
    // remove the previously selected value and add the newly selected value.

    if (value && actionMeta.action === 'select-option') {
      setSelectedValues((prev) => {
        if (prev?.length === 0
      || prev.map((v) => v?.role).includes(actionMeta?.option?.role)) {
          return value;
        }
        return [actionMeta.option];
      });
    } else {
      setSelectedValues(value);
    }
  };

  const formatGroupLabel = (data: GroupedRolesOption) => (
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
