// src/schemas/authSchema.ts
import Joi from 'joi';

export const LoginSchema = Joi.object({
 
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'البريد الإلكتروني غير صحيح',
    'string.empty': 'البريد الإلكتروني مطلوب'
  }),
  password: Joi.string().min(8).required().messages({
    'string.min': 'كلمة المرور 8 أحرف على الأقل',
    'string.empty': 'كلمة المرور مطلوبة'
  }),
});

export const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'البريد الإلكتروني غير صحيح',
    'string.empty': 'البريد الإلكتروني مطلوب'
  }),
  password: Joi.string().required().messages({
    'string.empty': 'كلمة المرور مطلوبة'
  }),
});