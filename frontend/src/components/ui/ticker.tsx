import { memo } from 'react';

const TICKER_ITEMS = [
  '99.9% Uptime Guarantee',
  '10,000+ B2B Customers',
  '40+ Value-Added Services', 
  '24/7 Technical Support',
  '40+ Years of Excellence',
  'Fiber Internet up to 1Gbps',
  'Tier III Compliant Data Center',
  'Enterprise Voice Solutions',
  'AI & Automation Solutions',
  'Fast & Reliable Bulk SMS'
];

export const Ticker = memo(() => {
  return (
    <div className="text-white py-2 overflow-hidden relative" style={{ background: 'linear-gradient(90deg, hsl(242 57% 20%), hsl(226 100% 62%))' }}>
      <div className="flex animate-[ticker_40s_linear_infinite] whitespace-nowrap">
        {/* First set of items */}
        {TICKER_ITEMS.map((item, index) => (
          <span key={`first-${index}`} className="inline-flex items-center mx-8 text-sm font-medium">
            <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
            {item}
          </span>
        ))}
        {/* Duplicate set for seamless loop */}
        {TICKER_ITEMS.map((item, index) => (
          <span key={`second-${index}`} className="inline-flex items-center mx-8 text-sm font-medium">
            <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
});

Ticker.displayName = 'Ticker';