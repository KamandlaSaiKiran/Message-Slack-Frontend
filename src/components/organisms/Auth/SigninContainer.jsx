import { SigninCard } from "./SigninCard"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSignin } from "@/hooks/apis/auth/useSignin"
export const SigninContainer=()=>{

    const navigate=useNavigate();
        const [signinForm,setSigninForm]=useState({
            email:'',
            password:''
        });
        const [validationError,setValidationError]=useState(null);

        const {isPending,isSuccess,error,signinMutation}=useSignin();

        const onSigninFormSubmit = async (e)=>{
            e.preventDefault();
            if(!signinForm.email || ! signinForm.password){
                console.log("Please fill all the fields");
                setValidationError({message:'Please fill all the fields'});
                return;
            }
            setValidationError(null);
            await signinMutation({
                email:signinForm.email,
                password:signinForm.password
            })
        };

        useEffect(()=>{
            if(isSuccess){
                setTimeout(()=>{
                    navigate('/home');
                },3000)
            }

        },[isSuccess,navigate])


    return(
        <SigninCard
            signinForm={signinForm}
            setSigninForm={setSigninForm}
            navigate={navigate}
            isPending={isPending}
            isSuccess={isSuccess}
            error={error}
            validationError={validationError}
            onSigninFormSubmit={onSigninFormSubmit}
        />
    )
}