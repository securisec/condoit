import Axios, { AxiosResponse, AxiosError } from 'axios';
import qs from 'qs';
import { resolve } from 'url';
import { writeFile, readFileSync } from 'fs';

import * as iDrydock from './interfaces/iDrydock';
import * as iEdge from './interfaces/iEdge';
import * as iFeed from './interfaces/iFeed';
import * as iFile from './interfaces/iFile';
import * as iFlag from './interfaces/iFlag';
import * as iHarbormaster from './interfaces/iHarbormaster';
import * as iMacro from './interfaces/iMacro';
import * as iManiphest from './interfaces/iManiphest';
import * as iOwners from './interfaces/iOwners';
import * as iPassphrase from './interfaces/iPassphrase';
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
import { RetTransactions } from './interfaces/iGlobal';

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

	private returnOptions(options: any) {
		return {
			queryKey: options?.queryKey,
			constraints: options?.constraints,
			order: options?.order,
			before: options?.before,
			after: options?.after,
			limit: options?.limit
		};
	}

	private returnOptionsAttachments(options: any) {
		return {
			queryKey: options?.queryKey,
			constraints: options?.constraints,
			attachments: options?.attachments,
			order: options?.order,
			before: options?.before,
			after: options?.after,
			limit: options?.limit
		};
	}

	public almanac = {
		bindingEdit: () => {
			// TODO
		},

		bindingSearch: () => {
			// TODO
		},

		deviceEdit: () => {
			// TODO
		},

		deviceSearch: () => {
			// TODO
		},

		interfaceEdit: () => {
			// TODO
		},

		interfaceSearch: () => {
			// TODO
		},

		namespaceEdit: () => {
			// TODO
		},

		namespaceSearch: () => {
			// TODO
		},

		networkEdit: () => {
			// TODO
		},

		networkSearch: () => {
			// TODO
		},

		serviceEdit: () => {
			// TODO
		},

		serviceSearch: () => {
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
		/**
		 *Retrieve information about Drydock authorizations. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/drydock.authorization.search/}
		 *
		 * @param {iDrydock.DrydockAlmanacSearch} options
		 * @returns {Promise<iDrydock.RetHarbormasterArtifactSearch>}
		 */
		authorizationSearch: (
			options: iDrydock.DrydockAlmanacSearch
		): Promise<iDrydock.RetDDAlmanacSearch> => {
			return this.makeRequest(
				'drydock.authorization.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Apply transactions to create or edit a blueprint. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/drydock.blueprint.edit/}
		 *
		 * @param {iDrydock.DrydockBlueprintEdit} options
		 * @returns {Promise<RetTransactions>}
		 */
		blueprintEdit: (
			options: iDrydock.DrydockBlueprintEdit
		): Promise<RetTransactions> => {
			return this.makeRequest('drydock.blueprint.edit', {
				transactions: options.transactions,
				objectIdentifier: options?.objectIdentifier
			});
		},

		/**
		 *Retrieve information about Drydock blueprints. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/drydock.blueprint.search/}
		 *
		 * @param {iDrydock.DrydockBlueprintSearch} options
		 * @returns {Promise<iDrydock.RetDDBlueprintSearch>}
		 */
		blueprintSearch: (
			options: iDrydock.DrydockBlueprintSearch
		): Promise<iDrydock.RetDDBlueprintSearch> => {
			return this.makeRequest(
				'drydock.blueprint.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Retrieve information about Drydock leases. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/drydock.lease.search/}
		 *
		 * @param {iDrydock.DrydockLeaseSearch} options
		 * @returns {Promise<iDrydock.RetDDLeaseSearch>}
		 */
		leaseSearch: (
			options: iDrydock.DrydockLeaseSearch
		): Promise<iDrydock.RetDDLeaseSearch> => {
			return this.makeRequest(
				'drydock.lease.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Retrieve information about Drydock resources. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/drydock.resource.search/}
		 *
		 * @param {iDrydock.DrydockResourceSearch} options
		 * @returns {Promise<iDrydock.RetDDResourceSearch>}
		 */
		resourceSearch: (
			options: iDrydock.DrydockResourceSearch
		): Promise<iDrydock.RetDDResourceSearch> => {
			return this.makeRequest(
				'drydock.resource.search',
				this.returnOptions(options)
			);
		}
	};

	public edge = {
		/**
		 *Read edge relationships between objects. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/edge.search/}
		 *
		 * @param {iEdge.EdgeSearch} options
		 * @returns {Promise<object>}
		 */
		search: (options: iEdge.EdgeSearch): Promise<object> => {
			return this.makeRequest('edge.search', {
				sourcePHIDs: options.sourcePHIDs,
				types: options.types,
				destinationPHIDs: options?.destinationPHIDs,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		}
	};

	public feed = {
		/**
		 *Publish a story to the feed. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/feed.publish/}
		 *
		 * @param {{
		 * 			type: string;
		 * 			data: object;
		 * 			time?: number;
		 * 		}} options
		 * @returns {Promise<object>}
		 */
		publish: (options: {
			type: string;
			data: object;
			time?: number;
		}): Promise<object> => {
			return this.makeRequest('feed.publish', {
				type: options.type,
				data: options.data,
				time: options?.time
			});
		},

		/**
		 *Query the feed for stories. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/feed.query/}
		 *
		 * @param {iFeed.FeedQuery} [options]
		 * @returns {Promise<iFeed.RetFeedQuery>}
		 */
		query: (options: iFeed.FeedQuery): Promise<iFeed.RetFeedQuery> => {
			return this.makeRequest('feed.query', {
				filterPHIDs: options?.filterPHIDs,
				limit: options?.limit,
				before: options?.before,
				after: options?.after,
				view: options?.view
			});
		}
	};

	public file = {
		/**
		 *Allocate space to upload a file. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.allocate/}
		 *
		 * @param {iFile.FileAllocate} options
		 * @returns {Promise<iFile.RetFileAllocate>}
		 */
		allocate: (options: iFile.FileAllocate): Promise<iFile.RetFileAllocate> => {
			return this.makeRequest('file.allocate', {
				name: options.name,
				contentLength: options.contentLength,
				contentHash: options?.contentHash,
				viewPolicy: options?.viewPolicy,
				deleteAfterEpoch: options?.deleteAfterEpoch
			});
		},

		/**
		 *Down a stored file. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.download/}
		 *
		 * @param {{phid: string}} options
		 * @returns {Promise<string>} Base64 encoded file as string. 
		 */
		download: (options: {
			phid: string;
			path: string;
			encoding: string;
		}): Promise<string | object> => {
			return new Promise((resolve, reject) => {
				this.makeRequest('file.download', { phid: options.phid })
					.then((res) => {
						let data = res.result;
						if (data) {
							let saveData = new Buffer(data, 'base64');
							writeFile(
								options.path,
								saveData,
								options?.encoding ?? 'utf8',
								(err) => {
									if (err) reject(err);
									resolve({ downloadedFile: options.path });
								}
							);
						} else {
							reject(res);
						}
					})
					.catch((error) => reject(error));
			});
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

		/**
		 *Get information about file chunks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.querychunks/}
		 *
		 * @param {{
		 * 			filePHID: string;
		 * 		}} options
		 * @returns {Promise<iFile.RetFileQuerychunks>}
		 */
		querychunks: (options: {
			filePHID: string;
		}): Promise<iFile.RetFileQuerychunks> => {
			return this.makeRequest('file.querychunks', {
				filePHID: options.filePHID
			});
		},

		/**
		 *Search for files. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.search/}
		 *
		 * @param {iFile.FileSearch} options
		 * @returns {Promise<iFile.RetFileSearch>}
		 */
		search: (options: iFile.FileSearch): Promise<iFile.RetFileSearch> => {
			return this.makeRequest(
				'file.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Upload a file. The Phabricator API makes the name optional, but this 
		 method requires it. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.upload/}
		 *
		 * @param {iFile.FileUpload} options
		 * @returns {Promise<iFile.RetFileUpload>}
		 */
		upload: (options: iFile.FileUpload): Promise<iFile.RetFileUpload> => {
			return this.makeRequest('file.upload', {
				data_base64: new Buffer(readFileSync(options.filePath)).toString(
					'base64'
				),
				name: options.name,
				viewPolicy: options?.viewPolicy,
				canCDN: options?.canCDN
			});
		},

		/**
		 *Upload a chunk of file data to the server. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.uploadchunk/}
		 *
		 * @param {iFile.FileUploadchunk} options
		 * @returns {Promise<object>}
		 */
		uploadchunk: (options: iFile.FileUploadchunk): Promise<null> => {
			return this.makeRequest('file.uploadchunk', {
				filePHID: options.filePHID,
				byteStart: options.byteStart,
				data: options.data,
				dataEncoding: options.dataEncoding
			});
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

	/**
	 *Harbormaster is the application used to track and manage CI/CD within Phabricator
	 *
	 * @memberof Condoit
	 */
	public harbormaster = {
		/**
		 *Query Harbormaster for build artifacts. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.artifact.search/}
		 *
		 * @param {iHarbormaster.HarbormasterArtifactSearch} [options]
		 * @returns {Promise<iHarbormaster.RetHarbormasterArtifactSearch>}
		 */
		artifactSearch: (
			options: iHarbormaster.HarbormasterArtifactSearch
		): Promise<iHarbormaster.RetHarbormasterArtifactSearch> => {
			return this.makeRequest(
				'harbormaster.artifact.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Search Harbormaster build information. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.build.search/}
		 *
		 * @param {iHarbormaster.HarbormasterBuildSearch} [options]
		 * @returns {Promise<iHarbormaster.RetHarbormasterBuildSearch>}
		 */
		buildSearch: (
			options: iHarbormaster.HarbormasterBuildSearch
		): Promise<iHarbormaster.RetHarbormasterBuildSearch> => {
			return this.makeRequest(
				'harbormaster.build.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Endpoint for buildable artifacts and their statuses. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.buildable.search/}
		 *
		 * @param {iHarbormaster.HarbormasterBuildplanSearch} options
		 * @returns {Promise<iHarbormaster.RetHarbormasterBuildplanSearch>}
		 */
		buildableSearch: (
			options: iHarbormaster.HarbormasterBuildplanSearch
		): Promise<iHarbormaster.RetHarbormasterBuildplanSearch> => {
			return this.makeRequest(
				'harbormaster.buildable.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Edit a Harbormaster buildplan. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.buildplan.edit/}
		 *
		 * @param {iHarbormaster.HarbormasterBuildplanEdit} options
		 * @returns {Promise<RetTransactions>}
		 */
		buildplanEdit: (
			options: iHarbormaster.HarbormasterBuildplanEdit
		): Promise<RetTransactions> => {
			return this.makeRequest('harbormaster.buildplan.edit', {
				transactions: options.transactions,
				objectIdentifier: options?.objectIdentifier
			});
		},

		/**
		 *Query build plans in Harbormaster. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.buildplan.search/}
		 *
		 * @param {iHarbormaster.HarbormasterBuildableSearch} [options]
		 * @returns {Promise<iHarbormaster.RetHarbormasterBuildableSearch>}
		 */
		buildplanSearch: (
			options: iHarbormaster.HarbormasterBuildplanSearch
		): Promise<iHarbormaster.RetHarbormasterBuildplanSearch> => {
			return this.makeRequest(
				'harbormaster.buildplan.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Search logs for builds. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.log.search/}
		 *
		 * @param {iHarbormaster.HarbormasterLogSearch} options
		 * @returns {Promise<iHarbormaster.RetHarbormasterLogSearch>}
		 */
		logSearch: (
			options: iHarbormaster.HarbormasterLogSearch
		): Promise<iHarbormaster.RetHarbormasterLogSearch> => {
			return this.makeRequest(
				'harbormaster.log.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Search build targets. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.target.search/}
		 *
		 * @param {iHarbormaster.HarbormasterTargetSearch} options
		 * @returns {Promise<iHarbormaster.RetHarbormasterTargetSearch>}
		 */
		targetSearch: (
			options: iHarbormaster.HarbormasterTargetSearch
		): Promise<iHarbormaster.RetHarbormasterTargetSearch> => {
			return this.makeRequest(
				'harbormaster.target.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Create a harbormaster build artifact. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.createartifact/}
		 *
		 * @param {iHarbormaster.HarbormasterCreateartifact} options
		 * @returns {Promise<object>}
		 */
		createArtifact: (
			options: iHarbormaster.HarbormasterCreateartifact
		): Promise<object> => {
			return this.makeRequest('harbormaster.create.artifact', {
				buildTargetPHID: options.buildTargetPHID,
				artifactKey: options.artifactKey,
				artifactType: options.artifactType,
				artifactData: options.artifactData
			});
		},

		/**
		 *Load or create build autotargets.
		 * [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.queryautotargets/}
		 *
		 * @param {{
		 * 			objectPHID: string;
		 * 			targetKeys: Array<string>;
		 * 		}} options
		 * @returns {Promise<object>}
		 */
		queryAutotargets: (options: {
			objectPHID: string;
			targetKeys: Array<string>;
		}): Promise<object> => {
			return this.makeRequest('harbormaster.queryautotargets', {
				objectPHID: options.objectPHID,
				targetKeys: options.targetKeys
			});
		},

		/**
		 * Query Harbormaster buildables.
		 * [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.querybuildables/}
		 *
		 * @param {iHarbormaster.HarbormasterQuerybuildables} [options]
		 * @returns {Promise<object>}
		 */
		querybuildables: (
			options: iHarbormaster.HarbormasterQuerybuildables
		): Promise<object> => {
			return this.makeRequest('harbormaster.querybuildables', {
				ids: options?.ids,
				phids: options?.phids,
				buildablePHIDs: options?.buildablePHIDs,
				containerPHIDs: options?.containerPHIDs,
				manualBuildables: options?.manualBuildables,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		},

		/**
		 *Send a message about the status of a build target to Harbormaster, 
		 notifying the application of build results in an external system. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.sendmessage/}
		 *
		 * @param {iHarbormaster.HarbormasterSendmessage} options
		 * @returns {Promise<object>}
		 */
		sendmessage: (
			options: iHarbormaster.HarbormasterSendmessage
		): Promise<object> => {
			return this.makeRequest('harbormaster.sendmessage', {
				buildTargetPHID: options.buildTargetPHID,
				type: options.type,
				unit: options?.unit,
				lint: options?.lint
			});
		}
	};

	/**
	 *The Macro application is used for image hosting.
	 *
	 * @memberof Condoit
	 */
	public macro = {
		/**
		 *Edit or add a new image to Macro application. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/macro.edit/}
		 *
		 * @param {iMacro.MarcoEdit} options
		 * @returns {Promise<RetTransactions>}
		 */
		edit: (options: iMacro.MarcoEdit): Promise<RetTransactions> => {
			return this.makeRequest('macro.edit', {
				transactions: options.transactions,
				objectIdentifier: options?.objectIdentifier
			});
		},

		/**
		 *Query Macro application for images. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/macro.query/}
		 *
		 * @param {iMacro.MacroQuery} [options]
		 * @returns {Promise<iMacro.RetMacroQuery>}
		 */
		query: (options: iMacro.MacroQuery): Promise<iMacro.RetMacroQuery> => {
			return this.makeRequest('macro.query', {
				authodPHIDs: options?.authorPHIDs,
				phids: options?.phids,
				ids: options?.ids,
				names: options?.names,
				nameLike: options?.nameLike
			});
		},

		/**
		 *Create a meme from an existing image. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phriction.creatememe/}
		 *
		 * @param {{
		 * 			macroName: string;
		 * 			upperText?: string;
		 * 			lowerText?: string;
		 * 		}} options
		 * @returns {Promise<iMacro.RetMacroCreatememe>}
		 */
		creatememe: (options: {
			macroName: string;
			upperText?: string;
			lowerText?: string;
		}): Promise<iMacro.RetMacroCreatememe> => {
			return this.makeRequest('macro.creatememe', {
				macroName: options.macroName,
				upperText: options?.upperText,
				lowerText: options?.lowerText
			});
		}
	};

	/**
	 *API endpoints for Maniphest which is Phabricators task management 
	 system. 
	 *
	 * @memberof Condoit
	 */
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
		 * @returns {Promise<RetTransactions>}
		 */
		edit: (options: iManiphest.ManiphestEdit): Promise<RetTransactions> => {
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
			return this.makeRequest(
				'maniphest.search',
				this.returnOptionsAttachments(options)
			);
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

	/**
	 *API endpoints for the Owners application.
	 *
	 * @memberof Condoit
	 */
	public owners = {
		/**
		 *Create or edit an object in the Owners application. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/owners.edit/}
		 *
		 * @param {iOwners.OwnersEdit} options
		 * @returns {Promise<RetTransactions>}
		 */
		edit: (options: iOwners.OwnersEdit): Promise<RetTransactions> => {
			return this.makeRequest('owners.edit', {
				transactions: options.transactions,
				objectIdentifier: options?.objectIdentifier
			});
		},

		/**
		 *Search the Owners application. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/owners.search/}
		 *
		 * @param {iOwners.OwnersSearch} [options]
		 * @returns {Promise<iOwners.RetOwnersSearch>}
		 */
		search: (
			options: iOwners.OwnersSearch
		): Promise<iOwners.RetOwnersSearch> => {
			return this.makeRequest(
				'owners.search',
				this.returnOptionsAttachments(options)
			);
		}
	};

	/**
	 *API around Phabricators credential store.
	 *
	 * @memberof Condoit
	 */
	public passphrase = {
		/**
		 *Query credentials. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/passphrase.query/}
		 *
		 * @param {iPassphrase.PassphraseQuery} [options]
		 * @returns {Promise<iPassphrase.RetPassphraseQuery>}
		 */
		query: (
			options: iPassphrase.PassphraseQuery
		): Promise<iPassphrase.RetPassphraseQuery> => {
			return this.makeRequest('passphrase.query', {
				ids: options?.ids,
				phids: options?.phids,
				needSecrets: options?.needSecrets,
				needPublicKeys: options?.needPublicKeys,
				order: options?.order,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		}
	};

	/**
	 *API around the Phame application which is the blogging 
	 service provided by Phabricator. 
	 *
	 * @memberof Condoit
	 */
	public phame = {
		/**
		 *Edit or create a new Phame blog. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phame.blog.edit/}
		 *
		 * @param {iPhame.PhameBlogEdit} options
		 * @returns {Promise<RetTransactions>}
		 */
		blogEdit: (options: iPhame.PhameBlogEdit): Promise<RetTransactions> => {
			return this.makeRequest('phame.blog.edit', {
				transactions: options.transactions,
				objectIdentifier: options?.objectIdentifier
			});
		},

		/**
		 *Search Phame blogs. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phame.blog.search/}
		 *
		 * @param {iPhame.PhameBlogSearch} [options]
		 * @returns {Promise<iPhame.RetPhameBlogSearch>}
		 */
		blogSearch: (
			options: iPhame.PhameBlogSearch
		): Promise<iPhame.RetPhameBlogSearch> => {
			return this.makeRequest(
				'phame.blog.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Edit or create a new blog post. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phame.post.edit/}
		 *
		 * @param {iPhame.PhamePostEdit} options
		 * @returns {Promise<RetTransactions>}
		 */
		postEdit: (options: iPhame.PhamePostEdit): Promise<RetTransactions> => {
			return this.makeRequest('phame.post.edit', {
				transactions: options.transactions,
				objectIdentifier: options?.objectIdentifier
			});
		},

		/**
		 *Search for Phame blog posts. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phame.post.search/}
		 *
		 * @param {iPhame.PhamePostSearch} [options]
		 * @returns {Promise<iPhame.RetPhamePostSearch>}
		 */
		postSearch: (
			options: iPhame.PhamePostSearch
		): Promise<iPhame.RetPhamePostSearch> => {
			return this.makeRequest(
				'phame.post.search',
				this.returnOptionsAttachments(options)
			);
		}
	};

	/**
	 *API around PHID which is the unique identifier used by Phabricator 
	 across all applications. 
	 *
	 * @memberof Condoit
	 */
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

	/**
	 *API around the Phriction application which is a wiki service.
	 *
	 * @memberof Condoit
	 */
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
			return this.makeRequest(
				'phriction.content.search',
				this.returnOptionsAttachments(options)
			);
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
			options: iPhriction.PhrictionDocumentSearch
		): Promise<iPhriction.RetPhrictionDocumentSearch> => {
			return this.makeRequest(
				'phriction.document.search',
				this.returnOptionsAttachments(options)
			);
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
		 * @returns {Promise<RetTransactions>}
		 */
		edit: (options: iPortal.PortalEdit): Promise<RetTransactions> => {
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
			options: iPortal.PortalSearch
		): Promise<iPortal.RetPortalSearch> => {
			return this.makeRequest(
				'portal.search',
				this.returnOptionsAttachments(options)
			);
		}
	};

	/**
	 *API around the Project application in Phabricator.
	 *
	 * @memberof Condoit
	 */
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
			return this.makeRequest(
				'project.column.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Edit or create a project. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/project.edit/}
		 *
		 * @param {iProject.ProjectEdit} options
		 * @returns {Promise<RetTransactions>}
		 */
		edit: (options: iProject.ProjectEdit): Promise<RetTransactions> => {
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
			options: iProject.ProjectQuery
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
			options: iProject.ProjectSearch
		): Promise<iProject.RetProjectSearch> => {
			return this.makeRequest(
				'project.search',
				this.returnOptionsAttachments(options)
			);
		}
	};

	/**
	 *API around converting markdown to markup
	 *
	 * @memberof Condoit
	 */
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
	 *API around getting information about repositories.
	 *
	 * @memberof Condoit
	 */
	public repository = {
		/**
		 ***Marked for deprecation**. Query repositories. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/repository.query/}
		 *
		 * @memberof Condoit
		 */
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

	/**
	 *API endpoints around polls.
	 *
	 * @memberof Condoit
	 */
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
			return this.makeRequest(
				'slowvote.poll.search',
				this.returnOptionsAttachments(options)
			);
		}
	};

	/**
	 *Tokens are badges/emojies that are applied to Phabricator applications.
	 *
	 * @memberof Condoit
	 */
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

	/**
	 *API endpoints related to transaction management. Transactions are 
	 objects applied to any Phabricator applicaiton. 
	 *
	 * @memberof Condoit
	 */
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

	/**
	 *API endpoints related to user management.
	 *
	 * @memberof Condoit
	 */
	public user = {
		/**
		 *Edit user information. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.edit/}
		 *
		 * @param {iUser.UsersEdit} options
		 * @returns {Promise<RetTransactions>}
		 */
		edit: (options: iUser.UsersEdit): Promise<RetTransactions> => {
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
			return this.makeRequest(
				'user.search',
				this.returnOptionsAttachments(options)
			);
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
