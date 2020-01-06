export interface RetPhidLookup {
	[phid: string]: {
		phid: string;
		uri: string;
		typeName: string;
		type: string;
		name: string;
		fullName: string;
		status: string;
	};
}

export interface RetPhidQuery {
	result: {
		[phid: string]: {
			phid: string;
			uri: string;
			typeName: string;
			type: string;
			name: string;
			fullName: string;
			status: string;
		};
	};
	error_code: string;
	error_info: string;
}
