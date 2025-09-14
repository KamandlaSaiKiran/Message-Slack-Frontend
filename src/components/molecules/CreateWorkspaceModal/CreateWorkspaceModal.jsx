
import { Input } from "@/components/ui/input"
import { useCreateWorkspace } from "@/hooks/apis/workspaces/useCreateWorkspace"
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal"
import { Dialog,DialogHeader, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Button } from "@/components/ui/button"


export const CreateWorkspaceModal = ()=>{
    const {openCreateWorkspaceModal,setOpenCreateWorkspaceModal}=useCreateWorkspaceModal();
    const {isPending,createWorkspaceMutation}= useCreateWorkspace();
    const [workspaceDetails,setWorkspaceDetails] = useState({
        workspaceName:'',
        description:''
    });
    const navigate = useNavigate();
    function handleClose(){
        setOpenCreateWorkspaceModal(false);
    }
    async function handleFormSubmit(e){
        e.preventDefault();
        try{
            const data = await createWorkspaceMutation({name:workspaceDetails.workspaceName,description:workspaceDetails.description});
            console.log('Created Workspace',data);
            navigate(`/workspaces/${data._id}`);
        }catch(error){
            console.log('Not able to create a workspace',error);
        }finally{
            setWorkspaceDetails({
                 workspaceName:'',
                 description:''
            });
            setOpenCreateWorkspaceModal(false);
        }
    }

    return(
        <Dialog
         open ={openCreateWorkspaceModal}
         onOpenChange={handleClose}
        >
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create a new workspace</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleFormSubmit} className="space-y-3">
                <Input
                required
                disabled ={isPending}
                minLength={3}
                placeholder="Put the workspace name e.g. MyWorkspace, Dev Workspace"
                value={workspaceDetails.workspaceName}
                onChange={(e)=>setWorkspaceDetails({...workspaceDetails,workspaceName:e.target.value})}
                />
                 <Input
                required
                disabled ={isPending}
                minLength={3}
                placeholder="Put some description to workspace e.g. MyWorkspace, Dev Workspace"
                value={workspaceDetails.description}
                onChange={(e)=>setWorkspaceDetails({...workspaceDetails,description:e.target.value})}
                />
                <div className="flex justify-end mt-5">
                    <Button disabled={isPending}>Create Workspace</Button>
                </div>
            </form>
        </DialogContent>
        </Dialog>

    )
}