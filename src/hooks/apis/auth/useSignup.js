import { signUpRequest } from "@/apis/auth";
import { useMutation } from "@tanstack/react-query";

export const useSignup = ()=>{
    const {isPending,isSuccess,error,mutateAsync:signupMutation}=useMutation({
            mutationFn:signUpRequest,
            onSuccess: (data) => {
            console.log('Successfuilly signed up', data);
        },
        onError: (error) => {
            console.log('Failed to sign up', error);
        }
        
    });
         return {
        isPending,
        isSuccess,
        error,
        signupMutation
    };
    };

   
