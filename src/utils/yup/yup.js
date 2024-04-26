import * as yup from "yup";
import { AppErrors } from "../../common/errors/AppErrors";
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(AppErrors.InvalidEmailL)
    .required(AppErrors.RequiredField),
  password: yup
    .string()
    .min(8, AppErrors.minLenght)
    .required(AppErrors.RequiredField)
    .matches(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,20}$/, AppErrors.InvalidPassword)
});
