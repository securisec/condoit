import Axios, { AxiosResponse, AxiosError } from 'axios';
import qs from 'qs';
import { resolve } from 'url';

import * as iFile from './interfaces/iFile';
import * as iFlag from './interfaces/iFlag';
import * as iManiphest from './interfaces/iManiphest';
import * as iSlowvote from './interfaces/iSlowvote';
import * as iToken from './interfaces/iToken';
import * as iTransactions from './interfaces/iTransactions';
import * as iUser from './interfaces/iUser';

/**
 *The class to create an instance to use the Phabricator api
 *
 * @class Condoit
 */
export class Condoit {
	private baseUrl: string;
	private apiToken: string;
	/**
	 *Creates an instance of Condoit.
	 * @param {string} baseUrl The base url for a phabricator instance
	 * @param {string} apiToken A valid phabricator conduit api token
	 * @memberof Condoit
	 */
	constructor(baseUrl: string, apiToken: string) {
		this.baseUrl = baseUrl;
		this.apiToken = apiToken;
	}

	/**
	 *Make a base request to the phabricator api using Axios
	 *
	 * @private
	 * @param {string} endpoint The name of the phabricator api endpoint
	 * @param {object} params Options or info passed to the api
	 * @returns {Promise<object>}
	 * @memberof Condoit
	 */
	private makeRequest(endpoint: string, params: object): Promise<any> {
		let baseUrlAxios = resolve(this.baseUrl, '/api');
		return new Promise((resolve, reject) => {
			Axios({
				method: 'POST',
				baseURL: baseUrlAxios,
				url: endpoint,
				data: qs.stringify({ ...params, 'api.token': this.apiToken })
			})
				.then((res: AxiosResponse) => {
					resolve(res.data);
				})
				.catch((error: AxiosError) => reject(error));
		});
	}

	public almanac = {
		binding: () => {
			// TODO
		},

		device: () => {
			// TODO
		},

		interface: () => {
			// TODO
		},

		namespace: () => {
			// TODO
		},

		network: () => {
			// TODO
		},

		service: () => {
			// TODO
		}
	};

	public audit = {
		query: () => {
			// TODO
		}
	};

	public auth = {
		logout: () => {
			// TODO
		},

		querypublickeys: () => {
			// TODO
		}
	};

	public badge = {
		edit: () => {
			// TODO
		},

		search: () => {
			// TODO
		}
	};

	public conduit = {
		connect: () => {
			// TODO
		},

		getcapabilities: () => {
			// TODO
		},

		getcertificate: () => {
			// TODO
		},

		ping: () => {
			// TODO
		},

		query: () => {
			// TODO
		}
	};

	public conpherence = {
		createthread: () => {
			// TODO
		},

		edit: () => {
			// TODO
		},

		querythread: () => {
			// TODO
		},

		querytransaction: () => {
			// TODO
		},

		updatethread: () => {
			// TODO
		}
	};

	public countdown = {
		edit: () => {
			// TODO
		},

		search: () => {
			// TODO
		}
	};

	public dashboard = {
		panel: () => {
			// TODO
		}
	};

	public differential = {
		close: () => {
			// TODO
		},

		createcomment: () => {
			// TODO
		},

		creatediff: () => {
			// TODO
		},

		createinline: () => {
			// TODO
		},

		createrawdiff: () => {
			// TODO
		},

		createrevision: () => {
			// TODO
		},

		diff: () => {
			// TODO
		},

		getcommitmessage: () => {
			// TODO
		},

		getcommitpaths: () => {
			// TODO
		},

		getrawdiff: () => {
			// TODO
		},

		parsecommitmessage: () => {
			// TODO
		},

		query: () => {
			// TODO
		},

		querydiffs: () => {
			// TODO
		},

		revision: () => {
			// TODO
		},

		setdiffproperty: () => {
			// TODO
		},

		updaterevision: () => {
			// TODO
		}
	};

	public diffusion = {
		blame: () => {
			// TODO
		},

		branchquery: () => {
			// TODO
		},

		browsequery: () => {
			// TODO
		},

		commit: () => {
			// TODO
		},

		commitparentsquery: () => {
			// TODO
		},

		diffquery: () => {
			// TODO
		},

		existsquery: () => {
			// TODO
		},

		filecontentquery: () => {
			// TODO
		},

		findsymbols: () => {
			// TODO
		},

		historyquery: () => {
			// TODO
		},

		lastmodifiedquery: () => {
			// TODO
		},

		mergedcommitsquery: () => {
			// TODO
		},

		querycommits: () => {
			// TODO
		},

		querypaths: () => {
			// TODO
		},

		rawdiffquery: () => {
			// TODO
		},

		refsquery: () => {
			// TODO
		},

		repository: () => {
			// TODO
		},

		resolverefs: () => {
			// TODO
		},

		searchquery: () => {
			// TODO
		},

		tagsquery: () => {
			// TODO
		},

		uri: () => {
			// TODO
		},

		getlintmessages: () => {
			// TODO
		},

		looksoon: () => {
			// TODO
		},

		updatecoverage: () => {
			// TODO
		}
	};

	public drydock = {
		authorization: () => {
			// TODO
		},

		blueprint: () => {
			// TODO
		},

		lease: () => {
			// TODO
		},

		resource: () => {
			// TODO
		}
	};

	public edge = {
		search: () => {
			// TODO
		}
	};

	public feed = {
		publish: () => {
			// TODO
		},

		query: () => {
			// TODO
		}
	};

	public file = {
		allocate: () => {
			// TODO
		},

		download: () => {
			// TODO
		},

		/**
		 ***Marked for deprecation** Get information about a file. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.info/}
		 *
		 * @param {{ id?: number; phid?: string }} options
		 * @returns {Promise<object>}
		 */
		info: (options: { id?: number; phid?: string }): Promise<iFile.RetInfo> => {
			return this.makeRequest('file.info', {
				id: options?.id,
				phid: options?.phid
			});
		},

		querychunks: () => {
			// TODO
		},

		search: () => {
			// TODO
		},

		upload: () => {
			// TODO
		},

		uploadchunk: () => {
			// TODO
		}
	};

	public flag = {
		/**
		 *Clear or delete a flag or bookmark
		 [Docs]{@link https://secure.phabricator.com/conduit/method/flag.delete/}
		 *
		 * @param {{
		 * 			id: number;
		 * 			objectPHID: string;
		 * 		}} options
		 * @returns {Promise<iFlag.RetDelete>}
		 */
		delete: (options: {
			id: number;
			objectPHID: string;
		}): Promise<iFlag.RetDelete> => {
			return this.makeRequest('flag.delete', {
				id: options?.id,
				objectPHID: options?.objectPHID
			});
		},

		/**
		 *Create or modify a flag
		 [Docs]{@link https://secure.phabricator.com/conduit/method/flag.edit/}
		 *
		 * @param {{
		 * 			objectPHID: string;
		 * 			color: number;
		 * 			note: string;
		 * 		}} options
		 * @returns {Promise<iFlag.RetEdit>}
		 */
		edit: (options: {
			objectPHID: string;
			color: number;
			note: string;
		}): Promise<iFlag.RetEdit> => {
			return this.makeRequest('flag.edit', {
				objectPHID: options?.objectPHID,
				color: options?.color,
				note: options?.note
			});
		},

		/**
		 *Query flag markers. Flags can also be considered as bookmarks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/flag.query/}
		 *
		 * @param {iFlag.Query} options
		 * @returns {Promise<iFlag.RetQuery>}
		 */
		query: (options: iFlag.Query): Promise<iFlag.RetQuery> => {
			return this.makeRequest('flag.query', {
				ownerPHIDs: options?.ownerPHIDs,
				types: options?.types,
				objectPHIDs: options?.objectPHIDs,
				offset: options?.offset,
				limit: options?.limit
			});
		}
	};

	public harbormaster = {
		artifact: () => {
			// TODO
		},

		build: () => {
			// TODO
		},

		buildable: () => {
			// TODO
		},

		buildplan: () => {
			// TODO
		},

		log: () => {
			// TODO
		},

		target: () => {
			// TODO
		},

		createartifact: () => {
			// TODO
		},

		queryautotargets: () => {
			// TODO
		},

		querybuildables: () => {
			// TODO
		},

		sendmessage: () => {
			// TODO
		}
	};

	public macro = {
		edit: () => {
			// TODO
		},

		query: () => {
			// TODO
		},

		creatememe: () => {
			// TODO
		}
	};

	public maniphest = {
		/**
		 ***Marked for deprecation. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.createtask/}
		 *
		 * @param {iManiphest.Createtask} options
		 * @returns {Promise<iManiphest.RetCreatetask>}
		 */
		createtask: (
			options: iManiphest.Createtask
		): Promise<iManiphest.RetCreatetask> => {
			return this.makeRequest('maniphest.createtask', {
				title: options?.title,
				description: options?.description,
				ownerPHID: options?.ownerPHID,
				viewPolicy: options?.viewPolicy,
				ccPHIDs: options?.ccPHIDs,
				priority: options?.priority,
				projectPHIDs: options?.projectPHIDs,
				auxiliary: options?.auxiliary
			});
		},

		/**
		 *Edit a maniphest task. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.edit/}
		 *
		 * @param {iManiphest.Edit} options
		 * @returns {Promise<iManiphest.RetEdit>}
		 */
		edit: (options: iManiphest.Edit): Promise<iManiphest.RetEdit> => {
			return this.makeRequest('maniphest.edit', {
				transactions: options.transactions,
				objectIdentifier: options.objectIdentifier
			});
		},

		/**
		 ***Marked for deprecation** Retrieve Maniphest task transactions. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.gettasktransactions/}
		 *
		 * @param {Array<number>} ids
		 * @returns {Promise<iManiphest.RetGettasktransactions>}
		 */
		gettasktransactions: (
			ids: Array<number>
		): Promise<iManiphest.RetGettasktransactions> => {
			return this.makeRequest('maniphest.gettasktransactions', { ids: ids });
		},

		/**
		 ***Marked for deprecation** Retrieve information about a Maniphest task, given its ID.
     [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.info}
		 *
		 * @param {number} taskId
		 * @returns {Promise<iManiphest.RetInfo>}
		 */
		info: (taskId: number): Promise<iManiphest.RetInfo> => {
			return this.makeRequest('maniphest.info', { task_id: taskId });
		},

		/**
		 *Returns information about the possible priorities for Maniphest tasks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.priority.search/}
		 *
		 * @returns {Promise<iManiphest.RetPrioritySearch>}
		 */
		prioritySearch: (): Promise<iManiphest.RetPrioritySearch> => {
			return this.makeRequest('maniphest.priority.search', {});
		},

		/**
		 ***Marked for deprecation** Execute complex searches for Maniphest tasks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.whoami/}
		 *
		 * @param {iManiphest.Query} options
		 * @returns {Promise<iManiphest.RetQuery>}
		 */
		query: (options: iManiphest.Query): Promise<iManiphest.RetQuery> => {
			return this.makeRequest('maniphest.query', {
				ids: options?.ids,
				phids: options?.phids,
				ownerPHIDs: options?.ownerPHIDs,
				authorPHIDs: options?.authorPHIDs,
				projectPHIDs: options?.projectPHIDs,
				ccPHIDs: options?.ccPHIDs,
				fulltext: options?.fullText,
				status: options?.status,
				order: options?.order,
				limit: options?.limit,
				offset: options?.offset
			});
		},

		/**
		 ***Marked for deprecation** Retrieve information about possible Maniphest task status values. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.querystatuses/}
		 *
		 * @returns {Promise<iManiphest.RetQuerystatuses>}
		 */
		querystatuses: (): Promise<iManiphest.RetQuerystatuses> => {
			return this.makeRequest('maniphest.querystatuses', {});
		},

		/**
		 **Search Maniphest tasks
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.search/}
		 *
		 * @param {iManiphest.Search} options
		 * @returns {Promise<iManiphest.RetSearch>}
		 */
		search: (options: iManiphest.Search): Promise<iManiphest.RetSearch> => {
			return this.makeRequest('maniphest.search', {
				queryKey: options?.queryKey,
				constraints: options?.constraints,
				attachments: options?.attachments,
				order: options?.order,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		},

		/**
		 *Returns information about the possible statuses for Maniphest tasks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.status.search/}
		 *
		 * @returns {Promise<iManiphest.RetStatusSearch>}
		 */
		statusSearch: (): Promise<iManiphest.RetStatusSearch> => {
			return this.makeRequest('maniphest.status.search', {});
		},

		/**
		 ***Marked for deprecation** Update an existing Maniphest task. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.update/}
		 *
		 * @param {iManiphest.Update} options
		 * @returns {Promise<iManiphest.RetUpdate>}
		 */
		update: (options: iManiphest.Update): Promise<iManiphest.RetUpdate> => {
			return this.makeRequest('maniphest.update', {
				id: options?.id,
				phid: options?.phid,
				title: options?.title,
				description: options?.description,
				ownerPHID: options?.ownerPHID,
				viewPolicy: options?.viewPolicy,
				editPolicy: options?.editPolicy,
				ccPHIDs: options?.ccPHIDs,
				priority: options?.priority,
				projectPHIDs: options?.projectPHIDs,
				auxiliary: options?.auxiliary,
				status: options?.status,
				comments: options?.comments
			});
		}
	};

	public owners = {
		edit: () => {
			// TODO
		},

		search: () => {
			// TODO
		}
	};

	public passphrase = {
		query: () => {
			// TODO
		}
	};

	public paste = {
		create: () => {
			// TODO
		},

		edit: () => {
			// TODO
		},

		query: () => {
			// TODO
		},

		search: () => {
			// TODO
		}
	};

	public phame = {
		blog: () => {
			// TODO
		},

		post: () => {
			// TODO
		}
	};

	public phid = {
		lookup: () => {
			// TODO
		},

		query: () => {
			// TODO
		}
	};

	public phriction = {
		content: () => {
			// TODO
		},

		create: () => {
			// TODO
		},

		document: () => {
			// TODO
		},

		edit: () => {
			// TODO
		},

		history: () => {
			// TODO
		},

		info: () => {
			// TODO
		}
	};

	public portal = {
		edit: () => {
			// TODO
		},

		search: () => {
			// TODO
		}
	};

	public project = {
		column: () => {
			// TODO
		},

		create: () => {
			// TODO
		},

		edit: () => {
			// TODO
		},

		query: () => {
			// TODO
		},

		search: () => {
			// TODO
		}
	};

	public remarkup = {
		process: () => {
			// TODO
		}
	};

	public repository = {
		query: () => {
			// TODO
		}
	};

	public slowvote = {
		pollSearch: () => {
			// TODO
		}
	};

	public token = {
		/**
		 *Give or change token
		 [Docs]{@link https://secure.phabricator.com/conduit/method/token.give/}
		 *
		 * @param {iToken.Give} options
		 * @returns {Promise<iToken.RetGive>}
		 */
		give: (options: iToken.Give): Promise<iToken.RetGive> => {
			let tokens = iToken.tokens;
			return this.makeRequest('token.give', {
				tokenPHID: tokens[options.token],
				objectPHID: options.objectPHID
			});
		},

		/**
		 *Query tokens given to objects. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/token.given/}
		 *
		 * @param {iToken.Given} options
		 * @returns
		 */
		given: (options: iToken.Given): Promise<iToken.RetGiven> => {
			return this.makeRequest('token.given', {
				authorPHIDs: options?.authorPHIDs,
				objectPHIDs: options?.objectPHIDs,
				tokenPHIDs: options?.tokenPHIDs?.map((t) => iToken.tokens[t])
			});
		},

		query: (): Promise<iToken.RetQuery> => {
			return this.makeRequest('token.query', {});
		}
	};

	public transaction = {
		/**
		 *Read transactions and comments for an object. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/transaction.search/}
		 *
		 * @param {iTransactions.Search} options
		 * @returns {Promise<iTransactions.RetSearch>}
		 */
		search: (
			options: iTransactions.Search
		): Promise<iTransactions.RetSearch> => {
			return this.makeRequest('transaction.search', {
				objectIdentifier: options.objectIdentifier,
				constraints: options?.constraints,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		}
	};

	public user = {
		/**
		 *Edit user information. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.edit/}
		 *
		 * @param {iUser.Edit} options
		 * @returns {Promise<object>}
		 */
		edit: (options: iUser.Edit): Promise<iUser.RetEdit> => {
			return this.makeRequest('user.edit', {
				transactions: options.transactions,
				objectIdentifier: options.objectIdentifier
			});
		},

		/**
		 *Search users
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.search/}
		 *
		 * @returns {Promise<object>}
		 */
		search: (options: iUser.Search): Promise<iUser.RetSearch> => {
			return this.makeRequest('user.search', {
				queryKey: options?.queryKey,
				constraints: options?.constraints,
				attachments: options?.attachments,
				order: options?.order,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		},

		/**
		 *Retrieve information about the logged-in user.
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.whoami/} 
		 *
		 * @returns {Promise<iUser.RetWhoami>}
		 */
		whoami: (): Promise<iUser.RetWhoami> => {
			return this.makeRequest('user.whoami', {});
		}
	};
}
