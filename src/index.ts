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

		/**
		 ***Marked for deprecation** Get information about a file. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.info/}
		 *
		 * @param {{ id?: number; phid?: string }} options
		 * @returns {Promise<object>}
		 */
		info: (options: { id?: number; phid?: string }): Promise<object> => {
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

	public maniphest = {
		/**
		 ***Marked for deprecation. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.createtask/}
		 *
		 * @param {{
		 * 			title: string;
		 * 			description?: string;
		 * 			ownerPHID?: string;
		 * 			viewPolicy?: string;
		 * 			editPolicy?: string;
		 * 			ccPHIDs?: Array<string>;
		 * 			priority?: number;
		 * 			projectPHIDs?: Array<string>;
		 * 			auxiliary: object;
		 * 		}} options Only title is required. All other options are optional. 
		 * @returns {Promise<object>}
		 */
		createtask: (options: {
			title: string;
			description?: string;
			ownerPHID?: string;
			viewPolicy?: string;
			editPolicy?: string;
			ccPHIDs?: Array<string>;
			priority?: number;
			projectPHIDs?: Array<string>;
			auxiliary: object;
		}): Promise<object> => {
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
		 * @param {([
		 * 				{
		 * 					type:
		 * 						| 'parent'
		 * 						| 'column'
		 * 						| 'space'
		 * 						| 'title'
		 * 						| 'owner'
		 * 						| 'status'
		 * 						| 'priority'
		 * 						| 'description'
		 * 						| 'parents.add'
		 * 						| 'parents.remove'
		 * 						| 'parents.set'
		 * 						| 'subtasks.add'
		 * 						| 'subtasks.remove'
		 * 						| 'subtasks.set'
		 * 						| 'commits.add'
		 * 						| 'commits.remove'
		 * 						| 'commits.set'
		 * 						| 'view'
		 * 						| 'edit'
		 * 						| 'projects.add'
		 * 						| 'projects.remove'
		 * 						| 'projects.set'
		 * 						| 'subscribers.add'
		 * 						| 'subscribers.remove'
		 * 						| 'subscribers.set'
		 * 						| 'subtype'
		 * 						| 'commnet'
		 * 						| 'mfa';
		 * 					value: string | boolean;
		 * 				}
		 * 			])} transactions An array of transactions to apply. This can include any 
		 * custom types also. 
		 * @param {(number | string)} objectIdentifier ID or PHID of the task
		 * @returns {Promise<object>}
		 */
		edit: (
			transactions: [
				{
					type:
						| 'parent'
						| 'column'
						| 'space'
						| 'title'
						| 'owner'
						| 'status'
						| 'priority'
						| 'description'
						| 'parents.add'
						| 'parents.remove'
						| 'parents.set'
						| 'subtasks.add'
						| 'subtasks.remove'
						| 'subtasks.set'
						| 'commits.add'
						| 'commits.remove'
						| 'commits.set'
						| 'view'
						| 'edit'
						| 'projects.add'
						| 'projects.remove'
						| 'projects.set'
						| 'subscribers.add'
						| 'subscribers.remove'
						| 'subscribers.set'
						| 'subtype'
						| 'commnet'
						| 'mfa';
					value: string | boolean;
				}
			],
			objectIdentifier: number | string
		): Promise<object> => {
			return this.makeRequest('maniphest.edit', {
				transactions: transactions,
				objectIdentifier: objectIdentifier
			});
		},

		/**
		 ***Marked for deprecation** Retrieve Maniphest task transactions. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.gettasktransactions/}
		 *
		 * @param {Array<number>} ids An array of IDs 
		 * @returns {Promise<object>}
		 */
		gettasktransactions: (ids: Array<number>): Promise<object> => {
			return this.makeRequest('maniphest.gettasktransactions', { ids: ids });
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

		/**
		 *Returns information about the possible priorities for Maniphest tasks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.priority.search/}
		 *
		 * @returns {Promise<object>}
		 */
		prioritySearch: (): Promise<object> => {
			return this.makeRequest('maniphest.priority.search', {});
		},

		/**
		 ***Marked for deprecation** Execute complex searches for Maniphest tasks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.whoami/}
		 *
		 * @param {({
		 * 			ids?: Array<number>;
		 * 			phids?: Array<string>;
		 * 			ownerPHIDs?: Array<string>;
		 * 			authorPHIDs?: Array<string>;
		 * 			projectPHIDs?: Array<string>;
		 * 			ccPHIDs?: Array<string>;
		 * 			fullText?: string;
		 * 			status?:
		 * 				| 'status-any'
		 * 				| 'status-open'
		 * 				| 'status-closed'
		 * 				| 'status-resolved'
		 * 				| 'status-wontfix'
		 * 				| 'status-invalid'
		 * 				| 'status-spite'
		 * 				| 'status-duplicate';
		 * 			order?: 'order-priority' | 'order-created' | 'order-modified';
		 * 			limit?: number;
		 * 			offset?: number;
		 * 		})} options
		 * @returns {Promise<object>}
		 */
		query: (options: {
			ids?: Array<number>;
			phids?: Array<string>;
			ownerPHIDs?: Array<string>;
			authorPHIDs?: Array<string>;
			projectPHIDs?: Array<string>;
			ccPHIDs?: Array<string>;
			fullText?: string;
			status?:
				| 'status-any'
				| 'status-open'
				| 'status-closed'
				| 'status-resolved'
				| 'status-wontfix'
				| 'status-invalid'
				| 'status-spite'
				| 'status-duplicate';
			order?: 'order-priority' | 'order-created' | 'order-modified';
			limit?: number;
			offset?: number;
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
		 **Search Maniphest tasks
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.search/}
		 *
		 * @param {({
		 * 			queryKey?: 'assigned' | 'authored' | 'subscribed' | 'open' | 'all';
		 * 			constraints?: {
		 * 				ids?: Array<number>;
		 * 				phids?: Array<string>;
		 * 				assigned?: Array<string>;
		 * 				authorPHIDs?: Array<string>;
		 * 				statuses?: [
		 * 					'open' | 'resolved' | 'wontfix' | 'invalid' | 'duplicate' | 'spite'
		 * 				];
		 * 				priorities?: Array<number>;
		 * 				subtypes?: Array<string>;
		 * 				columnPHIDs?: Array<string>;
		 * 				hasParents?: boolean;
		 * 				hasSubtasks?: boolean;
		 * 				parentIDs?: Array<number>;
		 * 				subtaskIDs?: Array<number>;
		 * 				createdStart?: number;
		 * 				createdEnd?: number;
		 * 				modifiedStart?: number;
		 * 				modifiedEnd?: number;
		 * 				closedStart?: number;
		 * 				closedEnd?: number;
		 * 				closerPHIDs?: Array<string>;
		 * 				query?: string;
		 * 				subscribers?: Array<string>;
		 * 				projects?: Array<string>;
		 * 			};
		 * 			attachments?: {
		 * 				columns?: boolean;
		 * 				subscribers?: boolean;
		 * 				projects?: boolean;
		 * 			};
		 * 			order?:
		 * 				| 'priority'
		 * 				| 'updated'
		 * 				| 'outdated'
		 * 				| 'newest'
		 * 				| 'oldest'
		 * 				| 'closed'
		 * 				| 'title'
		 * 				| 'relevance'
		 * 				| [string];
		 * 			before?: string;
		 * 			after?: string;
		 * 			limit?: number;
		 * 		})} options
		 * @returns {Promise<object>}
		 */
		search: (options: {
			queryKey?: 'assigned' | 'authored' | 'subscribed' | 'open' | 'all';
			constraints?: {
				ids?: Array<number>;
				phids?: Array<string>;
				assigned?: Array<string>;
				authorPHIDs?: Array<string>;
				statuses?: [
					'open' | 'resolved' | 'wontfix' | 'invalid' | 'duplicate' | 'spite'
				];
				priorities?: Array<number>;
				subtypes?: Array<string>;
				columnPHIDs?: Array<string>;
				hasParents?: boolean;
				hasSubtasks?: boolean;
				parentIDs?: Array<number>;
				subtaskIDs?: Array<number>;
				createdStart?: number;
				createdEnd?: number;
				modifiedStart?: number;
				modifiedEnd?: number;
				closedStart?: number;
				closedEnd?: number;
				closerPHIDs?: Array<string>;
				query?: string;
				subscribers?: Array<string>;
				projects?: Array<string>;
			};
			attachments?: {
				columns?: boolean;
				subscribers?: boolean;
				projects?: boolean;
			};
			order?:
				| 'priority'
				| 'updated'
				| 'outdated'
				| 'newest'
				| 'oldest'
				| 'closed'
				| 'title'
				| 'relevance'
				| [string];
			before?: string;
			after?: string;
			limit?: number;
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

		/**
		 ***Marked for deprecation** Update an existing Maniphest task. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.update/}
		 *
		 * @param {{
		 * 			id?: number;
		 * 			phid?: string;
		 * 			title?: string;
		 * 			description?: string;
		 * 			ownerPHID?: string;
		 * 			viewPolicy?: string;
		 * 			editPolicy?: string;
		 * 			ccPHIDs?: Array<string>;
		 * 			priority?: number;
		 * 			projectPHIDs?: Array<string>;
		 * 			auxiliary?: object;
		 * 			status?: string;
		 * 			comments?: string;
		 * 		}} options
		 * @returns {Promise<object>}
		 */
		update: (options: {
			id?: number;
			phid?: string;
			title?: string;
			description?: string;
			ownerPHID?: string;
			viewPolicy?: string;
			editPolicy?: string;
			ccPHIDs?: Array<string>;
			priority?: number;
			projectPHIDs?: Array<string>;
			auxiliary?: object;
			status?: string;
			comments?: string;
		}): Promise<object> => {
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
		 * 			queryKey?: 'active' | 'all' | 'approval';
		 * 			constraints?: {
		 * 				ids?: Array<number>;
		 * 				phids?: Array<string>;
		 * 				usernames?: Array<string>;
		 * 				nameLike?: string;
		 * 				isAdmin?: boolean;
		 * 				isDisabled?: boolean;
		 * 				isBot?: boolean;
		 * 				isMailingList?: boolean;
		 * 				needsApproval?: boolean;
		 * 				mfa?: boolean;
		 * 				createdStart?: number;
		 * 				createdEnd?: number;
		 * 				query?: string;
		 * 			};
		 * 			attachments?: { availability: boolean };
		 * 			order?:
		 * 				| 'newest'
		 * 				| 'oldest'
		 * 				| 'relevance'
		 * 				| [
		 * 						| 'id'
		 * 						| 'username'
		 * 						| 'rank'
		 * 						| 'fulltext-created'
		 * 						| 'fulltext-modified'
		 * 				  ];
		 * 			before?: string;
		 * 			after?: string;
		 * 			limit?: number;
		 * 		})} options
		 * @returns {Promise<object>}
		 */
		search: (options: {
			queryKey?: 'active' | 'all' | 'approval';
			constraints?: {
				ids?: Array<number>;
				phids?: Array<string>;
				usernames?: Array<string>;
				nameLike?: string;
				isAdmin?: boolean;
				isDisabled?: boolean;
				isBot?: boolean;
				isMailingList?: boolean;
				needsApproval?: boolean;
				mfa?: boolean;
				createdStart?: number;
				createdEnd?: number;
				query?: string;
			};
			attachments?: { availability: boolean };
			order?:
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
			before?: string;
			after?: string;
			limit?: number;
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
