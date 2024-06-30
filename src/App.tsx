import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useDemoStore } from './store/demoStore';
import { useShallow } from 'zustand/react/shallow';
import { AppComponent } from './components/AppComponent';

function App() {
  const { count } = useDemoStore(useShallow((state) => ({ count: state.count })));

  return (
    <AppComponent
      count={count}
      reactLogo={reactLogo}
      viteLogo={viteLogo}
      increment={useDemoStore.getState().increment}
    />
  );
}

export default App;
