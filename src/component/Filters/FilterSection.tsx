import { Box } from '@mui/material';
import SelectRoles from './SelectRoles';
import SelectEmployees from './SelectEmployees';
import SelectExperience from './SelectExperience';
import SelectOfficeMode from './SelectOfficeMode';
import SelectTechStack from './SelectTechStack';
import SelectMinPay from './SelectMinPay';
import SearchCompany from './SearchCompany';

import './filter-section.css';

const FilterSection = () => (
  <Box>
    <div className="filters-container">
      <SelectRoles />
      <SelectEmployees />
      <SelectExperience />
      <SelectOfficeMode />
      {/* Conditionally render tech stack whenever Engineering role is selected.
      replace true with the condition */}
      {true && <SelectTechStack />}
      <SelectMinPay />
      <SearchCompany />
    </div>
  </Box>
);

export default FilterSection;
