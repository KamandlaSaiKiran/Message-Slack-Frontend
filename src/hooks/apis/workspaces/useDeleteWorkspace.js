import { deleteWorkspaceRequest } from "@/apis/auth/workspaces";
import { useMutation } from "@tanstack/react-query";

export const useDeleteWorkspace = (workspaceId)=>{
    const {auth} = useAuth();
    const {isPending,isSuccess,error,mutateAsync:deleteWorkspaceMutation} = useMutation({
        mutationFn: ()=>deleteWorkspaceRequest({workspaceId,token:auth?.token}),
        onSuccess: ()=>{
            console.log('Workspace Deleted Successfully');

        },
        onError: (error)=>{
            console.log('Error in deleting the workspace',error);
        }
    });

    return{
        isPending,
        isSuccess,
        error,
        deleteWorkspaceMutation
    }
}