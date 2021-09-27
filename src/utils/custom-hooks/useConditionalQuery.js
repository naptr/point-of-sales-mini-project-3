import { useQuery } from "react-query"

export const useConditionalQuery = (queryKey, queryFn) => {
  const queryResult = useQuery(queryKey, queryFn);

  return queryResult;
}