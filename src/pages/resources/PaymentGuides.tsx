import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Smartphone, Info, CreditCard, Landmark } from 'lucide-react';

// Import EasyPaisa step images
import easypaisaStep1 from '@/assets/payment-guides/easypaisa-step1.webp';
import easypaisaStep2 from '@/assets/payment-guides/easypaisa-step2.webp';
import easypaisaStep3 from '@/assets/payment-guides/easypaisa-step3.webp';
import easypaisaStep4 from '@/assets/payment-guides/easypaisa-step4.webp';
import easypaisaStep5 from '@/assets/payment-guides/easypaisa-step5.webp';
import easypaisaStep6 from '@/assets/payment-guides/easypaisa-step6.webp';
import easypaisaStep7 from '@/assets/payment-guides/easypaisa-step7.webp';

// Import JazzCash step images
import jazzcashStep1 from '@/assets/payment-guides/jazzcash-step1.webp';
import jazzcashStep2 from '@/assets/payment-guides/jazzcash-step2.webp';
import jazzcashStep3 from '@/assets/payment-guides/jazzcash-step3.webp';
import jazzcashStep4 from '@/assets/payment-guides/jazzcash-step4.webp';
import jazzcashStep5 from '@/assets/payment-guides/jazzcash-step5.webp';
import jazzcashStep6 from '@/assets/payment-guides/jazzcash-step6.webp';

// Import Brain BPAY step images
import bpayStep1 from '@/assets/payment-guides/bpay-step1.webp';
import bpayStep2 from '@/assets/payment-guides/bpay-step2.webp';
import bpayStep3 from '@/assets/payment-guides/bpay-step3.webp';
import bpayStep4 from '@/assets/payment-guides/bpay-step4.webp';
import bpayStep5 from '@/assets/payment-guides/bpay-step5.webp';
import bpayStep6 from '@/assets/payment-guides/bpay-step6.webp';
import bpayStep7 from '@/assets/payment-guides/bpay-step7.webp';
import bpayStep8 from '@/assets/payment-guides/bpay-step8.webp';

// Import 1Link step images
import onelinkStep1 from '@/assets/payment-guides/onelink-step1.webp';
import onelinkStep2 from '@/assets/payment-guides/onelink-step2.webp';
import onelinkStep3 from '@/assets/payment-guides/onelink-step3.webp';
import onelinkStep4 from '@/assets/payment-guides/onelink-step4.webp';

// Import payment method logos
import easypaisaLogo from '@/assets/payment-guides/easypaisa-logo.webp';
import jazzcashLogo from '@/assets/payment-guides/jazzcash-logo.webp';
import bpayLogo from '@/assets/payment-guides/bpay-logo.png';
import onelinkLogo from '@/assets/payment-guides/onelink-logo.webp';

const paymentMethods = {
  easypaisa: {
    name: 'EasyPaisa',
    color: 'rgb(34, 197, 94)', // green-500
    bgColor: 'rgba(34, 197, 94, 0.1)',
    borderColor: 'rgba(34, 197, 94, 0.3)',
    steps: [
      {
        step: 1,
        title: 'Open EasyPaisa App',
        description: 'Launch the EasyPaisa app and tap on "Send Money"',
        image: easypaisaStep1,
      },
      {
        step: 2,
        title: 'Select Bank Transfer',
        description: 'From the "Send Money To" options, select "Bank Transfer"',
        image: easypaisaStep2,
      },
      {
        step: 3,
        title: 'Choose Mobilink Microfinance Bank',
        description: 'Search for and select "Mobilink Microfinance Bank" from the list',
        image: easypaisaStep3,
      },
      {
        step: 4,
        title: 'Enter Account Details',
        description: 'Enter account number "03276222888" and select "Bill Payment" as the purpose',
        image: easypaisaStep4,
      },
      {
        step: 5,
        title: 'Enter Amount',
        description: 'Enter the amount you want to pay for your bill',
        image: easypaisaStep5,
      },
      {
        step: 6,
        title: 'Confirm Transaction',
        description: 'Review the transaction details showing Brain Tel account information and confirm',
        image: easypaisaStep6,
      },
      {
        step: 7,
        title: 'Payment Successful',
        description: 'You will receive a confirmation that the payment has been successfully sent',
        image: easypaisaStep7,
      },
    ],
    importantInfo: [
      { label: 'Account Title', value: 'Brain Tel' },
      { label: 'Bank', value: 'Mobilink Microfinance Bank' },
      { label: 'Account Number', value: '03276222888' },
      { label: 'Purpose of Payment', value: 'Bill Payment' },
      { label: 'Note', value: 'Money will be sent from EasyPaisa to receiver\'s bank account. Please confirm with receiver.' },
    ],
  },
  jazzcash: {
    name: 'JazzCash',
    color: 'rgb(239, 68, 68)', // red-500
    bgColor: 'rgba(239, 68, 68, 0.1)',
    borderColor: 'rgba(239, 68, 68, 0.3)',
    steps: [
      {
        step: 1,
        title: 'Open JazzCash App',
        description: 'Launch the JazzCash app and tap on the QR code scanner at the bottom',
        image: jazzcashStep1,
      },
      {
        step: 2,
        title: 'Select Enter Till ID',
        description: 'On the QR scanner screen, tap on "Enter Till ID" button',
        image: jazzcashStep2,
      },
      {
        step: 3,
        title: 'Enter Till ID',
        description: 'Enter the Till ID "01420058" and tap Continue',
        image: jazzcashStep3,
      },
      {
        step: 4,
        title: 'Enter Amount to Pay',
        description: 'Enter the amount you want to pay for your BRAIN TEL bill',
        image: jazzcashStep4,
      },
      {
        step: 5,
        title: 'Review Payment',
        description: 'Review the payment details showing BRAIN TEL (01420058) and tap Confirm',
        image: jazzcashStep5,
      },
      {
        step: 6,
        title: 'Payment Successful',
        description: 'You will receive a confirmation receipt with the transaction ID',
        image: jazzcashStep6,
      },
    ],
    importantInfo: [
      { label: 'Business Name', value: 'Brain Tel' },
      { label: 'Till ID', value: '01420058' },
      { label: 'Payment Type', value: 'QR Payment' },
      { label: 'Note', value: 'Make sure to enter the correct Till ID to ensure your payment is credited to your account.' },
    ],
  },
  bpay: {
    name: 'BPAY',
    color: 'rgb(59, 130, 246)', // blue-500
    bgColor: 'rgba(59, 130, 246, 0.1)',
    borderColor: 'rgba(59, 130, 246, 0.3)',
    steps: [
      {
        step: 1,
        title: 'Select Service Type',
        description: 'Visit pay.brain.net.pk and select your service type (Wifi Payment, Residential Internet, etc.)',
        image: bpayStep1,
      },
      {
        step: 2,
        title: 'Enter Customer ID',
        description: 'Enter your Customer ID and select your unpaid invoice',
        image: bpayStep2,
      },
      {
        step: 3,
        title: 'Choose Payment Method',
        description: 'Review your invoice details and click "Pay via Credit Card"',
        image: bpayStep3,
      },
      {
        step: 4,
        title: 'Select Card Payment',
        description: 'Select "Credit or Debit card" as your payment method and click Next',
        image: bpayStep4,
      },
      {
        step: 5,
        title: 'Enter Card Details',
        description: 'Enter your card number, expiry date, cardholder name, and security code',
        image: bpayStep5,
      },
      {
        step: 6,
        title: 'Review Order',
        description: 'Review your payment details and click "Pay now" to proceed',
        image: bpayStep6,
      },
      {
        step: 7,
        title: 'OTP Verification',
        description: 'Enter the One-Time Password sent to your registered mobile number and submit',
        image: bpayStep7,
      },
      {
        step: 8,
        title: 'Payment Successful',
        description: 'You will receive a confirmation with your invoice number and transaction details',
        image: bpayStep8,
      },
    ],
    importantInfo: [
      { label: 'Payment Portal', value: 'pay.brain.net.pk' },
      { label: 'Accepted Cards', value: 'Visa, Mastercard, and other major cards' },
      { label: 'Payment Type', value: 'Online Debit/Credit Card' },
      { label: 'Security', value: 'Secure payment processing with OTP verification' },
      { label: 'Note', value: 'Keep your phone close during payment for OTP verification sent by BRAIN TELECOMMUNICATIONS.' },
    ],
  },
  onelink: {
    name: '1Link / 1Bill',
    color: 'rgb(251, 146, 60)', // orange-500
    bgColor: 'rgba(251, 146, 60, 0.1)',
    borderColor: 'rgba(251, 146, 60, 0.3)',
    steps: [
      {
        step: 1,
        title: 'Login to Your Bank Account',
        description: 'Log in to any bank app that supports 1Link/1Bill payments (e.g., HBL, UBL, Meezan Bank, Bank Alfalah, etc.)',
        image: onelinkStep1,
      },
      {
        step: 2,
        title: 'Add New Biller / One-Time Payment',
        description: 'Navigate to Bill Payment section and select either "Add New Biller" for future payments or "One-Time Payment" for a single transaction',
        image: onelinkStep2,
      },
      {
        step: 3,
        title: 'Review Biller Details',
        description: 'Choose "Brain Telecommunication Ltd." (or Brain) from the biller list. When prompted for Customer Number / Voucher Number, enter: 101430 + [Your Invoice Number]. Example: For invoice 5678, enter 1014305678',
        image: onelinkStep3,
      },
      {
        step: 4,
        title: 'Confirm Payment',
        description: 'Review the payment details including consumer name, amount, due date, and bill status. Click "Next" or "Confirm" to complete the payment',
        image: onelinkStep4,
      },
    ],
    importantInfo: [
      { label: 'Biller Name', value: 'Brain Telecommunication Ltd.' },
      { label: 'Customer Number Format', value: '101430 + [Your Invoice Number]' },
      { label: 'Example', value: 'For invoice 5678, enter 1014305678' },
      { label: 'Supported Banks', value: 'All 1Link/1Bill connected banks (HBL, UBL, Meezan, Bank Alfalah, etc.)' },
      { label: 'Note', value: 'The same steps apply to payments made through any other 1Link-connected bank account.' },
    ],
  },
};

export default function PaymentGuides() {
  return (
    <>
      {/* <PageMeta 
        title="Payment Methods | JazzCash, EasyPaisa | BrainTEL"
        description="Easy payment options for BrainTEL services. Pay via JazzCash, EasyPaisa, bank transfer, or online. Step-by-step payment guides."
      /> */}
      <PageMeta
        title="Payment Guides | JazzCash, EasyPaisa, Meezan & 1Link | BrainTEL"
        description="View BrainTEL payment guides for JazzCash, EasyPaisa, Meezan Bank, BPAY, and 1Link with step-by-step instructions to pay internet and telecom bills securely in Pakistan."
        // ogImage="/favicons/default.png"
      />
      <PageHeader
        title="Payment Guides"
        description="Easy step-by-step guides to pay your bills digitally or by cash"
        breadcrumbs={[
          { label: 'Company', path: '/company' },
          { label: 'Payment Guides' }
        ]}
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="easypaisa" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8 h-auto p-2">
              <TabsTrigger
                value="easypaisa"
                className="data-[state=active]:bg-green-500/10 py-6"
              >
                <img width={400} height={400} loading="lazy" decoding="async" src={easypaisaLogo} alt="EasyPaisa" className="h-12 w-auto" />
              </TabsTrigger>
              <TabsTrigger
                value="jazzcash"
                className="data-[state=active]:bg-red-500/10 py-6"
              >
                <img width={1024} height={1024} loading="lazy" decoding="async" src={jazzcashLogo} alt="JazzCash" className="h-12 w-auto" />
              </TabsTrigger>
              <TabsTrigger
                value="bpay"
                className="data-[state=active]:bg-blue-500/10 py-6"
              >
                <img width={2031} height={526} loading="lazy" decoding="async" src={bpayLogo} alt="BPAY" className="h-12 w-auto" />
              </TabsTrigger>
              <TabsTrigger
                value="onelink"
                className="data-[state=active]:bg-orange-500/10 py-6"
              >
                <img width={329} height={307} loading="lazy" decoding="async" src={onelinkLogo} alt="1Link" className="h-12 w-auto" />
              </TabsTrigger>
            </TabsList>

            {Object.entries(paymentMethods).map(([key, method]) => (
              <TabsContent key={key} value={key} className="space-y-6">
                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {method.steps.map((stepData) => (
                    <Card
                      key={stepData.step}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                      style={{ borderColor: method.borderColor }}
                    >
                      <CardHeader className="pb-3" style={{ backgroundColor: method.bgColor }}>
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
                          <img loading="lazy" decoding="async"
                            src={stepData.image}
                            alt={`Step ${stepData.step}: ${stepData.title}`}
                            className="w-full h-auto rounded-lg shadow-md mx-auto max-w-[200px]"
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
                  className="border-2"
                  style={{
                    borderColor: method.borderColor,
                    backgroundColor: method.bgColor
                  }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Info className="w-5 h-5" style={{ color: method.color }} />
                      <CardTitle className="text-lg">Important Information</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {method.importantInfo.map((info, index) => (
                        <div key={index} className="flex flex-col gap-1">
                          <span className="text-sm text-neutral-medium font-medium">
                            {info.label}:
                          </span>
                          <span className="text-base text-foreground font-semibold">
                            {info.value}
                          </span>
                        </div>
                      ))}
                    </div>
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
