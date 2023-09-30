export interface IMeta {
  limit: number;
  page: number;
  size: number;
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
