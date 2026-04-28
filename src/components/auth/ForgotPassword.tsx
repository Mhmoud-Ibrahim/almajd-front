// src/pages/ForgotPassword.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="card p-4 shadow-lg border-0 text-center"
        style={{ maxWidth: "400px", width: "100%", borderRadius: "24px" }}
      >
        <h4 className="fw-bold mb-3">استعادة الحساب</h4>
        <p className="text-muted small mb-4">
          أدخل بريدك الإلكتروني لنرسل لك رابط إعادة التعيين
        </p>

        <form>
          <input
            type="email"
            className="form-control bg-light border-0 py-2 mb-3"
            placeholder="البريد الإلكتروني"
          />
          <button className="btn btn-primary w-100 fw-bold py-2 mb-3 shadow-sm">
            إرسال الرابط
          </button>
        </form>

        <Link to="/login" className="text-decoration-none small text-muted">
          العودة لتسجيل الدخول
        </Link>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
