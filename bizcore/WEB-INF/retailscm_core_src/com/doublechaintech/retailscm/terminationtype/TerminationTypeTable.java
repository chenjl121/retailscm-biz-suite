
package com.doublechaintech.retailscm.terminationtype;
import com.doublechaintech.retailscm.AccessKey;


public class TerminationTypeTable{


	public static AccessKey withId(Object value){
		AccessKey accessKey = new AccessKey();
		accessKey.setColumnName(COLUMN_ID);
		accessKey.setValue(value);
		return accessKey;
	}
	//Add extra identifiers
	

	//only this package can use this, so the scope is default, not public, not private either nor protected
<<<<<<< HEAD
	static final String TABLE_NAME="termination_type_data";
=======
	public static final String TABLE_NAME="termination_type_data";
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
	static final String COLUMN_ID = "id";
	static final String COLUMN_CODE = "code";
	static final String COLUMN_COMPANY = "company";
	static final String COLUMN_BASE_DESCRIPTION = "base_description";
	static final String COLUMN_DETAIL_DESCRIPTION = "detail_description";
	static final String COLUMN_VERSION = "version";
 
<<<<<<< HEAD
	static final String []ALL_CLOUMNS = {COLUMN_ID, 
		COLUMN_CODE, COLUMN_COMPANY, COLUMN_BASE_DESCRIPTION, COLUMN_DETAIL_DESCRIPTION, 
		COLUMN_VERSION};
	static final String []NORMAL_CLOUMNS = {
=======
	public static final String []ALL_CLOUMNS = {COLUMN_ID, 
		COLUMN_CODE, COLUMN_COMPANY, COLUMN_BASE_DESCRIPTION, COLUMN_DETAIL_DESCRIPTION, 
		COLUMN_VERSION};
	public static final String []NORMAL_CLOUMNS = {
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
		COLUMN_CODE, COLUMN_COMPANY, COLUMN_BASE_DESCRIPTION, COLUMN_DETAIL_DESCRIPTION
		};
	
	
}


