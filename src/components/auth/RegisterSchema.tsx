// src/schemas/authSchema.ts
import Joi from 'joi';

export const registerSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.empty': 'اسم المستخدم مطلوب',
    'string.min': 'يجب أن يكون 3 أحرف على الأقل'
  }),
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