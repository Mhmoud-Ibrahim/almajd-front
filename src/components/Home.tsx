import React from 'react';
// استيراد Framer Motion
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { 
  PersonBadge, FileEarmarkText, ShieldCheck, 
  Calculator, RocketTakeoff, Truck 
} from 'react-bootstrap-icons';

// تعريف الأنواع
interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
  gradient: string;
}

const services: Service[] = [
  { id: 1, title: 'إصدار وتجديد هوية', icon: <PersonBadge size={35} />, gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { id: 2, title: 'عقد عمل', icon: <FileEarmarkText size={35} />, gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
  { id: 3, title: 'تأمين', icon: <ShieldCheck size={35} />, gradient: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)' },
  { id: 4, title: 'مكتب محاسبي', icon: <Calculator size={35} />, gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
  { id: 5, title: 'حجوزات طيران', icon: <RocketTakeoff size={35} />, gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' },
  { id: 6, title: 'بنية تحتية', icon: <Truck size={35} />, gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' },
];

const Home: React.FC = () => {
  return (
    <div dir="rtl" className="bg-light min-vh-100 overflow-hidden">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary fs-3" href="#">مكتب المجد</a>
          <div className="d-none d-lg-flex gap-4 mx-auto">
            <a href="#" className="nav-link fw-semibold">الخدمات</a>
            <a href="#" className="nav-link fw-semibold">المدونة</a>
            <a href="#" className="nav-link fw-semibold">حاسبة الرسوم</a>
            <a href="#" className="nav-link fw-semibold">من نحن؟</a>
          </div>
          <button className="btn btn-primary rounded-pill px-4 fw-bold shadow-sm">
            طلب خدمتك الآن
          </button>
        </div>
      </nav>

      {/* Hero Section مع إضافة أنيميشن الظهور */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container text-center py-5"
      >
        <h1 className="display-4 fw-black text-dark mb-3">شريكك الموثوق للإدارة</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
          نحن نوفر لك حلولاً ذكية وسريعة لتخليص كافة معاملاتك الحكومية والخاصة بدقة متناهية.
        </p>
      </motion.header>

      {/* Services Grid */}
      <main className="container pb-5">
        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-4">
              {/* إضافة أنيميشن لكل بطاقة عند الظهور */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12 }} // تأثير الـ Hover الأصلي مدمج هنا
                className="service-card shadow-sm border-0 h-100 p-4 bg-white position-relative overflow-hidden"
              >
                <div 
                  className="icon-box mb-4 d-flex align-items-center justify-content-center text-white shadow"
                  style={{ background: service.gradient }}
                >
                  {service.icon}
                </div>
                <h4 className="fw-bold mb-3">{service.title}</h4>
                <p className="text-secondary small">تقديم طلبات {service.title} بكل سهولة عبر منصتنا المتكاملة.</p>
                <a href="#" className="stretched-link text-decoration-none text-primary fw-bold mt-2 d-inline-block">اكتشف المزيد ←</a>
              </motion.div>
            </div>
          ))}
        </div>
      </main>

      {/* Custom Styles كما هي تماماً */}
      <style>{`
        @import url('https://googleapis.com');
        
        body {
          font-family: 'Cairo', sans-serif;
        }

        .service-card {
          border-radius: 24px;
          cursor: pointer;
        }

        .icon-box {
          width: 70px;
          height: 70px;
          border-radius: 18px;
        }

        .fw-black { font-weight: 900; }
      `}</style>
    </div>
  );
};

export default Home;
