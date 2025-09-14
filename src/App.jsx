import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "@/components/ui/toaster"
import { AppRoutes } from "./routes/Routes";
import { AppContextProvider } from "@/context/AppContextProvider"
import { Modals } from "./components/organisms/Modals/Modals";
function App() {
  const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
      <AppContextProvider>
         <AppRoutes/>
         <Modals/>
          <Toaster/>
      </AppContextProvider>
      </QueryClientProvider>

  );
}

export default App
