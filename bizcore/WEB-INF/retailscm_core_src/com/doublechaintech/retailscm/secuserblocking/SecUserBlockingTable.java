
package com.doublechaintech.retailscm.secuserblocking;
import com.doublechaintech.retailscm.AccessKey;


public class SecUserBlockingTable{


	public static AccessKey withId(Object value){
		AccessKey accessKey = new AccessKey();
		accessKey.setColumnName(COLUMN_ID);
		accessKey.setValue(value);
		return accessKey;
	}
	//Add extra identifiers
	

	//only this package can use this, so the scope is default, not public, not private either nor protected
<<<<<<< HEAD
	static final String TABLE_NAME="sec_user_blocking_data";
=======
	public static final String TABLE_NAME="sec_user_blocking_data";
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
	static final String COLUMN_ID = "id";
	static final String COLUMN_WHO = "who";
	static final String COLUMN_BLOCK_TIME = "block_time";
	static final String COLUMN_COMMENTS = "comments";
	static final String COLUMN_VERSION = "version";
 
<<<<<<< HEAD
	static final String []ALL_CLOUMNS = {COLUMN_ID, 
		COLUMN_WHO, COLUMN_BLOCK_TIME, COLUMN_COMMENTS, 
		COLUMN_VERSION};
	static final String []NORMAL_CLOUMNS = {
=======
	public static final String []ALL_CLOUMNS = {COLUMN_ID, 
		COLUMN_WHO, COLUMN_BLOCK_TIME, COLUMN_COMMENTS, 
		COLUMN_VERSION};
	public static final String []NORMAL_CLOUMNS = {
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
		COLUMN_WHO, COLUMN_BLOCK_TIME, COLUMN_COMMENTS
		};
	
	
}


