export const WHATSAPP_NUMBER = "551151182800";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const CENTRAL_ASSINANTE_URL = "https://api.wnfibra.hubsoft.com.br/central/servico";

export type RegionGroup = "campinas" | "cotia";

export interface Plan {
  speed: string;
  price: string;
  priceNote?: string;
  features: string[];
  popular?: boolean;
  tvChannels?: string;
}

export const REGIONS: Record<RegionGroup, { label: string; cities: string[] }> = {
  campinas: {
    label: "Campinas e Região",
    cities: ["Campinas", "Hortolândia", "Sumaré"],
  },
  cotia: {
    label: "Cotia e Região",
    cities: ["Cotia", "Itapecerica da Serra", "Embu das Artes", "São Carlos"],
  },
};

export const PLANS: Record<RegionGroup, Plan[]> = {
  campinas: [
    {
      speed: "300 Mega",
      price: "99,90",
      features: ["100% Fibra Óptica", "WiFi-TOP", "Instalação Grátis", "Sem Franquia de Dados"],
      tvChannels: "+190 canais",
    },
    {
      speed: "600 Mega",
      price: "119,90",
      features: ["100% Fibra Óptica", "WiFi-TOP", "Instalação Grátis", "Sem Franquia de Dados"],
      popular: true,
      tvChannels: "+190 canais",
    },
  ],
  cotia: [
    {
      speed: "300 Mega",
      price: "109,90",
      features: ["100% Fibra Óptica", "WiFi-TOP", "Instalação Grátis", "Sem Franquia de Dados"],
      tvChannels: "+190 canais",
    },
    {
      speed: "600 Mega",
      price: "129,90",
      features: ["100% Fibra Óptica", "WiFi-TOP", "Instalação Grátis", "Sem Franquia de Dados"],
      popular: true,
      tvChannels: "+190 canais",
    },
  ],
};

export const TV_CATEGORIES = [
  "Esporte", "Notícias", "Filmes", "Desenhos", "Séries", "Entretenimento"
];

export const CONTACT = {
  phone: "(11) 5118-2800",
  email: "contato@pontocomfibra.com.br",
  address: "São Paulo, SP",
  facebook: "https://www.facebook.com/pontocomfibra",
  instagram: "https://www.instagram.com/pontocomfibra",
};
