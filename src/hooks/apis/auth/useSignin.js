import { signInRequest } from "@/apis/auth";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

export const useSignin = ()=>{
    const {toast} = useToast();
    const {isPending,isSuccess,error,mutateAsync:signinMutation}=useMutation({
            mutationFn:signInRequest,
            onSuccess: (data) => {
            console.log('Successfuilly signed up', data);
            toast({
                title:'Successfully signed in',
                message:'You will be redirected to the sign in page in a few seconds',
                type:'success'
            })
        },
        onError: (error) => {
            console.log('Failed to sign in', error);
             toast({
                title:'Failed to sign in',
                message:error.message,
                type:'error',
                variant:'destructive'
            })
        }
        
    });
         return {
        isPending,
        isSuccess,
        error,
        signinMutation
    };
    };

   
