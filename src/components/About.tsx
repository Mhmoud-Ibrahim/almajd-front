import React from 'react';
import { motion } from 'framer-motion'; // استيراد فريمر موشن
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { 
  GeoAltFill, ClockFill, TelephoneFill, AwardFill,
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
  { id: 1, title: 'إصدار وتجديد هوية', icon: <PersonBadge size={30} />, gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { id: 2, title: 'عقد عمل', icon: <FileEarmarkText size={30} />, gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
  { id: 3, title: 'تأمين', icon: <ShieldCheck size={30} />, gradient: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)' },
  { id: 4, title: 'مكتب محاسبي', icon: <Calculator size={30} />, gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
  { id: 5, title: 'حجوزات طيران', icon: <RocketTakeoff size={30} />, gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' },
  { id: 6, title: 'بنية تحتية', icon: <Truck size={30} />, gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' },
];

const About: React.FC = () => {
  return (
    <div dir="rtl" className="bg-light py-5 overflow-hidden">
      <div className="container">
        
        {/* Section 1: Hero About */}
        <div className="row align-items-center mb-5 pb-lg-5">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-lg-6 mb-4 mb-lg-0"
          >
            <div className="position-relative">
              <div className="bg-primary rounded-4 position-absolute w-100 h-100" style={{ top: '20px', right: '-20px', zIndex: 0, opacity: 0.1 }}></div>
              <img 
                src="https://unsplash.com" 
                alt="الموظف المسؤول" 
                className="img-fluid rounded-4 shadow-lg position-relative" 
                style={{ zIndex: 1, width: '100%', height: '500px', objectFit: 'cover' }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-lg-6 ps-lg-5"
          >
            <h6 className="text-primary fw-bold text-uppercase mb-2">تعرف علينا</h6>
            <h2 className="display-5 fw-black mb-4" style={{ fontWeight: 900 }}>من نحن ؟</h2>
            <p className="lead text-muted mb-4">
              وجهة متخصصة في تقديم حلول متكاملة لرجال الأعمال والأفراد في دولة الإمارات، نركز على الدقة والسرعة.
            </p>
            <div className="d-flex align-items-start mb-3 p-3 bg-white rounded-3 shadow-sm border-end border-primary border-4">
              <AwardFill className="text-primary ms-3" size={30} />
              <p className="mb-0 fw-semibold">نتميز بتقديم باقة واسعة من الخدمات تشمل تأسيس الشركات وتخليص المعاملات.</p>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Services Grid */}
        <div className="row g-4 mb-5">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="service-card shadow-sm border-0 h-100 p-4 bg-white rounded-4 position-relative">
                <div 
                  className="icon-box mb-4 d-flex align-items-center justify-content-center text-white shadow"
                  style={{ background: service.gradient, width: '60px', height: '60px', borderRadius: '15px' }}
                >
                  {service.icon}
                </div>
                <h4 className="fw-bold mb-3">{service.title}</h4>
                <p className="text-secondary small">نقدم خدمة {service.title} بأعلى معايير الجودة والسرعة المطلوبة.</p>
                <a href="#" className="stretched-link text-decoration-none text-primary fw-bold small">اكتشف المزيد ←</a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 3: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-5 shadow-sm p-4 p-md-5 border"
        >
          <div className="row g-4">
            <div className="col-12 mb-2 text-center">
              <h4 className="fw-bold">تواصل معنا الآن</h4>
              <div className="mx-auto bg-primary rounded" style={{ width: '50px', height: '4px' }}></div>
            </div>
            {[
              { icon: <GeoAltFill />, title: "الموقع", detail: "الفجيرة - ثوبان - طريق الذيد" },
              { icon: <ClockFill />, title: "ساعات العمل", detail: "8ص - 2ظ | 4ع - 8م" },
              { icon: <TelephoneFill />, title: "رقم التواصل", detail: "+971588137468", ltr: true }
            ].map((info, i) => (
              <div key={i} className="col-md-4 text-center">
                <div className="text-primary mb-2 fs-3">{info.icon}</div>
                <h6 className="fw-bold">{info.title}</h6>
                <p className={`text-muted small ${info.ltr ? 'ls-0' : ''}`} dir={info.ltr ? 'ltr' : 'rtl'}>{info.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        @import url('https://googleapis.com');
        body { font-family: 'Cairo', sans-serif !important; background-color: #f8f9fa; }
        .service-card { transition: box-shadow 0.3s ease; }
        .service-card:hover { box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important; }
      `}</style>
    </div>
  );
};

export default About;
