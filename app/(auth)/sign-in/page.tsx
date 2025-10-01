"use client"
import React from 'react'
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InputFields from "@/components/forms/inputFields";
import SelectField from "@/components/forms/SelectField";
import {INVESTMENT_GOALS} from "@/lib/constants";
import {CountrySelectField} from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur'
    })

    const onSubmit = (data: SignInFormData) => {
        try {
            console.log(data)
        } catch(error) {
            console.log(error)
        }
    }
    return (
       <>
           <div className={"w-full mt-10"}>

           <h1 className={"form-title"}>Log In to your account</h1>

           <form onSubmit={handleSubmit(onSubmit)}>
               <InputFields
                   name={"email"}
                   label={"Email"}
                   placeholder={"johndoe@gmail.com"}
                   type={"text"}
                   register={register}
                   error={errors.email}
                   validation={{ required: "Email is required" }}
               />
               <InputFields
                   name={"password"}
                   label={"Password"}
                   placeholder={""}
                   type={"password"}
                   register={register}
                   error={errors.password}
                   validation={{ required: "password is required" }}
               />
           </form>
           <Button type={"submit"} disabled={isSubmitting} className={"yellow-btn w-full mt-5"}>
               {isSubmitting ? "Log In" : "Log in to your account"}
           </Button>

           <FooterLink text={"Dont have any account?"} linkText={"Create an account"} href={"sign-up"} />
           </div>

       </>
    )
}
export default SignIn
