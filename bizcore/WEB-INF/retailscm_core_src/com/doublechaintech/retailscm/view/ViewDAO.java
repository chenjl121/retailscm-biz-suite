
package com.doublechaintech.retailscm.view;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import com.doublechaintech.retailscm.BaseEntity;
import com.doublechaintech.retailscm.SmartList;
import com.doublechaintech.retailscm.MultipleAccessKey;
import com.doublechaintech.retailscm.RetailscmUserContext;


<<<<<<< HEAD
=======


>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
public interface ViewDAO{

	
	public View load(String id, Map<String,Object> options) throws Exception;
	public void enhanceList(List<View> viewList);
	public void collectAndEnhance(BaseEntity ownerEntity);
	
	public void alias(List<BaseEntity> entityList);
	
	
	
	
	public View present(View view,Map<String,Object> options) throws Exception;
	public View clone(String id, Map<String,Object> options) throws Exception;
	
	
	
	public View save(View view,Map<String,Object> options);
	public SmartList<View> saveViewList(SmartList<View> viewList,Map<String,Object> options);
	public SmartList<View> removeViewList(SmartList<View> viewList,Map<String,Object> options);
	public SmartList<View> findViewWithKey(MultipleAccessKey key,Map<String, Object> options);
	public int countViewWithKey(MultipleAccessKey key,Map<String, Object> options);
	public Map<String, Integer> countViewWithGroupKey(String groupKey, MultipleAccessKey filterKey,
			Map<String, Object> options);
	public void delete(String viewId, int version) throws Exception;
	public View disconnectFromAll(String viewId, int version) throws Exception;
	public int deleteAll() throws Exception;

	
	
	
	public SmartList<View> queryList(String sql, Object ... parmeters);
<<<<<<< HEAD
=======

>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
}


