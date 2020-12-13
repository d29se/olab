export interface IMember {
  id: string;
  photoFile: string;
  firstName: string;
  middleName: string;
  lastName: string;
  position: string;
  education: string;
  almaMater: string;
  rank: number;
  current: boolean;
  bio: string;
  tags: Array<{ label: string; url: string }>;
}
