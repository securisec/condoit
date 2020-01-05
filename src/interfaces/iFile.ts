export interface RetFileInfo {
	result: {
		id: string;
		phid: string;
		objectName: string;
		name: string;
		mimeType: string;
		byteSize: string;
		authorPHID: string;
		dateCreated: string;
		dateModified: string;
		uri: string;
	};
	error_code: string;
	error_info: string;
}
