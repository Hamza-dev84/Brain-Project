export interface CoverageArea {
  id: string;
  name: string;
  available: boolean;
  suburbs?: string[];
}

export interface Package {
  id: string;
  badge: string;
  speed: string;
  features: string[];
  price: number;
  taxNote: string;
}

export const homePackages: Package[] = [
  {
    id: 'home-1',
    badge: 'PAY FOR 8 MBPS AND ENJOY',
    speed: '15 Mbps',
    features: [
      'For the first 3 months, free installation charges',
      'HDTV - Bundle Offers',
      'Telephony - Rs. 2 /min',
      'CCTV - Contact for Pricing',
    ],
    price: 1799,
    taxNote: '/+TAX',
  },
  {
    id: 'home-2',
    badge: 'PAY FOR 15 MBPS AND ENJOY',
    speed: '25 Mbps',
    features: [
      'For the first 3 months, free installation charges',
      'HDTV - Bundle Offers',
      'Telephony - 100 minutes',
      'CCTV - Contact for Pricing',
    ],
    price: 1999,
    taxNote: '/+TAX',
  },
  {
    id: 'home-3',
    badge: 'PAY FOR 25 MBPS AND ENJOY',
    speed: '35 Mbps',
    features: [
      'For the first 3 months, free installation charges',
      'HDTV - Bundle Offers',
      'Telephony - 100 minutes',
      'CCTV - Contact for Pricing',
    ],
    price: 2499,
    taxNote: '/+TAX',
  },
  {
    id: 'home-4',
    badge: 'PAY FOR 35 MBPS AND ENJOY',
    speed: '55 Mbps',
    features: [
      'For the first 3 months, free installation charges',
      'HDTV - Bundle Offers',
      'Telephony - 100 minutes',
      'CCTV - Contact for Pricing',
    ],
    price: 3799,
    taxNote: '/+Tax',
  },
  {
    id: 'home-5',
    badge: 'QUADPLAY',
    speed: '55 Mbps',
    features: ['HDTV - Bundle Offers', 'Telephony - 100 minutes', 'CCTV - Contact for Pricing'],
    price: 5899,
    taxNote: '/+Tax',
  },
  {
    id: 'home-6',
    badge: 'FREE INSTALLATION!',
    speed: '110 Mbps',
    features: ['HDTV - Bundle Offers', 'Telephony - 100 minutes', 'CCTV - Contact for Pricing'],
    price: 11299,
    taxNote: '/+Tax',
  },
  {
    id: 'home-7',
    badge: 'FREE INSTALLATION!',
    speed: '500 Mbps',
    features: ['HDTV - Bundle Offers', 'Telephony - 100 minutes', 'CCTV - Contact for Pricing'],
    price: 16499,
    taxNote: '/+Tax',
  },
  {
    id: 'home-8',
    badge: 'FREE INSTALLATION!',
    speed: '1 Gbps',
    features: ['HDTV - Bundle Offers', 'Telephony - 100 minutes', 'CCTV - Contact for Pricing'],
    price: 25499,
    taxNote: '/+Tax',
  },
];

export const businessPackages = [
  { id: 'business-1', name: '5 to 1000 Mbps - CIR Plan' },
  { id: 'business-2', name: '5 to 1000 GBs - Volume Plan' },
  { id: 'business-3', name: 'Custom Plan' },
];

export const coverageAreas: CoverageArea[] = [
  {
    id: '1',
    name: 'Allama Iqbal Town',
    available: true,
    suburbs: ['Nizam Block', 'Neelam Block', 'Gulshan Block', 'Kareem Block', 'Umer Block', 'Karim Block', 'Ravi Block', 'Pak Block', 'Kashmir Block', 'Raza Block', 'Sikandar Block', 'Sutlaj Block', 'Asif Block', 'College Block', 'Moon Market'],
  },
  {
    id: '2',
    name: 'Mustafa Town',
    available: true,
    suburbs: ['Mamdot Block', 'Hadayatullah Block', 'Qayyum Block', 'Abbas Block', 'Shahbaz Block', 'Ahmed Block'],
  },
  {
    id: '3',
    name: 'New Muslim Town',
    available: true,
    suburbs: ['Block A', 'Block B', 'Block C', 'Block D', 'Ayubia Market'],
  },
  {
    id: '4',
    name: 'Old Muslim Town',
    available: true,
    suburbs: ['Ilyas Street', 'Faiz Street', 'Islam Street', 'Firdos Street', 'Adnan Center', 'Hussain Street', 'Liayaqat Street'],
  },
  {
    id: '5',
    name: 'Garden Town',
    available: true,
    suburbs: ['Tipu Block', 'Abu Bakr Block', 'Ahmed Block', 'Garden Block', 'Ali Block', 'Usman Block', 'Babar Block', 'Aibak Block', 'Tariq Block', 'Central Plaza', 'Barkat Market', 'Ahad Tower', 'Awami Flats', 'Civic Center', 'Qadir Heights', 'Garden Heights'],
  },
  {
    id: '6',
    name: 'Main Gulberg',
    available: true,
    suburbs: ['Sterling Residence', 'Gulberg Galleria', 'Mega Tower', 'Main Gulberg Road', 'Happy Homes', 'Eden Heights'],
  },
  {
    id: '7',
    name: 'Gulberg II',
    available: true,
    suburbs: ['Main Boulevard Gulberg', 'City Tower', 'Mini Market', 'Main Market', 'Siddiq Trade Center', 'McDonalds Gulberg'],
  },
  {
    id: '8',
    name: 'Gulberg III',
    available: true,
    suburbs: ['Block A1', 'Block A2', 'Block A3', 'Block B1', 'Block B2', 'Block B3', 'Block C1', 'Block C2', 'Block C3', 'Block E1', 'Block E2', 'Block E3', 'Block D', 'Block G', 'Block J', 'Block H', 'Block M', 'Block P', 'M.M Alam Road', 'Ghalib Road', 'Ghalib Market', 'Firdous Market', 'Noor Jahan Road', 'Liberty Market', 'Kalma Chowk', 'Gaddafi Stadium', 'Gurumangat Road', 'Ferozepur Road', 'Tipu Road', 'Ali Tower', 'Big City', 'Park Plaza', 'Hafeez Center', 'Gulberg Center', 'Ejaz Center', 'Al Hafeez Mall', 'Al Hafeez View', 'Al Hafeez Suites', 'Al Hafeez Tower', 'Al Hafeez Heights', 'Lahore Center', 'Eden Heights', 'Mall of Gulberg', 'MM Tower'],
  },
  { id: '9', name: 'Gulberg IV', available: true, suburbs: ['Complete Coverage'] },
  {
    id: '10',
    name: 'Cavalry Ground',
    available: true,
    suburbs: ['Street 1', 'Street 2', 'Street 3', 'Street 4', 'Street 5', 'Street 6', 'Street 7'],
  },
  { id: '11', name: 'Tech Society', available: true, suburbs: ['Partial Coverage'] },
  {
    id: '12',
    name: 'Johar Town',
    available: true,
    suburbs: ['Block G1', 'Block G2', 'Block G3', 'Block H', 'Block H1', 'Block H2', 'Block H3', 'Block J', 'Block J1', 'Block J2', 'Block J3', 'Block N', 'Block P', 'Block Q', 'Block R1', 'Block R2', 'Block R3', 'Expo Center', 'Khokar Chowk', 'PCSIR', 'Main Boulevard', 'Doctors Hospital', 'Aitchison Society', 'Malik Nadeem Road', 'Aitchison Street', 'Nawab Town'],
  },
  {
    id: '13',
    name: 'Model Town',
    available: true,
    suburbs: ['Block A', 'Block B', 'Block C', 'Block D', 'Block E', 'Block F', 'Block G', 'Block H', 'Block I', 'Block K', 'Block L', 'Block M', 'Block N', 'Block P', 'Block Q', 'Block R', 'Link Road'],
  },
  {
    id: '14',
    name: 'FCC',
    available: true,
    suburbs: ['Zahoor Elahi Road', 'Syed Maratab Ali Road', 'Sikandar Malhi Road'],
  },
  {
    id: '15',
    name: 'Mall Road',
    available: true,
    suburbs: ['Zaman Park', 'Sunder-Das Road', 'Davis Road', 'Lahore Chamber of Commerce Road', 'Shimla-Pahari', 'Edgerton Road', 'Bank-Square Mall Road', 'Hall Road', 'Session Court Lahore', 'Secretariat'],
  },
  {
    id: '16',
    name: 'Jail Road',
    available: true,
    suburbs: ['Shadman 1', 'Shadman 2', 'Lawrence Road', 'Mozang Road', 'Waris Road', 'Abid Market', 'Eden Centre', 'Institute of Cardiology', 'Land-Mark Plaza', 'EFU Building', 'Services Hospital', 'GOR Race Course'],
  },
];
