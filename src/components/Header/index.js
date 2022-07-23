import React from 'react';
import * as S from './styled';
import useGithub from "../../hooks/gihubHooks";
import { useState } from 'react';

function Header() {
const { getUser } = useGithub();
const [usernameForSearch, setUsernameForSearch] = useState();

const submitGetUser = () => {
  if(!usernameForSearch) return;
  return getUser(usernameForSearch);
}

  return <header>
    <S.Wrapper>
      <input type="text" id="" placeholder="Search by username..." onChange={(event) => setUsernameForSearch(event.target.value)} />
      <button onClick={submitGetUser}>Search</button>
    </S.Wrapper>
  </header>
}

export default Header;