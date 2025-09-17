import { fetchWorkspaceDetailsRequest } from "@/apis/auth/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useQuery } from "@tanstack/react-query";

export const useGetWorkspaceById=(id)=>{
    const {auth} = useAuth();
    const {isFetching,isSuccess,error,data:workspace}= useQuery({
        queryFn:()=>fetchWorkspaceDetailsRequest({workspaceId:id,token:auth?.token}),
        queryKey:[`fetchWorspaceById-${id}`],
        staleTime:10000
    });
    return {
        isFetching,
        isSuccess,
        error,
        workspace
    }

}