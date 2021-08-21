export type OrderType =
  | 'market_cap_desc'
  | 'gecko_desc'
  | 'gecko_asc'
  | 'market_cap_asc'
  | 'market_cap_desc'
  | 'volume_asc'
  | 'volume_desc'
  | 'id_asc'
  | 'id_desc';

export interface CoinType {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: Date;
  atl: number;
  atl_change_percentage: number;
  atl_date: Date;
  roi?: any;
  last_updated: Date;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
}

export enum Localization {
  En = 'en',
  De = 'de',
  Es = 'es',
  Fr = 'fr',
  It = 'it',
  Pl = 'pl',
  Ro = 'ro',
  Hu = 'hu',
  Nl = 'nl',
  Pt = 'pt',
  Sv = 'sv',
  Vi = 'vi',
  Tr = 'tr',
  Ru = 'ru',
  Ja = 'ja',
  Zh = 'zh',
  Zh_tw = 'zh-tw',
  Ko = 'ko',
  Ar = 'ar',
  Th = 'th',
  Id = 'id',
}

export type CoinDescription = {
  [key in Localization]: string;
};

export interface CoinInfo {
  id: string;
  symbol: string;
  name: string;
  asset_platform_id?: any;
  platforms?: { '': string };
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  public_notice?: any;
  additional_notices: any[];
  localization: CoinDescription;
  description: CoinDescription;
  links: {
    homepage: string[];
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
    announcement_url: string[];
    twitter_screen_name: string;
    facebook_username: string;
    bitcointalk_thread_identifier?: any;
    telegram_channel_identifier: string;
    subreddit_url: string;
    repos_url: {
      github: string[];
      bitbucket: any[];
    };
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  public_interest_stats: {
    alexa_rank: number;
    bing_matches?: any;
  };
  status_updates: any[];
  last_updated: Date;
}
