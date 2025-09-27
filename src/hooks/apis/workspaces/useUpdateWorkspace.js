import { updateWorkspaceRequest } from "@/apis/auth/workspaces";
import { useAuth } from "@/hooks/context/useAuth"
import { useMutation } from "@tanstack/react-query";

export const useUpdateWorkspace = (workspaceId)=>{
    const {auth} = useAuth();
    const {isPending,isSuccess,error,mutateAsync:updateWorkspaceMutation} = useMutation({
        mutationFn:(name)=>updateWorkspaceRequest({workspaceId,name,token:auth?.token}),
        onSuccess:()=>{
            console.log('Workspace updated Successfully');
        },
        onError:()=>{
            console.log("Error in updating the workspace",error);
        }
    });

    return{
        isPending,
        error,
        isSuccess,
        updateWorkspaceMutation
    }
}