import Joi from "joi";
import {
  JoiRequiredRegularName,
  JoiRequiredEmail,
  JoiRequiredPhone,
  JoiPassword,
  JoiRequiredPassword,
} from "../Common";

export const RegisterSchema = Joi.object({
  name: JoiRequiredRegularName("Name"),
  email: JoiRequiredEmail("Email"),
  password: JoiPassword("password"),
});
export const LoginSchema = Joi.object({
  email: JoiRequiredEmail("Email"),
  password: JoiPassword("password"),
});
export const ForgotPasswordSchema = Joi.object({
  email: JoiRequiredEmail("Email"),
});
export const OtpVerificationSchemaSchema = Joi.object({
  email: JoiRequiredEmail("otp"),
});
export const ResetPasswordSchema = Joi.object({
  password: JoiPassword("password"),
  confirmPassword: JoiPassword("password"),
});
