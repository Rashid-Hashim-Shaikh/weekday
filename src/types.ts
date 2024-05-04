export interface JdDetails {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary?: number | null;
  salaryCurrencyCode: string;
  location: string;
  minExp?: number | null;
  maxExp?: number | null;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

export interface JdListResponse {
  jdList: JdDetails[];
  totalCount: number;
}
