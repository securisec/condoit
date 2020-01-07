import { ErrorCodes } from './iGlobal';

export interface RepositoryQuery {
	ids: Array<number>;
	phids: Array<string>;
	callsigns: Array<string>;
	vcsTypes: Array<string>;
	remoteURIs: Array<string>;
	uuids: Array<string>;
	order: string;
	before: string;
	after: string;
	limit: number;
}

interface retRepositoryQueryResult {
	id: string;
	name: string;
	phid: string;
	callsign: string;
	monogram: string;
	vcs: string;
	uri: string;
	remoteURI: string;
	description: string;
	isActive: boolean;
	isHosted: boolean;
	isImporting: boolean;
	encoding: string;
	staging: { supported: boolean; prefix: string; uri: string };
};

export interface RetRepositoryQuery extends ErrorCodes {
	result: Array<retRepositoryQueryResult>;
}
