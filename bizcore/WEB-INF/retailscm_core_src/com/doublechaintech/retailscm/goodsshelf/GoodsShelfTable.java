
package com.doublechaintech.retailscm.goodsshelf;
import com.doublechaintech.retailscm.AccessKey;


public class GoodsShelfTable{


	public static AccessKey withId(Object value){
		AccessKey accessKey = new AccessKey();
		accessKey.setColumnName(COLUMN_ID);
		accessKey.setValue(value);
		return accessKey;
	}
	//Add extra identifiers
	

	//only this package can use this, so the scope is default, not public, not private either nor protected
<<<<<<< HEAD
	static final String TABLE_NAME="goods_shelf_data";
=======
	public static final String TABLE_NAME="goods_shelf_data";
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
	static final String COLUMN_ID = "id";
	static final String COLUMN_LOCATION = "location";
	static final String COLUMN_STORAGE_SPACE = "storage_space";
	static final String COLUMN_SUPPLIER_SPACE = "supplier_space";
	static final String COLUMN_DAMAGE_SPACE = "damage_space";
	static final String COLUMN_LAST_UPDATE_TIME = "last_update_time";
	static final String COLUMN_VERSION = "version";
 
<<<<<<< HEAD
	static final String []ALL_CLOUMNS = {COLUMN_ID, 
		COLUMN_LOCATION, COLUMN_STORAGE_SPACE, COLUMN_SUPPLIER_SPACE, COLUMN_DAMAGE_SPACE, COLUMN_LAST_UPDATE_TIME, 
		COLUMN_VERSION};
	static final String []NORMAL_CLOUMNS = {
=======
	public static final String []ALL_CLOUMNS = {COLUMN_ID, 
		COLUMN_LOCATION, COLUMN_STORAGE_SPACE, COLUMN_SUPPLIER_SPACE, COLUMN_DAMAGE_SPACE, COLUMN_LAST_UPDATE_TIME, 
		COLUMN_VERSION};
	public static final String []NORMAL_CLOUMNS = {
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
		COLUMN_LOCATION, COLUMN_STORAGE_SPACE, COLUMN_SUPPLIER_SPACE, COLUMN_DAMAGE_SPACE, COLUMN_LAST_UPDATE_TIME
		};
	
	
}


