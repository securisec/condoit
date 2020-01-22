import { ErrorCodes, phid } from './iGlobal';

export interface FlagQuery {
	ownerPHIDs: Array<phid>;
	types: Array<string>;
	objectPHIDs: Array<phid>;
	offset: number;
	limit: number;
}

export interface retFlagQueryResult {
	id: string;
	ownerPHID: phid;
	type: string;
	objectPHID: phid;
	reasonPHID: phid;
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
}

export interface RetFlagQuery extends ErrorCodes {
	result: Array<retFlagQueryResult>;
}

export interface retFlagEditResult {
	id: string;
	ownerPHID: phid;
	type: string;
	objectPHID: phid;
	reasonPHID: phid;
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
}

export interface RetFlagEdit extends ErrorCodes {
	result: Array<retFlagEditResult>;
}

export interface RetFlagDelete extends ErrorCodes {
	result: {
		id: string;
		ownerPHID: phid;
		type: string;
		objectPHID: phid;
		reasonPHID: phid;
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
