import { ErrorCodes } from './iGlobal';

export interface ConduitConnect {
	client: string;
	clientVersion: number;
	clientDescription?: string;
	user?: string;
	authToken?: number;
	authSignature?: string;
}

export interface RetConduitCapabilities {
	authentication: Array<string>;
	signature: Array<string>;
	input: Array<string>;
	ouput: Array<string>;
}

export interface RetConduitPing extends ErrorCodes {
	result: string;
}
