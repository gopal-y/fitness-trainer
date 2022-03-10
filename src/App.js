import React, { useEffect, useState } from 'react';

import { FullScreenContainer, Loading } from "./components";
import Header from "./header";
import Intro from "./intro";

function App() {
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(setLoad(false), 3000);
  }, []);
  return (

    <FullScreenContainer>
      {loading && <Loading />}
      <Header />
      <Intro />
    </FullScreenContainer>
  );
}

export default App;
