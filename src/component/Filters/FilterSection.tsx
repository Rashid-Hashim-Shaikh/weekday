import { Box } from '@mui/material';
import SelectRoles from './SelectRoles';
import SelectEmployees from './SelectEmployees';
import SelectExperience from './SelectExperience';
import SelectOfficeMode from './SelectOfficeMode';
import SelectTechStack from './SelectTechStack';

import './filter-section.css';

const FilterSection = () => (
  <Box>
    <div className="filters-container">
      <SelectRoles />
      <SelectEmployees />
      <SelectExperience />
      <SelectOfficeMode />
      {/* Conditionally render tech stack whenever Engineering role is selected */}
      {true && <SelectTechStack />}
      <div>SelectTechStack</div>
      <div>SelectMinPay</div>
      <div>Search Company</div>
    </div>
  </Box>
);

export default FilterSection;
