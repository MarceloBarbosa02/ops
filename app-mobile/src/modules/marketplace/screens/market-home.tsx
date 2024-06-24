import { ChevronRightIcon } from '@/shared/assets';
import {
  Button,
  HeaderSearch,
  LayoutStackScreen,
  Typography,
} from '@/shared/components';
import { router } from 'expo-router';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { HeaderMarket } from '../components/cards/header';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@/shared/theme';
import { AllProducts } from '../components/cards/category';
import { useCategory } from '../components/cards/category/use-category';

function MarketHomeScreen() {
  const { top, bottom } = useSafeAreaInsets();
  const { changeScrollY } = useCategory();

  return (
    <View className={'flex-1 bg-gray-950'}>
      <StatusBar style={'light'} translucent />
      <View
        style={{
          flex: 1,
          marginTop: top,
          backgroundColor: colors.gray[50],
        }}>
        <HeaderMarket />
        <HeaderSearch quantity={1} />
        <View className="flex-1 bg-gray-300">
          <AllProducts />
        </View>
      </View>
    </View>
  );
}

export default MarketHomeScreen;

export const rentable = [
  {
    uuid: 'bed2395b-c131-4abf-be07-d569a45e097d',
    categoryUuid: 'a8b35365-0e6a-46ac-855c-668d4de2af24',
    category: {
      uuid: 'a8b35365-0e6a-46ac-855c-668d4de2af24',
      name: 'Empreendedorismo Digital',
    },
    formatUuid: '45eb238e-70f2-11ed-bb23-641c67f3f71c',
    format: {
      uuid: '45eb238e-70f2-11ed-bb23-641c67f3f71c',
      name: 'E-book e arquivos',
    },
    name: 'KIT CASSINO SLOTS 1.500 JOGOS',
    producer: {
      uuid: '68ee7f29-2a84-4996-83af-bb6ca4cb200f',
      name: 'Daniel Fernando',
    },
    currency: 'BRL',
    maxCommission: 142550,
    scoreLevel: 'GROW',
    score: 1.4217,
    isAffiliated: false,
    affiliationStatus: null,
    affiliateUuid: null,
    isOwner: false,
    isCompanyOwner: false,
    photo:
      'https://s3.amazonaws.com/production.kirvano.com/products/bed2395b-c131-4abf-be07-d569a45e097d/cover-1717682452175.png',
    isCoproducer: false,
  },
  {
    uuid: 'b2d95c92-5ec7-487c-9229-000d6506529b',
    categoryUuid: 'a8b35365-0e6a-46ac-855c-668d4de2af24',
    category: {
      uuid: 'a8b35365-0e6a-46ac-855c-668d4de2af24',
      name: 'Empreendedorismo Digital',
    },
    formatUuid: '45eb238e-70f2-11ed-bb23-641c67f3f71c',
    format: {
      uuid: '45eb238e-70f2-11ed-bb23-641c67f3f71c',
      name: 'E-book e arquivos',
    },
    name: 'Tráfego Pago Casas De Apóstas',
    producer: {
      uuid: '68ee7f29-2a84-4996-83af-bb6ca4cb200f',
      name: 'Daniel Fernando',
    },
    currency: 'BRL',
    maxCommission: 81700,
    scoreLevel: 'GROW',
    score: 1,
    isAffiliated: false,
    affiliationStatus: null,
    affiliateUuid: null,
    isOwner: false,
    isCompanyOwner: false,
    photo:
      'https://s3.amazonaws.com/production.kirvano.com/products/b2d95c92-5ec7-487c-9229-000d6506529b/cover-1718232661424.png',
    isCoproducer: false,
  },
  {
    uuid: 'e06c9d37-9643-43df-ae19-d7d0d2165a1c',
    categoryUuid: '008f53b9-043e-4403-9a8e-4c97345e9989',
    category: {
      uuid: '008f53b9-043e-4403-9a8e-4c97345e9989',
      name: 'Apps & Software',
    },
    formatUuid: '45eb238e-70f2-11ed-bb23-641c67f3f713',
    format: {
      uuid: '45eb238e-70f2-11ed-bb23-641c67f3f713',
      name: 'Serviço',
    },
    name: 'Voicefy - Ilimitado',
    producer: {
      uuid: '65dd3991-b972-464f-ad76-f231d3017589',
      name: 'Mizael Xavier',
    },
    currency: 'BRL',
    maxCommission: 61572,
    scoreLevel: 'GROW',
    score: 6.5759,
    isAffiliated: false,
    affiliationStatus: null,
    affiliateUuid: null,
    isOwner: false,
    isCompanyOwner: false,
    photo:
      'https://s3.amazonaws.com/production.kirvano.com/products/e06c9d37-9643-43df-ae19-d7d0d2165a1c/cover-1714699550497.png',
    isCoproducer: false,
  },
  {
    uuid: '36e1e8f5-657a-4f4f-9daa-ab59edc1de9d',
    categoryUuid: 'a6838b24-28e6-4f3d-9840-bab63ba81a22',
    category: {
      uuid: 'a6838b24-28e6-4f3d-9840-bab63ba81a22',
      name: 'Negócios e Carreira',
    },
    formatUuid: '45eb238e-70f2-11ed-bb23-641c67f3f713',
    format: {
      uuid: '45eb238e-70f2-11ed-bb23-641c67f3f713',
      name: 'Serviço',
    },
    name: 'Mentoria de bandas',
    producer: {
      uuid: '36d18b2b-da09-44a7-858b-de79100ab7b1',
      name: 'Edson Peixoto Melo Neto',
    },
    currency: 'BRL',
    maxCommission: 42735,
    scoreLevel: 'GROW',
    score: 1,
    isAffiliated: false,
    affiliationStatus: null,
    affiliateUuid: null,
    isOwner: false,
    isCompanyOwner: false,
    photo:
      'https://s3.amazonaws.com/production.kirvano.com/products/36e1e8f5-657a-4f4f-9daa-ab59edc1de9d/cover-1718907508253.png',
    isCoproducer: false,
  },
  {
    uuid: '59ad2d97-4e79-447e-95c0-e0c1c5594215',
    categoryUuid: 'a8b35365-0e6a-46ac-855c-668d4de2af24',
    category: {
      uuid: 'a8b35365-0e6a-46ac-855c-668d4de2af24',
      name: 'Empreendedorismo Digital',
    },
    formatUuid: '45eb238e-70f2-11ed-bb23-641c67f3f712',
    format: {
      uuid: '45eb238e-70f2-11ed-bb23-641c67f3f712',
      name: 'Curso',
    },
    name: 'Método Imprimindo Dólar - Dropshipping',
    producer: {
      uuid: '19c01646-7b14-40b8-af8a-00647c33931f',
      name: 'Nathan Mazucato',
    },
    currency: 'BRL',
    maxCommission: 42576,
    scoreLevel: 'GROW',
    score: 1.4514,
    isAffiliated: false,
    affiliationStatus: null,
    affiliateUuid: null,
    isOwner: false,
    isCompanyOwner: false,
    photo:
      'https://s3.amazonaws.com/production.kirvano.com/products/59ad2d97-4e79-447e-95c0-e0c1c5594215/cover-1712955233307.png',
    isCoproducer: false,
  },
  {
    uuid: '87c82ae4-b973-48fc-a56f-6981e1712836',
    categoryUuid: 'a8b35365-0e6a-46ac-855c-668d4de2af24',
    category: {
      uuid: 'a8b35365-0e6a-46ac-855c-668d4de2af24',
      name: 'Empreendedorismo Digital',
    },
    formatUuid: '45eb238e-70f2-11ed-bb23-641c67f3f71c',
    format: {
      uuid: '45eb238e-70f2-11ed-bb23-641c67f3f71c',
      name: 'E-book e arquivos',
    },
    name: 'KIT CASSINO SLOTS 500 JOGOS',
    producer: {
      uuid: '68ee7f29-2a84-4996-83af-bb6ca4cb200f',
      name: 'Daniel Fernando',
    },
    currency: 'BRL',
    maxCommission: 40807,
    scoreLevel: 'GROW',
    score: 1,
    isAffiliated: false,
    affiliationStatus: null,
    affiliateUuid: null,
    isOwner: false,
    isCompanyOwner: false,
    photo:
      'https://s3.amazonaws.com/production.kirvano.com/products/87c82ae4-b973-48fc-a56f-6981e1712836/cover-1718236452264.png',
    isCoproducer: false,
  },
  {
    uuid: 'f904cd9b-35d4-456f-88a8-a457534baae0',
    categoryUuid: 'c3bd89b1-0aac-4e13-9963-160affce9a44',
    category: {
      uuid: 'c3bd89b1-0aac-4e13-9963-160affce9a44',
      name: 'Finanças e Investimentos',
    },
    formatUuid: '45eb238e-70f2-11ed-bb23-641c67f3f712',
    format: {
      uuid: '45eb238e-70f2-11ed-bb23-641c67f3f712',
      name: 'Curso',
    },
    name: 'Mentoria Cristão Prospero',
    producer: {
      uuid: '92fa2a59-6f1e-4f02-b606-d0d82a3433a6',
      name: 'Breno junio',
    },
    currency: 'BRL',
    maxCommission: 32945,
    scoreLevel: 'GROW',
    score: 24.9913,
    isAffiliated: false,
    affiliationStatus: null,
    affiliateUuid: null,
    isOwner: false,
    isCompanyOwner: false,
    photo:
      'https://s3.amazonaws.com/production.kirvano.com/products/f904cd9b-35d4-456f-88a8-a457534baae0/cover-1717101743084.png',
    isCoproducer: false,
  },
  {
    uuid: '3bcf326d-1fb5-433e-9005-b89feb4359cb',
    categoryUuid: 'a8b35365-0e6a-46ac-855c-668d4de2af24',
    category: {
      uuid: 'a8b35365-0e6a-46ac-855c-668d4de2af24',
      name: 'Empreendedorismo Digital',
    },
    formatUuid: '45eb238e-70f2-11ed-bb23-641c67f3f712',
    format: {
      uuid: '45eb238e-70f2-11ed-bb23-641c67f3f712',
      name: 'Curso',
    },
    name: 'Aristocrata Prime',
    producer: {
      uuid: '46fa7161-757d-41a1-9f34-a676a509d840',
      name: 'Del Francco',
    },
    currency: 'BRL',
    maxCommission: 30592,
    scoreLevel: 'GROW',
    score: 10.5228,
    isAffiliated: false,
    affiliationStatus: null,
    affiliateUuid: null,
    isOwner: false,
    isCompanyOwner: false,
    photo:
      'https://s3.amazonaws.com/production.kirvano.com/products/3bcf326d-1fb5-433e-9005-b89feb4359cb/cover-1716056523798.png',
    isCoproducer: false,
  },
];
