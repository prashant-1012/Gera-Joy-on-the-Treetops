
import { Award, Building2, MapPin, Leaf } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '127+',
    label: 'Years of Godrej Legacy',
  },
  {
    icon: Award,
    value: 'Est. 1990',
    label: 'Godrej Properties Founded',
  },
  {
    icon: MapPin,
    value: 'Pan-India',
    label: 'Presence Across Major Cities',
  },
  {
    icon: Leaf,
    value: 'Good & Green',
    label: 'Sustainability Vision',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            About Godrej Properties
          </h2>
          <div className="mt-3 h-1 w-20 bg-custom-gold mx-auto" />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out delay-100">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center p-5 sm:p-6 bg-card rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              <div className="bg-custom-gold/10 rounded-full p-3 mb-3">
                <Icon className="h-6 w-6 text-custom-gold" />
              </div>
              <p className="text-xl sm:text-2xl font-bold text-primary mb-1">{value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{label}</p>
            </div>
          ))}
        </div>

        {/* Body text */}
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-200">
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-5">
            Godrej Properties Limited is the real estate arm of the 127-year-old Godrej Group, one of India's most trusted and diversified conglomerates. Established in 1990 and headquartered in Mumbai, the company has successfully translated its parent group's philosophy of innovation, sustainability, and excellence into the real estate sector.
          </p>
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-5">
            With a strong presence across major Indian cities, Godrej Properties is known for delivering high-quality residential and commercial developments that combine modern design with sustainable practices. The company has received numerous awards for its commitment to green building and cutting-edge architecture.
          </p>
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
            Guided by its <span className="font-semibold text-foreground">'Good & Green'</span> vision, the brand focuses on eco-friendly development, energy efficiency, and community-centric living. Known for transparency, reliability, and a customer-first approach, Godrej Properties continues to create future-ready homes that offer long-term value and elevated lifestyles.
          </p>
        </div>

      </div>
    </section>
  );
}
