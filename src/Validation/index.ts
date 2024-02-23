import {
  ForgotPasswordSchema,
  LoginSchema,
  RegisterSchema,
  ResetPasswordSchema,
} from "../Modules/Validation/ValidationSchemas/test";
import { ForgotPassword } from "../Routes/Home/ForgotPassword";
import { schemaValidation } from "../Utils/Validation";

export const validateRegister = (data: object) =>
  schemaValidation(data, RegisterSchema);

export const ValidateLogin = (data: object) =>
  schemaValidation(data, LoginSchema);

export const validateForgotPassword = (data: object) =>
  schemaValidation(data, ForgotPasswordSchema);

export const validateResetPassword = (data: object) =>
  schemaValidation(data, ResetPasswordSchema);
