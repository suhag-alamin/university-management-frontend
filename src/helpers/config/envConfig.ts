export const getBaseURL = (): string => {
  return (
    (process.env.NEXT_PUBLIC_API_BASE_URL as string) ||
    "http://localhost:3030/api/v1"
  );
};
