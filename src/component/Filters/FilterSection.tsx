import { Box } from '@mui/material';
import SelectRoles from './SelectRoles';
import './filter-section.css';
import SelectEmployees from './SelectEmployees';
import SelectExperience from './SelectExperience';

const FilterSection = () => (
  <Box>
    <div className="filters-container">
      <SelectRoles />
      <SelectEmployees />
      <SelectExperience />
      <div>SelectExperience</div>
      <div>SelectOfficeMode</div>
      <div>SelectTechStack</div>
      <div>SelectMinPay</div>
      <div>Search Company</div>
    </div>
  </Box>
);

export default FilterSection;
