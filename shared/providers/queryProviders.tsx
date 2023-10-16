import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JSX } from "react";


const client = new QueryClient();

const QueryProvider = ({children}: React.PropsWithChildren):JSX.Element => {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
};

export default QueryProvider;
