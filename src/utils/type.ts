interface Name {
  common: string;
  official: string;
  nativeName: {
    ind: {
      official: string;
      common: string;
    };
  };
}

interface Currencies {
  IDR: {
    name: string;
    symbol: string;
  };
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Languages {
  ind: string;
}

interface Translations {
  ara: {
    official: string;
    common: string;
  };
  bre: {
    official: string;
    common: string;
  };
  ces: {
    official: string;
    common: string;
  };
  cym: {
    official: string;
    common: string;
  };
  deu: {
    official: string;
    common: string;
  };
  est: {
    official: string;
    common: string;
  };
  fin: {
    official: string;
    common: string;
  };
  fra: {
    official: string;
    common: string;
  };
  hrv: {
    official: string;
    common: string;
  };
  hun: {
    official: string;
    common: string;
  };
  ita: {
    official: string;
    common: string;
  };
  jpn: {
    official: string;
    common: string;
  };
  kor: {
    official: string;
    common: string;
  };
  nld: {
    official: string;
    common: string;
  };
  per: {
    official: string;
    common: string;
  };
  pol: {
    official: string;
    common: string;
  };
  por: {
    official: string;
    common: string;
  };
  rus: {
    official: string;
    common: string;
  };
  slk: {
    official: string;
    common: string;
  };
  spa: {
    official: string;
    common: string;
  };
  srp: {
    official: string;
    common: string;
  };
  swe: {
    official: string;
    common: string;
  };
  tur: {
    official: string;
    common: string;
  };
  urd: {
    official: string;
    common: string;
  };
  zho: {
    official: string;
    common: string;
  };
}

interface Demonyms {
  eng: {
    f: string;
    m: string;
  };
  fra: {
    f: string;
    m: string;
  };
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Gini {
  "2019": number;
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface CoatOfArms {
  png: string;
  svg: string;
}

export interface DataCountry {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}
