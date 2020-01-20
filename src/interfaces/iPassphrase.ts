import { ErrorCodes, BeforeAfterLimit, phid } from './iGlobal';

export interface PassphraseQuery extends BeforeAfterLimit {
	ids?: Array<number>;
	phids?: Array<phid>;
	needSecrets?: boolean;
	needPublicKeys?: boolean;
	order?: string;
}

export interface RetPassphraseQuery extends ErrorCodes {
	result: {
		data: {
			[phid: string]: {
				id: string;
				phid: phid;
				type: string;
				name: string;
				description: string;
				uri: string;
				monogram: string;
				username: string;
				material: {
					publicKey: string;
					noAPIAccess: string;
				};
			};
		};
		cursor: { limit: number; after: string; before: string };
	};
}
