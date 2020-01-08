import { BeforeAfterLimit, ErrorCodes } from './iGlobal';

export interface AuthQuerypublickeys extends BeforeAfterLimit {
	ids?: Array<number>;
	phids?: Array<string>;
	objectPHIDs?: Array<string>;
	keys?: Array<string>;
}

interface retAuthPublicKeyData {
	id: string;
	name: string;
	phid: string;
	objectPHID: string;
	isTrusted: boolean;
	key: string;
}

export interface RetAuthQuerypublickeys extends ErrorCodes {
	result: {
		data: Array<retAuthPublicKeyData>;
		cursor: { limit: number; after: string; before: string };
	};
}
