import './search-box.component.scss';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SearchBoxComponentProps {}

export function SearchBoxComponent(props: SearchBoxComponentProps) {
  const history = useHistory();

  const search = () => {
    history.push('/items?search=' + inputSearch);
  };

  const [inputSearch, setInputSearch] = useState('');

  return (
    <div>
      <input
        type="text"
        className="box"
        aria-label="Nunca dejes de buscar"
        placeholder="Nunca dejes de buscar"
        autoCorrect="off"
        autoComplete="off"
        onChange={(event) => setInputSearch(event.target.value)}
      />

      <button onClick={search}>ButtonReact</button>
    </div>
  );
}
