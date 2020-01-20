import { ErrorCodes, phid } from './iGlobal';

interface macroEditTransactions {
	type:
		| 'name'
		| 'filePHID'
		| 'subscribers.add'
		| 'subscribers.remove'
		| 'subscribers.set'
		| 'comment'
		| 'mfa';
	value: any;
}

export interface MarcoEdit {
	transactions: Array<macroEditTransactions>;
	objectIdentifier?: number | string;
}

export interface MacroQuery {
	authorPHIDs: Array<phid>;
	phids: Array<phid>;
	ids: Array<number>;
	names: Array<string>;
	nameLike: string;
}

export interface RetMacroQuery extends ErrorCodes {
	result: {
		[name: string]: {
			uri: string;
			phid: phid;
			authorPHID: phid;
			dateCreated: string;
			filePHID: phid;
		};
	};
}

export interface RetMacroCreatememe extends ErrorCodes {
	result: {
		uri: string;
	};
}
