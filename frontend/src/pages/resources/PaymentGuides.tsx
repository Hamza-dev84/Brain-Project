import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Smartphone, Info, CreditCard, Landmark } from 'lucide-react';

// Import EasyPaisa step images
import easypaisaStep1 from "../../assets/payment-guides/easypaisa/easypaisa-1.png";
import easypaisaStep2 from "../../assets/payment-guides/easypaisa/easypaisa-2.png";
import easypaisaStep3 from "../../assets/payment-guides/easypaisa/easypaisa-3.png";
import easypaisaStep4 from "../../assets/payment-guides/easypaisa/easypaisa-4.png";
import easypaisaStep5 from "../../assets/payment-guides/easypaisa/easypaisa-5.png";

// Import JazzCash step images
import jazzcashStep1 from "../../assets/payment-guides/jazzcash/JazzCash-1.png";
import jazzcashStep2 from "../../assets/payment-guides/jazzcash/JazzCash-2.png";
import jazzcashStep3 from "../../assets/payment-guides/jazzcash/JazzCash-3.png";
import jazzcashStep4 from "../../assets/payment-guides/jazzcash/JazzCash-4.png";
import jazzcashStep5 from "../../assets/payment-guides/jazzcash/JazzCash-5.png";

// Import JazzCash step images
import meezanStep1 from "../../assets/payment-guides/meezan/Meezan-1.png";
import meezanStep2 from "../../assets/payment-guides/meezan/Meezan-2.png";
import meezanStep3 from "../../assets/payment-guides/meezan/Meezan-3.png";
import meezanStep4 from "../../assets/payment-guides/meezan/Meezan-4.png";
import meezanStep5 from "../../assets/payment-guides/meezan/Meezan-5.png";

// Import Brain BPAY step images
import bpayStep1 from "../../assets/payment-guides/bpay/bpay-step1.png";
import bpayStep2 from "../../assets/payment-guides/bpay/bpay-step2.png";
import bpayStep3 from "../../assets/payment-guides/bpay/bpay-step3.png";
import bpayStep4 from "../../assets/payment-guides/bpay/bpay-step4.png";
import bpayStep5 from "../../assets/payment-guides/bpay/bpay-step5.png";
import bpayStep6 from "../../assets/payment-guides/bpay/bpay-step6.png";
import bpayStep7 from "../../assets/payment-guides/bpay/bpay-step7.png";
import bpayStep8 from "../../assets/payment-guides/bpay/bpay-step8.png";

// Import 1Link step images
import onelinkStep1 from "../../assets/payment-guides/onelink/onelink-step1.png";
import onelinkStep2 from "../../assets/payment-guides/onelink/onelink-step2.png";
import onelinkStep3 from "../../assets/payment-guides/onelink/onelink-step3.png";
import onelinkStep4 from "../../assets/payment-guides/onelink/onelink-step4.png";

// Import payment method logos
import easypaisaLogo from "../../assets/payment-guides/easypaisa/easypaisa-logo.png";
import jazzcashLogo from "../../assets/payment-guides/jazzcash/jazzcash-logo.png";
// import bpayLogo from "../../assets/payment-guides/bpay/bpay-logo.png";
import bpayLogo from "../../assets/payment-guides/bpay/credit-card-logo.png";
import meezanLogo from "../../assets/payment-guides/meezan/meezan-bank-logo.png";
// import onelinkLogo from "../../assets/payment-guides/onelink/onelink-logo.png";
import onelinkLogo from "../../assets/payment-guides/onelink/oneLinklogo.png";

const paymentMethods = {
  jazzcash: {
    name: "JazzCash",
    color: "rgb(239, 68, 68)", // red-500
    bgColor: "rgba(239, 68, 68, 0.1)",
    borderColor: "rgba(239, 68, 68, 0.3)",
    steps: [
      {
        step: 1,
        title: "Open JazzCash App",
        description:
          "Login to JazzCash App and tap on Other Payments & Services",
        image: jazzcashStep1,
      },
      {
        step: 2,
        title: "Select Corporate Payments",
        description: 'Tap on "Corporate Payments" from Menu',
        image: jazzcashStep2,
      },
      {
        step: 3,
        title: "Select 1Bill (Invoice and Voucher)",
        description: 'Select "1Bill (Invoice and Voucher)" from list',
        image: jazzcashStep3,
      },
      {
        step: 4,
        title: "Enter Jazzcash Voucher Number",
        description:
          'In Voucher Number Enter the prefix 101430 followed by your invoice number and tap "Continue" ',
        image: jazzcashStep4,
      },
      {
        step: 5,
        title: "Review Payment Details",
        description: 'Review Bill Details and Tap "Confirm" to make payment ',
        image: jazzcashStep5,
      },
    ],
    importantInfo: {
      description:
        "To complete your payment through JazzCash, please follow the instructions below when entering the voucher/invoice number:",

      steps: [
        "Enter the Brain Onelink prefix 101430 before your invoice number.",
        "After the prefix, enter your actual invoice number.",
        "Combine both numbers without any spaces.",
      ],

      example: {
        invoice: "2198464",
        prefix: "101430",
        final: "1014302198464",
      },

      warning:
        "Please make sure the prefix and invoice number are entered exactly as shown to avoid payment failure.",
    },
  },
  easypaisa: {
    name: "EasyPaisa",
    color: "rgb(34, 197, 94)", // green-500
    bgColor: "rgba(34, 197, 94, 0.1)",
    borderColor: "rgba(34, 197, 94, 0.3)",
    steps: [
      {
        step: 1,
        title: "Open EasyPaisa App",
        description: 'Login to Easypaisa App and tap on "Bill Payment"',
        image: easypaisaStep1,
      },
      {
        step: 2,
        title: "Select Others",
        description: 'Tap on "Others" from menu ',
        image: easypaisaStep2,
      },
      {
        step: 3,
        title: "Choose 1 Bill Invoice/Voucher Option",
        description:
          "Search for 1 Bill Invoice/Voucher from the list and select it",
        image: easypaisaStep3,
      },
      {
        step: 4,
        title: "Enter Invoice Number",
        description:
          'In Consumer Number Enter the prefix 101430 followed by your invoice number and tap "Next" ',
        image: easypaisaStep4,
      },
      {
        step: 5,
        title: "Review Payment Details",
        description: 'Review Bill details and tap "Pay in Full"',
        image: easypaisaStep5,
      },
    ],
    importantInfo: {
      description:
        "To complete your payment through EasyPaisa, please follow the instructions below when entering the voucher/invoice number:",

      steps: [
        "Enter the Brain Onelink prefix 101430 before your invoice number.",
        "After the prefix, enter your actual invoice number.",
        "Combine both numbers without any spaces.",
      ],

      example: {
        invoice: "2198464",
        prefix: "101430",
        final: "1014302198464",
      },

      warning:
        "Please make sure the prefix and invoice number are entered exactly as shown to avoid payment failure.",
    },
  },
  meezan: {
    name: "Meezan",
    color: "#5A0F49", // Meezan purple
    bgColor: "rgba(90, 15, 73, 0.1)", // light purple background
    borderColor: "rgba(90, 15, 73, 0.3)", // light purple border
    steps: [
      {
        step: 1,
        title: "Open Meezan App",
        description: 'Login to Meezan App and tap on "Bill Payments" ',
        image: meezanStep1,
      },
      {
        step: 2,
        title: "Select Make A New Payment",
        description: 'Choose "Make A New Payment" method to pay your payment"',
        image: meezanStep2,
      },
      {
        step: 3,
        title: "Choose 1 BILL INVOICES",
        description: 'Select "1BILL INVOICES" option to continue"',
        image: meezanStep3,
      },
      {
        step: 4,
        title: "Enter Invoice Number",
        description:
          'In Consumer Number Enter the prefix 101430 followed by your invoice number and tap "Next" ',
        image: meezanStep4,
      },
      {
        step: 5,
        title: "Review Payment",
        description: "Review the payment details and tap Next",
        image: meezanStep5,
      },
    ],
    importantInfo: {
      description:
        "To complete your payment through Meezan, please follow the instructions below when entering the voucher/invoice number:",

      steps: [
        "Enter the Brain Onelink prefix 101430 before your invoice number.",
        "After the prefix, enter your actual invoice number.",
        "Combine both numbers without any spaces.",
      ],

      example: {
        invoice: "2198464",
        prefix: "101430",
        final: "1014302198464",
      },

      warning:
        "Please make sure the prefix and invoice number are entered exactly as shown to avoid payment failure.",
    },
  },
  bpay: {
    name: "BPAY",
    color: "rgb(59, 130, 246)", // blue-500
    bgColor: "rgba(59, 130, 246, 0.1)",
    borderColor: "rgba(59, 130, 246, 0.3)",
    steps: [
      {
        step: 1,
        title: "Select Service Type",
        description:
          "Visit pay.brain.net.pk and select your service type (Wifi Payment, Residential Internet, etc.)",
        image: bpayStep1,
      },
      {
        step: 2,
        title: "Enter Customer ID",
        description: "Enter your Customer ID and select your unpaid invoice",
        image: bpayStep2,
      },
      {
        step: 3,
        title: "Choose Payment Method",
        description:
          'Review your invoice details and click "Pay via Credit Card"',
        image: bpayStep3,
      },
      {
        step: 4,
        title: "Select Card Payment",
        description:
          'Select "Credit or Debit card" as your payment method and click Next',
        image: bpayStep4,
      },
      {
        step: 5,
        title: "Enter Card Details",
        description:
          "Enter your card number, expiry date, cardholder name, and security code",
        image: bpayStep5,
      },
      {
        step: 6,
        title: "Review Order",
        description:
          'Review your payment details and click "Pay now" to proceed',
        image: bpayStep6,
      },
      {
        step: 7,
        title: "OTP Verification",
        description:
          "Enter the One-Time Password sent to your registered mobile number and submit",
        image: bpayStep7,
      },
      {
        step: 8,
        title: "Payment Successful",
        description:
          "You will receive a confirmation with your invoice number and transaction details",
        image: bpayStep8,
      },
    ],
    importantInfo: {
      description:
        "To complete your payment through BPAY, please follow the instructions below when entering the voucher/invoice number:",

      steps: [
        "Enter the Brain Onelink prefix 101430 before your invoice number.",
        "After the prefix, enter your actual invoice number.",
        "Combine both numbers without any spaces.",
      ],

      example: {
        invoice: "2198464",
        prefix: "101430",
        final: "1014302198464",
      },

      warning:
        "Please make sure the prefix and invoice number are entered exactly as shown to avoid payment failure.",
    },
  },
  // onelink: {
  //   name: "1Link / 1Bill",
  //   color: "rgb(251, 146, 60)", // orange-500
  //   bgColor: "rgba(251, 146, 60, 0.1)",
  //   borderColor: "rgba(251, 146, 60, 0.3)",
  //   steps: [
  //     {
  //       step: 1,
  //       title: "Login to Your Bank Account",
  //       description:
  //         "Log in to any bank app that supports 1Link/1Bill payments (e.g., HBL, UBL, Meezan Bank, Bank Alfalah, etc.)",
  //       image: onelinkStep1,
  //     },
  //     {
  //       step: 2,
  //       title: "Add New Biller / One-Time Payment",
  //       description:
  //         'Navigate to Bill Payment section and select either "Add New Biller" for future payments or "One-Time Payment" for a single transaction',
  //       image: onelinkStep2,
  //     },
  //     {
  //       step: 3,
  //       title: "Review Biller Details",
  //       description:
  //         'Choose "Brain Telecommunication Ltd." (or Brain) from the biller list. When prompted for Customer Number / Voucher Number, enter: 101430 + [Your Invoice Number]. Example: For invoice 5678, enter 1014305678',
  //       image: onelinkStep3,
  //     },
  //     {
  //       step: 4,
  //       title: "Confirm Payment",
  //       description:
  //         'Review the payment details including consumer name, amount, due date, and bill status. Click "Next" or "Confirm" to complete the payment',
  //       image: onelinkStep4,
  //     },
  //   ],
  //   importantInfo: {
  //     description:
  //       "To complete your payment through OneLink, please follow the instructions below when entering the voucher/invoice number:",

  //     steps: [
  //       "Enter the Brain Onelink prefix 101430 before your invoice number.",
  //       "After the prefix, enter your actual invoice number.",
  //       "Combine both numbers without any spaces.",
  //     ],

  //     example: {
  //       invoice: "2198464",
  //       prefix: "101430",
  //       final: "1014302198464",
  //     },

  //     warning:
  //       "Please make sure the prefix and invoice number are entered exactly as shown to avoid payment failure.",
  //   },
  // },
};

export default function PaymentGuides() {
  const activeColors = {
    orange: "data-[state=active]:bg-orange-500/10",
    red: "data-[state=active]:bg-red-500/10",
    green: "data-[state=active]:bg-green-500/10",
    blue: "data-[state=active]:bg-blue-500/10",
    purple: "data-[state=active]:bg-purple-950/10",
  };

  const PAYMENT_METHODS = [
    {
      value: "onelink",
      logo: onelinkLogo,
      alt: "1Link",
      activeColor: "orange",
      top: true,
    },
    {
      value: "jazzcash",
      logo: jazzcashLogo,
      alt: "JazzCash",
      activeColor: "red",
    },
    {
      value: "easypaisa",
      logo: easypaisaLogo,
      alt: "EasyPaisa",
      activeColor: "green",
    },
    {
      value: "meezan",
      logo: meezanLogo,
      alt: "Meezan",
      activeColor: "purple",
    },
    {
      value: "bpay",
      logo: bpayLogo,
      alt: "BPAY",
      activeColor: "blue",
    },
  ];

  return (
    <>
      <PageMeta
        title="Payment Guides | JazzCash, EasyPaisa, Meezan & 1Link | BrainTEL"
        description="View BrainTEL payment guides for JazzCash, EasyPaisa, Meezan Bank, BPAY, and 1Link with step-by-step instructions to pay internet and telecom bills securely in Pakistan."
        // ogImage="/favicons/default.png"
      />
      <PageHeader
        breadcrumbs={[
          { label: "Company", path: "/company" },
          { label: "Payment Guides" },
        ]}
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <h1 className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg pb-12 text-center">
          Payment Guides
        </h1>
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="jazzcash" className="w-full">
            <TabsList className="grid grid-cols-4 w-full  mb-8 h-auto gap-4">
              {PAYMENT_METHODS.map((method) => {
                const isOneLink = method.value === "onelink";

                if (isOneLink) {
                  return (
                    <div
                      key={method.value}
                      className="col-span-4 flex justify-center rounded-sm py-6"
                      style={{ backgroundColor: "rgba(253, 190, 114, 0.5)" }}
                    >
                      <img
                        src={method.logo}
                        alt={method.alt}
                        className="h-12 w-auto"
                      />
                    </div>
                  );
                }

                return (
                  <TabsTrigger
                    key={method.value}
                    value={method.value}
                    className={`
        ${activeColors[method.activeColor]}
        py-6
      `}
                  >
                    <img
                      src={method.logo}
                      alt={method.alt}
                      className="h-12 w-auto"
                    />
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {Object.entries(paymentMethods).map(([key, method]) => (
              <TabsContent key={key} value={key} className="space-y-6">
                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {method.steps.map((stepData) => (
                    <Card
                      key={stepData.step}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                      style={{ borderColor: method.borderColor }}
                    >
                      <CardHeader
                        className="pb-3"
                        style={{ backgroundColor: method.bgColor }}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                            style={{ backgroundColor: method.color }}
                          >
                            {stepData.step}
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-base mb-1 line-clamp-2">
                              {stepData.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4 pb-4">
                        <div className="mb-3">
                          <img
                            src={stepData.image}
                            alt={`Step ${stepData.step}: ${stepData.title}`}
                            className="w-full h-auto my-4 rounded-lg shadow-md mx-auto max-w-[200px]"
                          />
                        </div>
                        <CardDescription className="text-sm leading-relaxed">
                          {stepData.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Important Information */}
                <Card
                  className="border-2 shadow-sm"
                  style={{
                    borderColor: method.borderColor,
                    backgroundColor: method.bgColor,
                  }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Info
                        className="w-5 h-5"
                        style={{ color: method.color }}
                      />
                      <CardTitle className="text-lg font-semibold">
                        Important Information
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Description */}
                    {method.importantInfo?.description && (
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {method.importantInfo.description}
                      </p>
                    )}

                    {/* Steps */}
                    {method.importantInfo?.steps && (
                      <div className="space-y-3">
                        {method.importantInfo.steps.map((step, index) => (
                          <div key={index} className="flex items-start gap-3">
                            {/* Step Circle */}
                            <div
                              className="flex items-center justify-center w-7 h-7 rounded-full text-white text-sm font-semibold"
                              style={{ backgroundColor: method.color }}
                            >
                              {index + 1}
                            </div>

                            {/* Step Text */}
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Example Box */}
                    {method.importantInfo?.example && (
                      <div className="bg-white border rounded-lg p-4 space-y-2 shadow-sm">
                        <p className="font-semibold text-sm text-gray-800">
                          Example
                        </p>

                        <div className="text-sm text-gray-700">
                          <span className="font-medium">Prefix:</span>{" "}
                          {method.importantInfo.example.prefix}
                        </div>

                        <div className="text-sm text-gray-700">
                          <span className="font-medium">Invoice Number:</span>{" "}
                          {method.importantInfo.example.invoice}
                        </div>

                        <div
                          className="text-sm font-semibold"
                          style={{ color: method.color }}
                        >
                          Final Consumer Number:{" "}
                          {method.importantInfo.example.final}
                        </div>
                      </div>
                    )}

                    {/* Warning */}
                    {method.importantInfo?.warning && (
                      <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-md">
                        <span className="text-lg">⚠️</span>

                        <p className="mt-2">{method.importantInfo.warning}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
}
