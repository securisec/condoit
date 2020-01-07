import { ErrorCodes } from './iGlobal';

export interface FlagQuery {
	ownerPHIDs: Array<string>;
	types: Array<string>;
	objectPHIDs: Array<string>;
	offset: number;
	limit: number;
}

interface retFlagQueryResult {
	id: string;
	ownerPHID: string;
	type: string;
	objectPHID: string;
	reasonPHID: string;
	color: string;
	colorName: string;
	note: string;
	handle: {
		uri: string;
		name: string;
		fullname: string;
	};
	dateCreated: string;
	dateModified: string;
};

export interface RetFlagQuery extends ErrorCodes {
	result: Array<retFlagQueryResult>;
}

interface retFlagEditResult {
	id: string;
	ownerPHID: string;
	type: string;
	objectPHID: string;
	reasonPHID: string;
	color: string;
	colorName: string;
	note: string;
	handle: {
		uri: string;
		name: string;
		fullname: string;
	};
	dateCreated: string;
	dateModified: string;
};

export interface RetFlagEdit extends ErrorCodes {
	result: Array<retFlagEditResult>;
}

export interface RetFlagDelete extends ErrorCodes {
	result: {
		id: string;
		ownerPHID: string;
		type: string;
		objectPHID: string;
		reasonPHID: string;
		color: string;
		colorName: string;
		note: string;
		handle: {
			uri: string;
			name: string;
			fullname: string;
		};
		dateCreated: string;
		dateModified: string;
	};
}
