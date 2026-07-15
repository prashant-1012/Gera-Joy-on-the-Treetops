
import { Award, Building2, MapPin, Sparkles } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '50+',
    label: 'Years of Legacy',
  },
  {
    icon: Award,
    value: 'Est. 1970',
    label: 'Gera Developments Founded',
  },
  {
    icon: MapPin,
    value: 'Pune, Goa, Bangalore',
    label: 'Presence Across Major Cities',
  },
  {
    icon: Sparkles,
    value: "Let's Outdo",
    label: 'Company Philosophy',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            About Gera Developments
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
            Founded in 1970, Gera Developments develops premium residential and commercial projects. The company has established a strong presence in Pune, Goa, and Bangalore with landmark projects.
          </p>
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-5">
            Gera Developments has introduced several firsts in the Indian real estate market, including a intelligent building, child-centric project. With over 50 years of experience, Gera Developments is driven by a future-focused vision and a <span className="font-semibold text-foreground">'Let's Outdo'</span> philosophy.
          </p>
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
            Built on trust, a customer-first approach, innovation, and uncompromising quality, we don't just build home, we create inspiring spaces that redefine modern living. By constantly pushing boundaries, we craft experiences that stand the test of time and shape the future of how we live.
          </p>
        </div>

      </div>
    </section>
  );
}
