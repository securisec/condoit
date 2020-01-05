export interface FlagQuery {
	ownerPHIDs: Array<string>;
	types: Array<string>;
	objectPHIDs: Array<string>;
	offset: number;
	limit: number;
}

type retFlagQueryResult = {
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

export interface RetFlagQuery {
	result: Array<retFlagQueryResult>;
	error_code: string;
	error_info: string;
}

type retFlagEditResult = {
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

export interface RetFlagEdit {
	result: Array<retFlagEditResult>;
	error_code: string;
	error_info: string;
}

export interface RetFlagDelete {
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
	error_code: string;
	error_info: string;
}
