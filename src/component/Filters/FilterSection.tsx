import { Box } from '@mui/material';
import SelectRoles from './SelectRoles';
import './filter-section.css';
import SelectEmployees from './SelectEmployees';

const FilterSection = () => (
  <Box>
    <div className="filters-container">
      <SelectRoles />
      <SelectEmployees />
      <div>SelectEmployees</div>
      <div>SelectExperience</div>
      <div>SelectOfficeMode</div>
      <div>SelectTechStack</div>
      <div>SelectMinPay</div>
      <div>Search Company</div>
    </div>
  </Box>
);

export default FilterSection;
