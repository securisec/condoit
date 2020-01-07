import { ErrorCodes } from './iGlobal';

export interface FeedQuery {
	filterPHIDs?: Array<string>;
	limit?: number;
	after?: number;
	before?: number;
	view?: 'data' | 'html' | 'html-summary' | 'text';
}

interface retFeedQueryData {
  class?: string;
  epoch?: number;
  authorPHID?: string;
  chronologicalKey?: string;
  text?: string
  data?: {
    objectPHID: string;
    transactionPHIDs: {
      [phid: string]: string;
    };
  };
};

export interface RetFeedQuery extends ErrorCodes {
	result: {
		[phid: string]: string  | retFeedQueryData
	};
}
