import { createContext, useState } from 'react';

const QueryContext = createContext({
  listQuery: '',
  actions: {
    setListQuery: () => {},
  },
});

const QueryProvider = ({ children }) => {
  const [listQuery, setListQuery] = useState('');
  const value = {
    state: { listQuery },
    actions: { setListQuery },
  };

  return (
    <QueryProvider.Provider value={value}>{children}</QueryProvider.Provider>
  );
};

const { Consumer: QueryConsumer } = QueryContext;

export { QueryProvider, QueryConsumer };
