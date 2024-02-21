import Joi from "joi";
import { JoiRequiredRegularName, JoiRequiredEmail, JoiRequiredPhone, JoiPassword} from "../Common";

export const RegisterSchema = Joi.object({
  name: JoiRequiredRegularName("Name"),
  email: JoiRequiredEmail("Email"),
  phone: JoiRequiredPhone("Phone")
});
export const LoginSchema = Joi.object({
  email: JoiRequiredEmail("Email"),
  password: JoiPassword("password")
});
export const ForgotPasswordSchema = Joi.object({
  email :  JoiRequiredEmail("Email"),
})