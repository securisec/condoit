import { ErrorCodes } from './iGlobal';

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

export interface RetPhidQuery extends ErrorCodes {
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
}
