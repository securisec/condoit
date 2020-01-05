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

type retRemarkupProcessResult = { content: string };

export interface RetRemarkupProcess {
	result: Array<retRemarkupProcessResult>;
	error_code: null;
	error_info: null;
}
