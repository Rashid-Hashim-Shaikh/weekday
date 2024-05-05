export interface RolesOption {
  label: string;
  value: string;
  role: string;
}

export const engineeringRoles: RolesOption[] = [
  { label: 'Backend', value: 'Backend', role: 'Engineering' },
  { label: 'Frontend', value: 'frontend', role: 'Engineering' },
  { label: 'Fullstack', value: 'fullstack', role: 'Engineering' },
  { label: 'iOS', value: 'iOS', role: 'Engineering' },
  { label: 'Flutter', value: 'flutter', role: 'Engineering' },
  { label: 'React Native', value: 'react native', role: 'Engineering' },
  { label: 'Android', value: 'android', role: 'Engineering' },
  { label: 'Tech Lead', value: 'tech lead', role: 'Engineering' },
  { label: 'Dev-Ops', value: 'dev-ops', role: 'Engineering' },
  { label: 'Data Engineer', value: 'data engineer', role: 'Engineering' },
  { label: 'Data Science', value: 'data science', role: 'Engineering' },
  { label: 'Computer-Vision', value: 'computer-vision', role: 'Engineering' },
  { label: 'Nlp', value: 'nlp', role: 'Engineering' },
  { label: 'Deep-Learning', value: 'deep-learning', role: 'Engineering' },
  { label: 'Test / Qa', value: 'test / qa', role: 'Engineering' },
  { label: 'Web3', value: 'Web3', role: 'Engineering' },
  { label: 'Sre', value: 'sre', role: 'Engineering' },
  { label: 'Data-Infrastructure', value: 'data-infrastructure', role: 'Engineering' },
];

export const designRoles: RolesOption[] = [
  { label: 'Designer', value: 'designer', role: 'Design' },
  { label: 'Design Manager', value: 'design manager', role: 'Design' },
  { label: 'Graphic Designer', value: 'graphic designer', role: 'Design' },
  { label: 'Product Designer', value: 'product designer', role: 'Design' },
];

export const productRoles: RolesOption[] = [
  { label: 'Product Manager', value: 'product manager', role: 'Product' },
];

export const operationsRole: RolesOption[] = [
  { label: 'Operations Manager', value: 'Operations Manager', role: 'Operations' },
  { label: 'Founder’s Office/Chief Of Staff', value: 'founder’s office/chief Of staff', role: 'Operations' },
];

export const salesRole: RolesOption[] = [
  { label: 'Sales Development Representative', value: 'sales development representative', role: 'Sales' },
  { label: 'Account Executive', value: 'account executive', role: 'Sales' },
  { label: 'Account Manager', value: 'account manager', role: 'Sales' },
];

export const marketingRole: RolesOption[] = [
  { label: 'Digital Marketing Manager', value: 'digital marketing manager', role: 'Marketing' },
  { label: 'Growth Hacker', value: 'growth hacker', role: 'Marketing' },
  { label: 'Product Marketing Manager', value: 'product marketing manager', role: 'Marketing' },
];

export const otherEnggRole: RolesOption[] = [
  { label: 'Hardware', value: 'hardware', role: 'Other Engineering' },
  { label: 'Mechanical', value: 'mechanical', role: 'Other Engineering' },
  { label: 'Systems', value: 'Systems', role: 'Other Engineering' },
];

export const businessAnalystRole: RolesOption[] = [
  { label: 'Business Analyst', value: 'business analyst', role: 'Business Analyst' },
];

export const dataAnalystRole: RolesOption[] = [
  { label: 'Data Analyst', value: 'data analyst', role: 'Data Analyst' },
];

export const projectManagerRole: RolesOption[] = [
  { label: 'Project Manager', value: 'project manager', role: 'Project Manager' },
];

export const managementRole: RolesOption[] = [
  { label: 'Management', value: 'management', role: 'Management' },
];

export const legalRole: RolesOption[] = [
  { label: 'Legal', value: 'legal', role: 'Legal' },
];

export const hrRole: RolesOption[] = [
  { label: 'Hr', value: 'hr', role: 'HR' },
];

export const financeRole: RolesOption[] = [
  { label: 'Finance', value: 'finance', role: 'Finance' },
];

export interface GroupedRolesOption {
  label: string;
  options: RolesOption[] | RolesOption[];
}

export const groupedRolesOption: GroupedRolesOption[] = [
  {
    label: 'Engineering',
    options: engineeringRoles,
  },
  {
    label: 'Design',
    options: designRoles,
  },
  {
    label: 'Product',
    options: productRoles,
  },
  {
    label: 'Operations',
    options: operationsRole,
  },
  {
    label: 'Sales',
    options: salesRole,
  },
  {
    label: 'Marketing',
    options: marketingRole,
  },
  {
    label: 'Other Engineering',
    options: otherEnggRole,
  },
  {
    label: 'Business Analyst',
    options: businessAnalystRole,
  },
  {
    label: 'Data Analyst',
    options: dataAnalystRole,
  },
  {
    label: 'Project Manager',
    options: projectManagerRole,
  },
  {
    label: 'Management',
    options: managementRole,
  },
  {
    label: 'Legal',
    options: legalRole,
  },
  {
    label: 'HR',
    options: hrRole,
  },
  {
    label: 'Finance',
    options: financeRole,
  },
];

export interface Option {
  label: string;
  value: string;
}

export const noOfEmpOptions: Option[] = [
  { label: '1-10', value: '1-10' },
  { label: '11-20', value: '11-20' },
  { label: '21-50', value: '21-50' },
  { label: '51-100', value: '51-100' },
  { label: '101-200', value: '101-200' },
  { label: '201-500', value: '201-500' },
  { label: '500+', value: '500+' },
];

export interface ExpOption {
  label: string;
  value: number;
}

export const expOptions: ExpOption[] = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '10', value: 10 },
];