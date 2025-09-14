import combineContext from "@/utils/combineContext";
import { AuthContextProvider } from "./AuthContext";
import { CreateWorkspaceContextProvider } from "@/context/CreateWorkspaceContext";


export const AppContextProvider = combineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider
)