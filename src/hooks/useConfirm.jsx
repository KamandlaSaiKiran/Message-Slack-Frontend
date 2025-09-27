import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
export const useConfirm = ({
    title,
    message
})=>{
    const [promise,setPromise] = useState();
    async function confirmation(){
            console.log('Confirmation triggered');
            return new Promise((resolve)=>{
                setPromise({resolve});
            })
    }

    const handleConfirm=()=>{
        promise?.resolve(true);
        handleClose();
    }

    const handleClose=()=>{
        setPromise(null);
    }

    const ConfirmDialog = ()=>{
        return(
            <Dialog open={promise !== null} onOpenChange={{handleClose}}>
            <DialogContent>
                <DialogHeader>
                        <DialogTitle>
                            {title}
                        </DialogTitle>
                </DialogHeader>

                <DialogFooter>
                    <Button
                    onClick={handleClose}
                    variant="secondary">
                        Cancel
                    </Button>
                    <Button
                    onClick={handleConfirm}
                    variant="secondary">
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>

            </Dialog>
        )
    }

    return {ConfirmDialog,confirmation}
}