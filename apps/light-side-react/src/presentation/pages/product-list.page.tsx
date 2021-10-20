import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function ProductListPage() {
  const queryString = useQuery();

  return <h2>Product List { queryString.get("search") }</h2>;
}
