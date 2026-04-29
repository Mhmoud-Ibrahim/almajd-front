import React from "react";
import { useFormik } from "formik";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { loginSchema } from "./LoginSchema";
import api from "../api";


const Register: React.FC = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: (values) => {
      const { error } = loginSchema.validate(values, { abortEarly: false });
      if (!error) return {};
      const errors: any = {};
      error.details.forEach((item) => (errors[item.path[0]] = item.message));
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const res = await api.post("/auth/signin", values);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    },
  });

 

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-4 shadow-lg border-0"
        style={{ maxWidth: "450px", width: "100%", borderRadius: "24px" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Almajd Typing</h2>
          <p className="text-muted small"> دخول   </p>
        </div>

        <form onSubmit={formik.handleSubmit}>
        

          <div className="mb-3">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className={`form-control bg-light border-0 py-2 ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="invalid-feedback">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="كلمة المرور"
              className={`form-control bg-light border-0 py-2 ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="invalid-feedback">{formik.errors.password}</div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="btn btn-primary w-100 fw-bold py-2 shadow-sm rounded-3"
          >
          دخول 
          </motion.button>
        </form>

        <div className="text-center my-3 text-muted small">أو</div>

       

        <div className="text-center mt-3">
          <span className="text-muted small">لديك حساب بالفعل؟ </span>
          <Link
            to="/login"
            className="text-decoration-none fw-bold text-primary small"
          >
            تسجيل الدخول
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
