export interface UserModel {
  _id?: string;
  firstName: string;
  lastName: string;
  email?: string;
  username: string;
  password: string;
  region: {
    district: string;
    subDistrict: string;
  };
  role: string;
}
