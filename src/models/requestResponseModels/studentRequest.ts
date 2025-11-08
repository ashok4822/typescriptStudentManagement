// Defines the structure of data expected in requests (Create/Update)
export interface CreateStudentRequest {
  name: string;
  age: number;
  place: string;
}

export interface UpdateStudentRequest {
  name?: string;
  age?: number;
  place?: string;
}
