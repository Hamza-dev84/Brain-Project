import { useState, useRef } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import AnimateOnScroll from "../animations/AnimateOnScroll";


const promotionalPlans = [
  {
    name: "Starter",
    rate: "3.60",
    planPrice: "18,000",
    tax: "6,737",
    total: "24,737",
    sms: "5,000",
    validity: "1 Month",
    masks: 1,
    popular: false,
  },
  {
    name: "Ready",
    rate: "3.50",
    planPrice: "35,000",
    tax: "13,099",
    total: "48,099",
    sms: "10,000",
    validity: "1 Month",
    masks: 1,
    popular: false,
  },
  {
    name: "Run",
    rate: "3.20",
    planPrice: "80,000",
    tax: "29,940",
    total: "109,940",
    sms: "25,000",
    validity: "2 Months",
    masks: 2,
    popular: false,
  },
  {
    name: "Good",
    rate: "3.10",
    planPrice: "155,000",
    tax: "58,009",
    total: "213,009",
    sms: "50,000",
    validity: "2 Months",
    masks: 3,
    popular: false,
  },
  {
    name: "Better",
    rate: "3.05",
    planPrice: "305,000",
    tax: "114,146",
    total: "419,146",
    sms: "100,000",
    validity: "2 Months",
    masks: 3,
    popular: true,
  },

  {
    name: "Best",
    rate: "3.00",
    planPrice: "750,000",
    tax: "280,688",
    total: "1,030,688",
    sms: "250,000",
    validity: "2 Months",
    masks: 5,
    popular: false,
  },

  {
    name: "Excellent",
    rate: "2.90",
    planPrice: "1,450,000",
    tax: "542,663",
    total: "1,992,663",
    sms: "500,000",
    validity: "2 Months",
    masks: 5,
    popular: false,
  },

  {
    name: "Awesome",
    rate: "2.80",
    planPrice: "2,800,000",
    tax: "1,047,900",
    total: "3,847,900",
    sms: "1,000,000",
    validity: "2 Months",
    masks: 5,
    popular: false,
  },

  {
    name: "Fantabulous",
    rate: "2.70",
    planPrice: "13,500,000",
    tax: "5,052,375",
    total: "18,552,375",
    sms: "5,000,000",
    validity: "2 Months",
    masks: 5,
    popular: false,
  },
];

const transactionalPlans = [
  {
    name: "Starter",
    rate: "4.30",
    planPrice: "21,500",
    tax: "8,046",
    total: "29,546",
    sms: "5,000",
    validity: "1 Month",
    masks: 1,
    popular: false,
  },
  {
    name: "Ready",
    rate: "4.20",
    planPrice: "42,000",
    tax: "15,719",
    total: "57,719",
    sms: "10,000",
    validity: "1 Month",
    masks: 1,
    popular: false,
  },
  {
    name: "Run",
    rate: "3.90",
    planPrice: "97,500",
    tax: "36,489",
    total: "133,989",
    sms: "25,000",
    validity: "2 Months",
    masks: 2,
    popular: false,
  },
  {
    name: "Good",
    rate: "3.80",
    planPrice: "190,000",
    tax: "71,108",
    total: "261,108",
    sms: "50,000",
    validity: "2 Months",
    masks: 3,
    popular: false,
  },
  {
    name: "Better",
    rate: "3.75",
    planPrice: "375,000",
    tax: "140,344",
    total: "515,344",
    sms: "100,000",
    validity: "2 Months",
    masks: 3,
    popular: true,
  },

  {
    name: "Best",
    rate: "3.70",
    planPrice: "925,000",
    tax: "346,181",
    total: "1,271,181",
    sms: "250,000",
    validity: "2 Months",
    masks: 5,
    popular: false,
  },

  {
    name: "Excellent",
    rate: "3.60",
    planPrice: "1,800,000",
    tax: "673,650",
    total: "2,473,650",
    sms: "500,000",
    validity: "2 Months",
    masks: 5,
    popular: false,
  },

  {
    name: "Awesome",
    rate: "3.50",
    planPrice: "3,500,000",
    tax: "1,309,875",
    total: "4,809,875",
    sms: "1,000,000",
    validity: "2 Months",
    masks: 5,
    popular: false,
  },

  {
    name: "Fantabulous",
    rate: "3.40",
    planPrice: "17,000,000",
    tax: "6,362,250",
    total: "23,362,250",
    sms: "5,000,000",
    validity: "2 Months",
    masks: 5,
    popular: false,
  },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("promotional");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const plans =
    activeTab === "promotional" ? promotionalPlans : transactionalPlans;

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -340,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 340,
      behavior: "smooth",
    });
  };

  return (
    <section id="pricing" className="py-8 md:py-16 bg-hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-6 md:mb-10">
            <p className="text-primary font-semibold text-lg sm:text-xl md:text-2xl mb-2">
              Transparent Pricing
            </p>

            <h2 className="text-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              BSMS Pricing Plans
            </h2>
          </div>
        </AnimateOnScroll>
        {/* TABS */}
        <div className="flex justify-center mb-8 md:mb-10 px-2">
          <div className="relative bg-white border border-gray-200 rounded-2xl p-1 flex shadow-sm w-full max-w-[550px]">
            <div
              className={`absolute top-1 bottom-1 w-1/2 rounded-xl bg-primary shadow-md transition-all duration-300 ease-in-out ${
                activeTab === "promotional" ? "left-1" : "left-1/2"
              }`}
            />

            <button
              onClick={() => setActiveTab("promotional")}
              className={`relative z-10 flex-1 px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-[11px] sm:text-sm md:text-base font-semibold whitespace-nowrap transition-colors duration-300 ${
                activeTab === "promotional"
                  ? "text-white"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Promotional SMS
            </button>

            <button
              onClick={() => setActiveTab("transactional")}
              className={`relative z-10 flex-1 px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-[11px] sm:text-sm md:text-base font-semibold whitespace-nowrap transition-colors duration-300 ${
                activeTab === "transactional"
                  ? "text-white"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Transactional SMS
            </button>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mb-3 lg:hidden">
          ← Swipe to view more plans →
        </p>

        {/* CAROUSEL */}
        <div className="relative">
          {/* LEFT BUTTON */}
          <button
            onClick={scrollLeft}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white border shadow-md rounded-full p-3 hover:bg-gray-50"
          >
            <ChevronLeft size={20} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white border shadow-md rounded-full p-3 hover:bg-gray-50"
          >
            <ChevronRight size={20} />
          </button>

          {/* SCROLL AREA */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-5 overflow-x-auto overflow-y-visible scroll-smooth snap-x snap-mandatory pt-6 pb-4 px-2 scrollbar-hide [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {plans.map((p) => (
              <div
                key={p.name}
                className={`snap-center w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[300px]
  flex-shrink-0 relative overflow-visible rounded-2xl p-5 md:p-6 bg-white border-2 transition-all
  ${
    p.popular
      ? "border-primary shadow-xl scale-[1.02]"
      : "border-border hover:shadow-lg"
  }`}
              >
                {p.popular && (
                  <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-50">
                    <span className="bg-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="font-bold text-lg sm:text-xl">{p.name}</h3>

                <div className="text-xs sm:text-sm text-muted-foreground">
                  {p.sms} SMS • {p.validity}
                </div>

                <div className="mt-5 pb-5 border-b">
                  <div className="text-2xl sm:text-3xl font-bold text-primary break-words">
                    Rs. {p.total}
                  </div>

                  <div className="text-xs text-muted-foreground mt-1">
                    Rs. {p.rate} per SMS
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-xs sm:text-sm">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Plan Price: {p.planPrice}</span>
                  </li>

                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Tax: {p.tax}</span>
                  </li>

                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>No. of Masks: {p.masks}</span>
                  </li>

                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>All Networks Supported</span>
                  </li>
                </ul>

                <a
                  href="#cta"
                  className={`mt-6 block w-full text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                    p.popular
                      ? "bg-primary text-white hover:opacity-90"
                      : "border border-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div className="bg-white border rounded-xl p-4">
            <strong className="text-primary">Sender ID Registration:</strong>
            <br />
            Rs. 4,000 one-time.
          </div>

          <div className="bg-white border rounded-xl p-4">
            <strong className="text-primary">Transactional SMS:</strong>
            <br />
            Requires Short Code package.
          </div>

          <div className="bg-white border rounded-xl p-4 sm:col-span-2 lg:col-span-1">
            <strong className="text-primary">Enterprise:</strong>
            <br />
            Custom pricing available for high volume.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

