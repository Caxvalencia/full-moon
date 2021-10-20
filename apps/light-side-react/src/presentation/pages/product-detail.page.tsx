import { useParams } from 'react-router-dom';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  return <h2>Product Detail { id }</h2>;
}
