export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};
export type ResponseErrorType = {
  statusCode?: number;
  message?: string;
  errorMessages?: ErrorMessage[];
};

type ErrorMessage = {
  path: string | number;
  message: string;
};

export type IDepartment = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
