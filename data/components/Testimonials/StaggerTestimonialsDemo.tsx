import { StaggerTestimonials } from "@/data/components/ui/stagger-testimonials";

const StaggerTestimonialsDemo = () => {
  return (
    <section className="w-full py-20 bg-white" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
      <div className="max-w-[1990px] mx-auto w-full">
        <div className="mb-16">
          <p className="text-[16px] font-medium text-black font-['Manrope'] mb-4">Testimonials</p>
        </div>
        <StaggerTestimonials />
      </div>
    </section>
  );
};

export default StaggerTestimonialsDemo;
