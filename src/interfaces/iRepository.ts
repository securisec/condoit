import { ErrorCodes, BeforeAfterLimit, phid } from './iGlobal';

export interface RepositoryQuery extends BeforeAfterLimit {
	ids: Array<number>;
	phids: Array<phid>;
	callsigns: Array<string>;
	vcsTypes: Array<string>;
	remoteURIs: Array<string>;
	uuids: Array<string>;
	order: string;
}

interface retRepositoryQueryResult {
	id: string;
	name: string;
	phid: phid;
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
}

export interface RetRepositoryQuery extends ErrorCodes {
	result: Array<retRepositoryQueryResult>;
}
