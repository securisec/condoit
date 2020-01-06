import Axios, { AxiosResponse, AxiosError } from 'axios';
import qs from 'qs';
import { resolve } from 'url';

import * as iFile from './interfaces/iFile';
import * as iFlag from './interfaces/iFlag';
import * as iManiphest from './interfaces/iManiphest';
import * as iPhame from './interfaces/iPhame';
import * as iPhid from './interfaces/iPhid';
import * as iPhriction from './interfaces/iPhriction';
import * as iPortal from './interfaces/iPortal';
import * as iProject from './interfaces/iProject';
import * as iRemarkup from './interfaces/iRemarkup';
import * as iRepository from './interfaces/iRepository';
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
		info: (options: {
			id?: number;
			phid?: string;
		}): Promise<iFile.RetFileInfo> => {
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
		 * @returns {Promise<iFlag.RetFlagDelete>}
		 */
		delete: (options: {
			id: number;
			objectPHID: string;
		}): Promise<iFlag.RetFlagDelete> => {
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
		 * @returns {Promise<iFlag.RetFlagEdit>}
		 */
		edit: (options: {
			objectPHID: string;
			color: number;
			note: string;
		}): Promise<iFlag.RetFlagEdit> => {
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
		 * @param {iFlag.FlagQuery} options
		 * @returns {Promise<iFlag.RetFlagQuery>}
		 */
		query: (options: iFlag.FlagQuery): Promise<iFlag.RetFlagQuery> => {
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
		 * @param {iManiphest.ManiphestCreatetask} options
		 * @returns {Promise<iManiphest.RetManiphestCreatetask>}
		 */
		createtask: (
			options: iManiphest.ManiphestCreatetask
		): Promise<iManiphest.RetManiphestCreatetask> => {
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
		 * @param {iManiphest.ManiphestEdit} options
		 * @returns {Promise<iManiphest.RetManiphestEdit>}
		 */
		edit: (
			options: iManiphest.ManiphestEdit
		): Promise<iManiphest.RetManiphestEdit> => {
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
		 * @returns {Promise<iManiphest.RetManiphestGettasktransactions>}
		 */
		gettasktransactions: (options: {
			ids: Array<number>;
		}): Promise<iManiphest.RetManiphestGettasktransactions> => {
			return this.makeRequest('maniphest.gettasktransactions', {
				ids: options.ids
			});
		},

		/**
		 ***Marked for deprecation** Retrieve information about a Maniphest task, given its ID.
     [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.info}
		 *
		 * @param {number} taskId
		 * @returns {Promise<iManiphest.RetManiphestInfo>}
		 */
		info: (options: {
			taskId: number;
		}): Promise<iManiphest.RetManiphestInfo> => {
			return this.makeRequest('maniphest.info', { task_id: options.taskId });
		},

		/**
		 *Returns information about the possible priorities for Maniphest tasks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.priority.search/}
		 *
		 * @returns {Promise<iManiphest.RetManiphestPrioritySearch>}
		 */
		prioritySearch: (): Promise<iManiphest.RetManiphestPrioritySearch> => {
			return this.makeRequest('maniphest.priority.search', {});
		},

		/**
		 ***Marked for deprecation** Execute complex searches for Maniphest tasks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.whoami/}
		 *
		 * @param {iManiphest.ManiphestQuery} options
		 * @returns {Promise<iManiphest.RetManiphestQuery>}
		 */
		query: (
			options: iManiphest.ManiphestQuery
		): Promise<iManiphest.RetManiphestQuery> => {
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
		 * @returns {Promise<iManiphest.RetManiphestQuerystatuses>}
		 */
		querystatuses: (): Promise<iManiphest.RetManiphestQuerystatuses> => {
			return this.makeRequest('maniphest.querystatuses', {});
		},

		/**
		 **Search Maniphest tasks
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.search/}
		 *
		 * @param {iManiphest.ManiphestSearch} options
		 * @returns {Promise<iManiphest.RetManiphestSearch>}
		 */
		search: (
			options: iManiphest.ManiphestSearch
		): Promise<iManiphest.RetManiphestSearch> => {
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
		 * @returns {Promise<iManiphest.RetManiphestStatusSearch>}
		 */
		statusSearch: (): Promise<iManiphest.RetManiphestStatusSearch> => {
			return this.makeRequest('maniphest.status.search', {});
		},

		/**
		 ***Marked for deprecation** Update an existing Maniphest task. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.update/}
		 *
		 * @param {iManiphest.ManiphestUpdate} options
		 * @returns {Promise<iManiphest.RetManiphestUpdate>}
		 */
		update: (
			options: iManiphest.ManiphestUpdate
		): Promise<iManiphest.RetManiphestUpdate> => {
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
		blogEdit: () => {
			// TODO
		},

		/**
		 *Search Phame blogs. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phame.blog.search/}
		 *
		 * @param {iPhame.PhameBlogSearch} [options]
		 * @returns {Promise<iPhame.RetPhameBlogSearch>}
		 */
		blogSearch: (
			options?: iPhame.PhameBlogSearch
		): Promise<iPhame.RetPhameBlogSearch> => {
			return this.makeRequest('phame.blog.search', {
				queryKey: options?.queryKey,
				constraints: options?.constraints,
				attachments: options?.attachments,
				order: options?.order,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		},

		postEdit: () => {
			// TODO
		},

		postSearch: () => {
			// TODO
		}
	};

	public phid = {
		/**
		 *Look up objects by name. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phid.lookup/}
		 *
		 * @param {{
		 * 			names: Array<string>;
		 * 		}} options
		 * @returns {Promise<iPhid.RetPhidLookup>}
		 * 
		 * @example
		 * conduit.phid.lookup({names: ["T1", "T2"]})
		 */
		lookup: (options: {
			names: Array<string>;
		}): Promise<iPhid.RetPhidLookup> => {
			return this.makeRequest('phid.lookup', {
				names: options.names
			});
		},

		/**
		 *Retrieve information about arbitrary PHIDs. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phid.query/}
		 *
		 * @param {{ phids: Array<string> }} options
		 * @returns {Promise<iPhid.RetPhidQuery>}
		 * 
		 * @example
		 * conduit.phid.query({phids: ['PHID-abcd']})
		 */
		query: (options: { phids: Array<string> }): Promise<iPhid.RetPhidQuery> => {
			return this.makeRequest('phid.query', {
				phids: options.phids
			});
		}
	};

	public phriction = {
		/**
		 *Search content in Phriction wiki. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phriction.content.search/}
		 *
		 * @param {iPhriction.PhrictionContentSearch} options
		 * @returns {Promise<iPhriction.RetPhrictionContentSearch>}
		 * 
		 * @example
		 * condoit.phriction.contentSearch({attachments: {content: true}})
		 */
		contentSearch: (
			options: iPhriction.PhrictionContentSearch
		): Promise<iPhriction.RetPhrictionContentSearch> => {
			return this.makeRequest('phriction.content.search', {
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
		 *Create a new Phriction wiki document. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phriction.create/}
		 *
		 * @param {{
		 * 			slug: string;
		 * 			title: string;
		 * 			content: string;
		 * 			description?: string;
		 * 		}} options
		 * @returns {Promise<iPhriction.RetPhrictionCreate>}
		 * 
		 * @example
		 * condoit.phriction.create({slug: 'somepage', title: 'title', content: 'some content'})
		 */
		create: (options: {
			slug: string;
			title: string;
			content: string;
			description?: string;
		}): Promise<iPhriction.RetPhrictionCreate> => {
			return this.makeRequest('phriction.create', {
				slug: options.slug,
				title: options.title,
				content: options.content,
				description: options?.description
			});
		},

		/**
		 *Search Phriction wiki documents. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phriction.document.search/}
		 *
		 * @param {iPhriction.PhrictionDocumentSearch} [options]
		 * @returns {Promise<iPhriction.RetPhrictionDocumentSearch>}
		 */
		documentSearch: (
			options?: iPhriction.PhrictionDocumentSearch
		): Promise<iPhriction.RetPhrictionDocumentSearch> => {
			return this.makeRequest('phriction.document.search', {
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
		 *Edit an existing Phriction wiki document. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phriction.edit/}
		 *
		 * @param {{
		 * 			slug: string;
		 * 			title?: string;
		 * 			content?: string;
		 * 			description?: string;
		 * 		}} options
		 * @returns {Promise<iPhriction.RetPhrictionEdit>}
		 * 
		 * @example
		 * condoit.phriction.edit({slug: '/', content: 'some new content'})
		 */
		edit: (options: {
			slug: string;
			title?: string;
			content?: string;
			description?: string;
		}): Promise<iPhriction.RetPhrictionEdit> => {
			return this.makeRequest('phriction.edit', {
				slug: options.slug,
				title: options?.title,
				content: options?.content,
				description: options?.description
			});
		},

		/**
		 ***Marked for deprecation** Get info for an existing document
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phriction.info/}
		 *
		 * @param {{ slug: string }} options
		 * @returns {Promise<iPhriction.RetPhrictionInfo>}
		 */
		info: (options: { slug: string }): Promise<iPhriction.RetPhrictionInfo> => {
			return this.makeRequest('phriction.info', { slug: options.slug });
		}
	};

	public portal = {
		/**
		 *Edit or create a new portal. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/portal.edit/}
		 *
		 * @param {iPortal.PortalEdit} options
		 * @returns {Promise<iPortal.RetPortalEdit>}
		 */
		edit: (options: iPortal.PortalEdit): Promise<iPortal.RetPortalEdit> => {
			return this.makeRequest('portal.edit', {
				transactions: options.transactions,
				objectIdentifier: options?.objectIdentifier
			});
		},

		/**
		 *Search portals. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/portal.search/}
		 *
		 * @param {iPortal.PortalSearch} [options]
		 * @returns {Promise<iPortal.RetPortalSearch>}
		 */
		search: (
			options?: iPortal.PortalSearch
		): Promise<iPortal.RetPortalSearch> => {
			return this.makeRequest('portal.search', {
				queryKey: options?.queryKey,
				constraints: options?.constraints,
				attachments: options?.attachments,
				order: options?.order,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		}
	};

	public project = {
		/**
		 *Search projects.
		 [Docs]{@link https://secure.phabricator.com/conduit/method/project.column.search/}
		 *
		 * @param {iProject.ColumnSearch} options
		 * @returns {Promise<iProject.RetColumnSearch>}
		 */
		columnSearch: (
			options: iProject.ColumnSearch
		): Promise<iProject.RetColumnSearch> => {
			return this.makeRequest('project.column.search', {
				queryKey: options?.queryKey,
				constraints: options?.constraints,
				order: options?.order,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		},

		/**
		 *Edit or create a project. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/project.edit/}
		 *
		 * @param {iProject.ProjectEdit} options
		 * @returns {Promise<iProject.RetProjectEdit>}
		 */
		edit: (options: iProject.ProjectEdit): Promise<iProject.RetProjectEdit> => {
			return this.makeRequest('project.edit', {
				transactions: options.transactions,
				objectIdentifier: options?.objectIdentifier
			});
		},

		/**
		 ***Marked for deprecation. Execute searches for projects. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/project.query/}
		 *
		 * @param {iProject.ProjectQuery} [options]
		 * @returns {Promise<iProject.RetProjectQuery>}
		 */
		query: (
			options?: iProject.ProjectQuery
		): Promise<iProject.RetProjectQuery> => {
			return this.makeRequest('project.query', {
				ids: options?.ids,
				names: options?.names,
				phids: options?.phids,
				slugs: options?.slugs,
				icons: options?.icons,
				colors: options?.colors,
				status: options?.status,
				members: options?.members,
				limit: options?.limit,
				offset: options?.offset
			});
		},

		/**
		 *Search or query a project. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/project.search/}
		 *
		 * @param {iProject.ProjectSearch} [options]
		 * @returns {Promise<iProject.RetProjectSearch>}
		 */
		search: (
			options?: iProject.ProjectSearch
		): Promise<iProject.RetProjectSearch> => {
			return this.makeRequest('project.search', {
				queryKey: options?.queryKey,
				constraints: options?.constraints,
				attachments: options?.attachments,
				order: options?.order,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		}
	};

	public remarkup = {
		/**
		 *Process text through remarkup in Phabricator context. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/repository.process/}
		 *
		 * @param {iRemarkup.RemarkupProcess} options
		 * @returns {Promise<iRemarkup.RetRemarkupProcess>}
		 */
		process: (
			options: iRemarkup.RemarkupProcess
		): Promise<iRemarkup.RetRemarkupProcess> => {
			return this.makeRequest('remarkup.process', {
				context: options.context,
				contents: options.contents
			});
		}
	};

	/**
	 ***Marked for deprecation**. Query repositories. 
	 [Docs]{@link https://secure.phabricator.com/conduit/method/repository.query/}
	 *
	 * @memberof Condoit
	 */
	public repository = {
		query: (
			options: iRepository.RepositoryQuery
		): Promise<iRepository.RetRepositoryQuery> => {
			return this.makeRequest('repository.query', {
				ids: options?.ids,
				phids: options?.phids,
				callsigns: options?.callsigns,
				vcsTypes: options?.vcsTypes,
				remoteURIs: options?.remoteURIs,
				uuids: options?.uuids,
				order: options?.order,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		}
	};

	public slowvote = {
		/**
		 *Read information about polls. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/slowvote.poll.search/}
		 *
		 * @param {iSlowvote.PollSearch} options
		 * @returns {Promise<iSlowvote.RetPollSearch>}
		 */
		pollSearch: (
			options: iSlowvote.PollSearch
		): Promise<iSlowvote.RetPollSearch> => {
			return this.makeRequest('slowvote.poll.search', {
				queryKey: options?.queryKey,
				constraints: options?.constraints,
				attachments: options?.attachments,
				order: options?.order,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		}
	};

	public token = {
		/**
		 *Give or change token
		 [Docs]{@link https://secure.phabricator.com/conduit/method/token.give/}
		 *
		 * @param {iToken.TokenGive} options
		 * @returns {Promise<iToken.RetTokenGive>}
		 */
		give: (options: iToken.TokenGive): Promise<iToken.RetTokenGive> => {
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
		 * @param {iToken.TokenGiven} options
		 * @returns
		 */
		given: (options: iToken.TokenGiven): Promise<iToken.RetTokenGiven> => {
			return this.makeRequest('token.given', {
				authorPHIDs: options?.authorPHIDs,
				objectPHIDs: options?.objectPHIDs,
				tokenPHIDs: options?.tokenPHIDs?.map((t) => iToken.tokens[t])
			});
		},

		query: (): Promise<iToken.RetTokenQuery> => {
			return this.makeRequest('token.query', {});
		}
	};

	public transaction = {
		/**
		 *Read transactions and comments for an object. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/transaction.search/}
		 *
		 * @param {iTransactions.TransactionsSearch} options
		 * @returns {Promise<iTransactions.RetTransactionsSearch>}
		 */
		search: (
			options: iTransactions.TransactionsSearch
		): Promise<iTransactions.RetTransactionsSearch> => {
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
		 * @param {iUser.UsersEdit} options
		 * @returns {Promise<object>}
		 */
		edit: (options: iUser.UsersEdit): Promise<iUser.RetEdit> => {
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
		search: (options: iUser.UsersSearch): Promise<iUser.RetUsersSearch> => {
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
		 * @returns {Promise<iUser.RetUsersWhoami>}
		 */
		whoami: (): Promise<iUser.RetUsersWhoami> => {
			return this.makeRequest('user.whoami', {});
		}
	};
}
