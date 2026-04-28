// src/pages/Login.tsx
import React from 'react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { LoginSchema } from './LoginSchema';


const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validate: (values) => {
      const { error } = LoginSchema.validate(values, { abortEarly: false });
      if (!error) return {};
      const errors: any = {};
      error.details.forEach((item) => (errors[item.path[0]] = item.message));
      return errors;
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-4 shadow-lg border-0" 
        style={{ maxWidth: '400px', width: '100%', borderRadius: '24px' }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark">تسجيل الدخول</h2>
          <p className="text-muted small">مرحباً بك مجدداً في Almajd Typing</p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className={`form-control bg-light border-0 py-2 ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('email')}
            />
          </div>

          <div className="mb-2">
            <input
              type="password"
              placeholder="كلمة المرور"
              className={`form-control bg-light border-0 py-2 ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('password')}
            />
          </div>

          <div className="text-end mb-4">
            <Link to="/forgot-password"  className="text-decoration-none text-muted small fw-medium">
              نسيت كلمة المرور؟
            </Link>
          </div>

          <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit" className="btn btn-primary w-100 fw-bold py-2 shadow-sm rounded-3">
            دخول
          </motion.button>
        </form>

        <div className="text-center mt-4">
          <span className="text-muted small">ليس لديك حساب؟ </span>
          <Link to="/register" className="text-decoration-none fw-bold text-primary small">إنشاء حساب جديد</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;