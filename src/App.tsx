"use strict";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TableBlock } from "./layouts/TableBlock/TableBlock";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TableBlock />
    </QueryClientProvider>
  );
}

export default App;
