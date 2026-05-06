import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Star, ExternalLink } from "lucide-react";
import { DetailsModalData } from "../constants/data";

const reviews = [
  {
    id: 1,
    client: "A and H Enterprise",
    industry: "Retail & Distribution",
    rating: 5,
    review: "misoftexpert delivered exceptional AMS system that streamlined our entire inventory management. The team was professional and delivered on time.",
    impact: "The project reduced manual tracking and improved order accuracy, delivering significant efficiency gains for retail operations.",
    project: {
      title: "Account & Inventory Management System (AMS)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      description: "A comprehensive AMS solution with real-time inventory tracking, sales analytics, automated reporting, and multi-user access control. Built with modern web technologies for scalability and security.",
      link: "https://ams.aandhenterprise.com/",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
    },
  },
  {
    id: 2,
    client: "Product Zoo BD",
    industry: "E-Commerce",
    rating: 5,
    review: "The e-commerce platform they built for us has increased our sales by 300%. Outstanding work and excellent support throughout the project.",
    impact: "This platform increased customer retention and gave Product Zoo BD a much faster checkout process with modern commerce features.",
    project: {
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
      description: "A full-featured e-commerce solution with product catalog, shopping cart, payment integration, order management, and customer dashboard. Includes inventory sync and analytics.",
      link: "https://productzoobd.com",
      technologies: ["React", "Next.js", "Stripe", "MongoDB"],
    },
  },
  {
    id: 3,
    client: "LGED",
    industry: "Government / Environmental Management",
    rating: 5,
    review: "The IWRM MIS system is exactly what we needed. The team understood our requirements perfectly and delivered a robust solution.",
    impact: "The system improved data accuracy and enabled LGED to better monitor environmental projects and report performance across teams.",
    project: {
      title: "IWRM MIS System",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      description: "A comprehensive MIS system for Integrated Water Resources Management with data visualization, reporting tools, and multi-stakeholder access management.",
      link: "http://103.140.64.90:83/",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Chart.js"],
    },
  },
  {
    id: 4,
    client: "DTMABD",
    industry: "Supply Chain & Logistics",
    rating: 5,
    review: "Professional service from start to finish. The AMS system they implemented has significantly improved our operational efficiency.",
    impact: "Their operational workflows now move faster, with more reliable inventory control and better financial visibility.",
    project: {
      title: "Account & Inventory Management System",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      description: "Custom AMS solution with advanced inventory tracking, financial reporting, user role management, and automated backup systems.",
      link: "https://ams.dtmabd.com/",
      technologies: ["React", "Node.js", "MySQL", "AWS"],
    },
  },
];

interface ClientReviewsProps {
  onReviewClick: (data: DetailsModalData) => void;
}

export const ClientReviews = ({ onReviewClick }: ClientReviewsProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with misoftexpert.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <Reveal key={review.id} delay={0.2 * index}>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() =>
                  onReviewClick({
                    title: review.project.title,
                    subtitle: review.industry,
                    image: review.project.image,
                    details: `${review.project.description} ${review.impact}`,
                  })
                }
                className="bg-slate-50 p-8 rounded-[32px] border border-slate-200 hover:border-brand-primary hover:shadow-xl hover:shadow-brand-primary/10 transition-all cursor-pointer group text-left w-full"
              >
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(review.rating)}
                </div>
                <blockquote className="text-slate-700 mb-6 leading-relaxed italic">
                  "{review.review}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <cite className="text-slate-900 font-bold not-italic">{review.client}</cite>
                    <p className="text-slate-500 text-sm">{review.industry}</p>
                  </div>
                  <div className="text-brand-primary group-hover:translate-x-1 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};