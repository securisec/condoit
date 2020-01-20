import { ErrorCodes, phid } from './iGlobal';

export interface FeedQuery {
	filterPHIDs?: Array<phid>;
	limit?: number;
	after?: number;
	before?: number;
	view?: 'data' | 'html' | 'html-summary' | 'text';
}

interface retFeedQueryData {
  class?: string;
  epoch?: number;
  authorPHID?: phid;
  chronologicalKey?: string;
  text?: string
  data?: {
    objectPHID: phid;
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
