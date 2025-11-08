// Defines structure of data sent back in responses
export interface StudentResponse {
  id: string;
  name: string;
  age: number;
  place: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: any;
}
