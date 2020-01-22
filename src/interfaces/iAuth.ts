import { BeforeAfterLimit, ErrorCodes, phid } from './iGlobal';

export interface AuthQuerypublickeys extends BeforeAfterLimit {
	ids?: Array<number>;
	phids?: Array<phid>;
	objectPHIDs?: Array<phid>;
	keys?: Array<string>;
}

export interface retAuthPublicKeyData {
	id: string;
	name: string;
	phid: phid;
	objectPHID: phid;
	isTrusted: boolean;
	key: string;
}

export interface RetAuthQuerypublickeys extends ErrorCodes {
	result: {
		data: Array<retAuthPublicKeyData>;
		cursor: { limit: number; after: string; before: string };
	};
}
