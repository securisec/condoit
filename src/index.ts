import Axios, { AxiosResponse, AxiosError } from 'axios';
import qs from 'qs';
import { resolve } from 'url';

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
	private makeRequest(endpoint: string, params: object): Promise<object> {
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

		info: () => {
			// TODO
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
		delete: () => {
			// TODO
		},

		edit: () => {
			// TODO
		},

		query: () => {
			// TODO
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

	public manifest = {
		createtask: () => {
			// TODO
		},

		edit: () => {
			// TODO
		},

		gettasktransactions: () => {
			// TODO
		},

		/**
		 ***Marked for deprecation** Retrieve information about a Maniphest task, given its ID.
     [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.info}
		 *
		 * @param {number} taskId Task ID
		 * @returns {Promise<object>}
		 */
		info: (taskId: number): Promise<object> => {
			return this.makeRequest('maniphest.info', { task_id: taskId });
		},

		priority: () => {
			// TODO
		},

		/**
		 ***Marked for deprecation** Execute complex searches for Maniphest tasks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.whoami/}
		 *
		 * @param {({
		 * 		ids: Array<number>;
		 * 		phids: Array<string>;
		 * 		ownerPHIDs: Array<string>;
		 * 		authorPHIDs: Array<string>;
		 * 		projectPHIDs: Array<string>;
		 * 		ccPHIDs: Array<string>;
		 * 		fullText: string;
		 * 		status:
		 * 			| 'status-any'
		 * 			| 'status-open'
		 * 			| 'status-closed'
		 * 			| 'status-resolved'
		 * 			| 'status-wontfix'
		 * 			| 'status-invalid'
		 * 			| 'status-spite'
		 * 			| 'status-duplicate';
		 * 		order: 'order-priority' | 'order-created' | 'order-modified';
		 * 		limit: number;
		 * 		offset: number;
		 * 	})} options All options are optional
		 * @returns {Promise<object>}
		 * @memberof Condoit
		 */
		query: (options: {
			ids: Array<number>;
			phids: Array<string>;
			ownerPHIDs: Array<string>;
			authorPHIDs: Array<string>;
			projectPHIDs: Array<string>;
			ccPHIDs: Array<string>;
			fullText: string;
			status:
				| 'status-any'
				| 'status-open'
				| 'status-closed'
				| 'status-resolved'
				| 'status-wontfix'
				| 'status-invalid'
				| 'status-spite'
				| 'status-duplicate';
			order: 'order-priority' | 'order-created' | 'order-modified';
			limit: number;
			offset: number;
		}): Promise<object> => {
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
		 * @returns {Promise<object>}
		 * @memberof Condoit
		 */
		querystatuses: (): Promise<object> => {
			return this.makeRequest('maniphest.querystatuses', {});
		},

		/**
		 *Search Maniphest tasks
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.search/}
		 *
		 * @param {({
		 * 		queryKey: 'assigned' | 'authored' | 'subscribed' | 'open' | 'all';
		 * 		constraints: {
		 * 			ids: Array<number>;
		 * 			phids: Array<string>;
		 * 			assigned: Array<string>;
		 * 			authorPHIDs: Array<string>;
		 * 			statuses: [
		 * 				'open' | 'resolved' | 'wontfix' | 'invalid' | 'duplicate' | 'spite'
		 * 			];
		 * 			priorities: Array<number>;
		 * 			subtypes: Array<string>;
		 * 			columnPHIDs: Array<string>;
		 * 			hasParents: boolean;
		 * 			hasSubtasks: boolean;
		 * 			parentIDs: Array<number>;
		 * 			subtaskIDs: Array<number>;
		 * 			createdStart: number;
		 * 			createdEnd: number;
		 * 			modifiedStart: number;
		 * 			modifiedEnd: number;
		 * 			closedStart: number;
		 * 			closedEnd: number;
		 * 			closerPHIDs: Array<string>;
		 * 			query: string;
		 * 			subscribers: Array<string>;
		 * 			projects: Array<string>;
		 * 		};
		 * 		attachments: { columns: boolean; subscribers: boolean; projects: boolean };
		 * 		order:
		 * 			| 'priority'
		 * 			| 'updated'
		 * 			| 'outdated'
		 * 			| 'newest'
		 * 			| 'oldest'
		 * 			| 'closed'
		 * 			| 'title'
		 * 			| 'relevance'
		 * 			| [string];
		 * 		before: string
		 * 		after: string
		 * 		limit: number
		 * 	})} options All options are optional
		 * @returns {Promise<object>}
		 * @memberof Condoit
		 */
		search: (options: {
			queryKey: 'assigned' | 'authored' | 'subscribed' | 'open' | 'all';
			constraints: {
				ids: Array<number>;
				phids: Array<string>;
				assigned: Array<string>;
				authorPHIDs: Array<string>;
				statuses: [
					'open' | 'resolved' | 'wontfix' | 'invalid' | 'duplicate' | 'spite'
				];
				priorities: Array<number>;
				subtypes: Array<string>;
				columnPHIDs: Array<string>;
				hasParents: boolean;
				hasSubtasks: boolean;
				parentIDs: Array<number>;
				subtaskIDs: Array<number>;
				createdStart: number;
				createdEnd: number;
				modifiedStart: number;
				modifiedEnd: number;
				closedStart: number;
				closedEnd: number;
				closerPHIDs: Array<string>;
				query: string;
				subscribers: Array<string>;
				projects: Array<string>;
			};
			attachments: {
				columns: boolean;
				subscribers: boolean;
				projects: boolean;
			};
			order:
				| 'priority'
				| 'updated'
				| 'outdated'
				| 'newest'
				| 'oldest'
				| 'closed'
				| 'title'
				| 'relevance'
				| [string];
			before: string;
			after: string;
			limit: number;
		}): Promise<object> => {
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
		 * @returns {Promise<object>}
		 * @memberof Condoit
		 */
		statusSearch: (): Promise<object> => {
			return this.makeRequest('maniphest.status.search', {});
		},

		status: () => {
			// TODO
		},

		update: () => {
			// TODO
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
		give: () => {
			// TODO give
		},

		given: () => {
			// TODO
		},

		query: () => {
			// TODO
		}
	};

	public transaction = {
		search: () => {
			// TODO search
		}
	};

	public user = {
		/**
		 *Edit user information. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.edit/}
		 *
		 * @param {([
		 * 			{
		 * 				type:
		 * 					| 'disabled'
		 * 					| 'approved'
		 * 					| 'realName'
		 * 					| 'title'
		 * 					| 'icon'
		 * 					| 'blurb'
		 * 					| 'mfa';
		 * 				value: boolean | string;
		 * 			}
		 * 		])} transactions Array of objects that apply various changes to the users information
		 * @param {(number | string)} [objectIdentifier] ID, phid to identify unique user
		 * @returns {Promise<object>}
		 * @memberof Condoit
		 */
		edit: (
			transactions: [
				{
					type:
						| 'disabled'
						| 'approved'
						| 'realName'
						| 'title'
						| 'icon'
						| 'blurb'
						| 'mfa';
					value: boolean | string;
				}
			],
			objectIdentifier?: number | string
		): Promise<object> => {
			return this.makeRequest('user.edit', {
				transactions: transactions,
				objectIdentifier: objectIdentifier
			});
		},

		/**
		 *Query users
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.search/}
		 *
		 * @param {({
		 * 		queryKey: 'active' | 'all' | 'approval';
		 * 		constraints: {
		 * 			ids: Array<number>;
		 * 			phids: Array<string>;
		 * 			usernames: Array<string>;
		 * 			nameLike: string;
		 * 			isAdmin: boolean;
		 * 			isDisabled: boolean;
		 * 			isBot: boolean;
		 * 			isMailingList: boolean;
		 * 			needsApproval: boolean;
		 * 			mfa: boolean;
		 * 			createdStart: number;
		 * 			createdEnd: number;
		 * 			query: string;
		 * 		};
		 * 		attachments: { availability: boolean };
		 * 		order:
		 * 			| 'newest'
		 * 			| 'oldest'
		 * 			| 'relevance'
		 * 			| ['id' | 'username' | 'rank' | 'fulltext-created' | 'fulltext-modified'];
		 * 		before: string;
		 * 		after: string;
		 * 		limit: number;
		 * 	})} options All options are optional
		 * @returns {Promise<object>}
		 * @memberof Condoit
		 */
		search: (options: {
			queryKey: 'active' | 'all' | 'approval';
			constraints: {
				ids: Array<number>;
				phids: Array<string>;
				usernames: Array<string>;
				nameLike: string;
				isAdmin: boolean;
				isDisabled: boolean;
				isBot: boolean;
				isMailingList: boolean;
				needsApproval: boolean;
				mfa: boolean;
				createdStart: number;
				createdEnd: number;
				query: string;
			};
			attachments: { availability: boolean };
			order:
				| 'newest'
				| 'oldest'
				| 'relevance'
				| [
						| 'id'
						| 'username'
						| 'rank'
						| 'fulltext-created'
						| 'fulltext-modified'
				  ];
			before: string;
			after: string;
			limit: number;
		}): Promise<object> => {
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
		 * @returns {Promise<object>}
		 * @memberof Condoit
		 */
		whoami: (): Promise<object> => {
			return this.makeRequest('user.whoami', {});
		}
	};
}
