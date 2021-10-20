import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function SearchBoxComponent() {
  const history = useHistory();

  const search = () => {
    history.push('/items?search=' + inputSearch);
  };

  const [inputSearch, setInputSearch] = useState('');

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setInputSearch(event.target.value)}
      />

      <button onClick={search}>ButtonReact</button>
    </div>
  );
}
