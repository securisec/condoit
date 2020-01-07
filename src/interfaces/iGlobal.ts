interface retTransactions {
	phid: string;
}

export interface RetTransactions extends ErrorCodes {
	result: {
		object: { id: number; phid: string };
		transactions: Array<retTransactions>;
	};
}

interface ErrorCodes {
	error_code: string;
	error_info: string;
}

export type RetSearchConstants = {
	id: number;
	type: string;
	phid: string;
};

export { ErrorCodes };
