import { lazy } from "react";


export const Components = lazy(() => import("pages/Components/Components"))
export const LandingPage = lazy(() => import("pages/LandingPage/LandingPage"))
export const ForgotPassword = lazy(() => import("pages/SessionPages/ForgotPassword/ForgotPassword"))
export const ChangePassword = lazy(() => import("pages/SessionPages/ChangePassword/ChangePassword"))
export const OtpGenPage = lazy(() => import("pages/SessionPages/OtpGenPage/OtpGenPage"))
export const SignUp = lazy(() => import("pages/SessionPages/SignUp/SignUp"))