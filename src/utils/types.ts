export interface memberType {
  register_number: string;
  name: string;
  mobile: string;
  dob: string;
  father: string;
  house: number;
  area: number;
  blood_group?: string;
  dependents?: {
    id: number;
    dob: string;
    mobile: string;
    name: string;
    father: string;
    blood_group: string;
    active: boolean;
    relationship: string;
    parent: string;
  }[];
}
