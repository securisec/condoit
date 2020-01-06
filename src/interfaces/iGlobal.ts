type retTransactions = { phid: string };

export interface RetTransactions {
	result: {
		object: { id: number; phid: string };
		transactions: Array<retTransactions>;
	};
	error_code: string;
	error_info: string;
}
