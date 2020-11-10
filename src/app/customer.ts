export interface Customer {
  account_id: number;
  steamid: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  profileurl: string;
  personaname: string;
  last_login: Date;
  full_history_time: Date;
  cheese: number;
  fh_unavailable: boolean;
  loccountrycode: string;
  name: string;
  country_code: string;
  fantasy_role: number;
  team_id: number;
  team_name: string;
  team_tag: string;
  is_locked: boolean;
  is_pro: boolean;
  locked_until: number;
}

export interface CustomerDetail {
  tracked_until: string;
  solo_competitive_rank: string;
  competitive_rank: string;
  rank_tier: number;
  leaderboard_rank: number;
  mmr_estimate: {
    estimate: number;
    stdDev: number;
    n: number;
  };
  profile: {
    account_id: number;
    personaname: string;
    name: string;
    plus: boolean;
    cheese: number;
    steamid: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    profileurl: string;
    last_login: string;
    loccountrycode: string;
    is_contributor: false;
  };
}
