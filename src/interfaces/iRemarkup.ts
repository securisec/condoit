import { ErrorCodes } from './iGlobal';

export interface RemarkupProcess {
	context:
		| 'phriction'
		| 'maniphest'
		| 'differential'
		| 'phame'
		| 'feed'
		| 'diffusion';
	contents: Array<string>;
}

export interface retRemarkupProcessResult {
	content: string;
}

export interface RetRemarkupProcess extends ErrorCodes {
	result: Array<retRemarkupProcessResult>;
}
