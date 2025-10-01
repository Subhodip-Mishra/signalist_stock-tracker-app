"use client"
import React from 'react'
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InputFields from "@/components/forms/inputFields";
import SelectField from "@/components/forms/SelectField";
import {INVESTMENT_GOALS} from "@/lib/constants";
import {CountrySelectField} from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'US',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology',
        },
        mode: 'onBlur'
    })
    const onSubmit = async (data: SignUpFormData) => {
        try {
            console.log(data)

        }catch (e){
            console.error(e)
        }
    }

    return (
        <>
            <h1 className={"form-title"}>Sign Up & Personalized</h1>

            <form onSubmit={handleSubmit(onSubmit)} className={"space-y-5"}>
                {/*Input*/}
                <InputFields
                    name="fullName"
                    label="Full Name"
                    placeholder="John Doe"
                    register={register}
                    error={errors.fullName}
                    validation={{required: "Full name is required", minLength: 2}}
                />

                <InputFields
                name="email"
                label="Email"
                placeholder="johndoe123@gmail.com"
                register={register}
                error={errors.email}
                validation={{required: "Email is required", pattern: /^\w+@\w+\.w+$/, message: 'Email address is required'}}
                />

                <InputFields
                name="password"
                label="Password"
                placeholder="Enter a strong password"
                register={register}
                type="password"
                error={errors.password}
                validation={{required: "Password is required", minLength: 8}}
                />

                <CountrySelectField
                name="country"
                label="Country"
                control={control}
                error={errors.country}
                required
                />

                <SelectField
                name={"investmentGoals"}
                label={"Investments Goals"}
                placeholder={"Select your investment goal"}
                options={INVESTMENT_GOALS}
                control={control}
                required
                />


                <Button type={"submit"} disabled={isSubmitting} className={"yellow-btn w-full mt-5"}>
                    {isSubmitting ? "Create Account" : "Start Your Investing Journey"}
                </Button>

                <FooterLink text={"already have an account?"} linkText={"Sign in"} href={"/sign-in"}/>
            </form>
        </>
    )
}
export default SignUp
