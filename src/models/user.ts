interface User {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  gender: 'M' | 'F' | 'O';
  createdAt: Date;
  updatedAt?: Date;
}

export default User;
