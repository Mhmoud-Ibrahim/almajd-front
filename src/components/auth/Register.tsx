import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { registerSchema } from "./RegisterSchema";

const Register: React.FC = () => {
  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    validate: (values) => {
      const { error } = registerSchema.validate(values, { abortEarly: false });
      if (!error) return {};
      const errors: any = {};
      error.details.forEach((item) => (errors[item.path[0]] = item.message));
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const res = await axios.post("/api/auth/register", values);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    },
  });

  const handleGoogleLogin = () => {
    // هنا يتم وضع رابط الـ API الخاص بالباك إند الذي سيوجه المستخدم لجوجل
    // مثال: window.location.href = "http://localhost:5000/api/auth/google";
    window.location.href = "https://almajd-tau.vercel.app/auth/google";
  };

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
          <p className="text-muted small">سجل الآن لتبدأ رحلة التعلم</p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="اسم المستخدم"
              className={`form-control bg-light border-0 py-2 ${formik.touched.username && formik.errors.username ? "is-invalid" : ""}`}
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="invalid-feedback">{formik.errors.username}</div>
            )}
          </div>

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
            إنشاء حساب
          </motion.button>
        </form>

        <div className="text-center my-3 text-muted small">أو</div>

        <div className="d-flex justify-content-center mb-3">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={handleGoogleLogin}
            type="button"
            className="btn btn-outline-light border text-dark w-100 py-2 d-flex align-items-center justify-content-center shadow-sm rounded-3"
            style={{ fontSize: "0.9rem" }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              className="me-2"
              style={{ width: "18px" }}
            />
            التسجيل عبر جوجل
          </motion.button>
        </div>

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
