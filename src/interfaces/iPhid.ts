import { ErrorCodes, phid } from './iGlobal';

export interface RetPhidLookup {
	[phid: string]: {
		phid: phid;
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
			phid: phid;
			uri: string;
			typeName: string;
			type: string;
			name: string;
			fullName: string;
			status: string;
		};
	};
}
