type macroEditTransactions = {
	type:
		| 'name'
		| 'filePHID'
		| 'subscribers.add'
		| 'subscribers.remove'
		| 'subscribers.set'
		| 'comment'
		| 'mfa';
	value: any;
};

export interface MarcoEdit {
	transactions: Array<macroEditTransactions>;
	objectIdentifier?: number | string;
}

export interface MacroQuery {
	authorPHIDs: Array<string>;
	phids: Array<string>;
	ids: Array<number>;
	names: Array<string>;
	nameLike: string;
}

export interface RetMacroQuery {
	result: {
		[name: string]: {
			uri: string;
			phid: string;
			authorPHID: string;
			dateCreated: string;
			filePHID: string;
		};
	};
	error_code: string;
	error_info: string;
}

export interface RetMacroCreatememe {
	result: {
		uri: string;
	};
	error_code: string;
	error_info: string;
}
