import { AuctionResult, Banner, CreativeAdItem } from '../types/external';

export type CreativeAuctionParams = {
  requestId: string;
  sessionId?: string;
  user?: {
    userId?: string;
    yearOfBirth?: number;
    gender?: string;
    interests?: string[];
  };
  device?: {
    os?: string;
    osVersion?: string;
    advertisingId?: string;
    uniqueDeviceId?: string;
    model?: string;
    ip?: string;
  };
  inventory: {
    inventoryId: string;
    items?: string[];
    categories?: string[];
    searchQuery?: string;
  };
  pageId?: string;
};

export type CreativeAuctionHttpRequestBody = {
  request_id: string;
  session_id?: string;
  user?: {
    user_id?: string;
    year_of_birth?: number;
    gender?: string;
    interests?: string[];
  };
  device?: {
    os?: string;
    os_version?: string;
    advertising_id?: string;
    unique_device_id?: string;
    model?: string;
    ip?: string;
  };
  inventory: {
    inventory_id: string;
    items?: string[];
    categories?: string[];
    search_query?: string;
  };
  page_id?: string;
};

export type CreativeAuctionHttpResponseBody = {
  request_id: string;
  auction_result?: {
    ad_account_id: string;
    campaign_id: string;
    win_price?: {
      currency: string;
      amount_micro: string;
    };
  };
  banner?: {
    creative_id: string;
    image_url: string;
    imp_trackers: string[];
    click_trackers: string[];
  };
  items?: {
    item_id: string;
    imp_trackers: string[];
    click_trackers: string[];
  }[];
};

export type CreativeAuctionData = {
  requestId: string;
  auctionResult?: AuctionResult;
  banner?: Banner;
  items?: CreativeAdItem[];
};
