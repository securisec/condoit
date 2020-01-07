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

interface retRemarkupProcessResult {
	content: string;
}

export interface RetRemarkupProcess extends ErrorCodes {
	result: Array<retRemarkupProcessResult>;
}
