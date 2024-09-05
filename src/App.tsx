"use strict";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TableBlock } from "./layouts/TableBlock";
import { userSlice } from "./store/reducers/UserSlice";
import { useAppDispatch, useAppSelector } from "./hooks/useDispatch";
import { useEffect } from "react";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { API_URL } from "./constants/apiURL";
import { userAPI } from "./service/userService";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TableBlock />
    </QueryClientProvider>
  );
}

export default App;
