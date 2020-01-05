export interface Query {
	ownerPHIDs: Array<string>;
	types: Array<string>;
	objectPHIDs: Array<string>;
	offset: number;
	limit: number;
}

type retQueryResult = {
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

export interface RetQuery {
	result: Array<retQueryResult>;
	error_code: string;
	error_info: string;
}

type retEditResult = {
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

export interface RetEdit {
	result: Array<retEditResult>;
	error_code: string;
	error_info: string;
}

export interface RetDelete {
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
