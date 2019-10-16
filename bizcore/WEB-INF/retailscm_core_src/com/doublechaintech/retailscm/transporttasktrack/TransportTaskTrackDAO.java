
package com.doublechaintech.retailscm.transporttasktrack;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import com.doublechaintech.retailscm.BaseEntity;
import com.doublechaintech.retailscm.SmartList;
import com.doublechaintech.retailscm.MultipleAccessKey;
import com.doublechaintech.retailscm.RetailscmUserContext;
<<<<<<< HEAD
=======

import com.doublechaintech.retailscm.transporttask.TransportTask;

>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
import com.doublechaintech.retailscm.transporttask.TransportTaskDAO;


public interface TransportTaskTrackDAO{

	
	public TransportTaskTrack load(String id, Map<String,Object> options) throws Exception;
	public void enhanceList(List<TransportTaskTrack> transportTaskTrackList);
	public void collectAndEnhance(BaseEntity ownerEntity);
	
	public void alias(List<BaseEntity> entityList);
	
	
	
	
	public TransportTaskTrack present(TransportTaskTrack transportTaskTrack,Map<String,Object> options) throws Exception;
	public TransportTaskTrack clone(String id, Map<String,Object> options) throws Exception;
	
	
	
	public TransportTaskTrack save(TransportTaskTrack transportTaskTrack,Map<String,Object> options);
	public SmartList<TransportTaskTrack> saveTransportTaskTrackList(SmartList<TransportTaskTrack> transportTaskTrackList,Map<String,Object> options);
	public SmartList<TransportTaskTrack> removeTransportTaskTrackList(SmartList<TransportTaskTrack> transportTaskTrackList,Map<String,Object> options);
	public SmartList<TransportTaskTrack> findTransportTaskTrackWithKey(MultipleAccessKey key,Map<String, Object> options);
	public int countTransportTaskTrackWithKey(MultipleAccessKey key,Map<String, Object> options);
	public Map<String, Integer> countTransportTaskTrackWithGroupKey(String groupKey, MultipleAccessKey filterKey,
			Map<String, Object> options);
	public void delete(String transportTaskTrackId, int version) throws Exception;
	public TransportTaskTrack disconnectFromAll(String transportTaskTrackId, int version) throws Exception;
	public int deleteAll() throws Exception;

	
	
	
	public SmartList<TransportTaskTrack> queryList(String sql, Object ... parmeters);
 
 	public SmartList<TransportTaskTrack> findTransportTaskTrackByMovement(String transportTaskId, Map<String,Object> options);
 	public int countTransportTaskTrackByMovement(String transportTaskId, Map<String,Object> options);
 	public Map<String, Integer> countTransportTaskTrackByMovementIds(String[] ids, Map<String,Object> options);
 	public SmartList<TransportTaskTrack> findTransportTaskTrackByMovement(String transportTaskId, int start, int count, Map<String,Object> options);
 	public void analyzeTransportTaskTrackByMovement(SmartList<TransportTaskTrack> resultList, String transportTaskId, Map<String,Object> options);

 
<<<<<<< HEAD
 }
=======
 
}
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854


