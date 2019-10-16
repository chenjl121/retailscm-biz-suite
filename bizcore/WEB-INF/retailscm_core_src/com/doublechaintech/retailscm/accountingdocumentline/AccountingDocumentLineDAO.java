
package com.doublechaintech.retailscm.accountingdocumentline;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import com.doublechaintech.retailscm.BaseEntity;
import com.doublechaintech.retailscm.SmartList;
import com.doublechaintech.retailscm.MultipleAccessKey;
import com.doublechaintech.retailscm.RetailscmUserContext;
<<<<<<< HEAD
=======

import com.doublechaintech.retailscm.accountingdocument.AccountingDocument;
import com.doublechaintech.retailscm.accountingsubject.AccountingSubject;

>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
import com.doublechaintech.retailscm.accountingsubject.AccountingSubjectDAO;
import com.doublechaintech.retailscm.accountingdocument.AccountingDocumentDAO;


public interface AccountingDocumentLineDAO{

	
	public AccountingDocumentLine load(String id, Map<String,Object> options) throws Exception;
	public void enhanceList(List<AccountingDocumentLine> accountingDocumentLineList);
	public void collectAndEnhance(BaseEntity ownerEntity);
	
	public void alias(List<BaseEntity> entityList);
	
	
	
	
	public AccountingDocumentLine present(AccountingDocumentLine accountingDocumentLine,Map<String,Object> options) throws Exception;
	public AccountingDocumentLine clone(String id, Map<String,Object> options) throws Exception;
	
	
	
	public AccountingDocumentLine save(AccountingDocumentLine accountingDocumentLine,Map<String,Object> options);
	public SmartList<AccountingDocumentLine> saveAccountingDocumentLineList(SmartList<AccountingDocumentLine> accountingDocumentLineList,Map<String,Object> options);
	public SmartList<AccountingDocumentLine> removeAccountingDocumentLineList(SmartList<AccountingDocumentLine> accountingDocumentLineList,Map<String,Object> options);
	public SmartList<AccountingDocumentLine> findAccountingDocumentLineWithKey(MultipleAccessKey key,Map<String, Object> options);
	public int countAccountingDocumentLineWithKey(MultipleAccessKey key,Map<String, Object> options);
	public Map<String, Integer> countAccountingDocumentLineWithGroupKey(String groupKey, MultipleAccessKey filterKey,
			Map<String, Object> options);
	public void delete(String accountingDocumentLineId, int version) throws Exception;
	public AccountingDocumentLine disconnectFromAll(String accountingDocumentLineId, int version) throws Exception;
	public int deleteAll() throws Exception;

	
	
	
	public SmartList<AccountingDocumentLine> queryList(String sql, Object ... parmeters);
 
 	public SmartList<AccountingDocumentLine> findAccountingDocumentLineByBelongsTo(String accountingDocumentId, Map<String,Object> options);
 	public int countAccountingDocumentLineByBelongsTo(String accountingDocumentId, Map<String,Object> options);
 	public Map<String, Integer> countAccountingDocumentLineByBelongsToIds(String[] ids, Map<String,Object> options);
 	public SmartList<AccountingDocumentLine> findAccountingDocumentLineByBelongsTo(String accountingDocumentId, int start, int count, Map<String,Object> options);
 	public void analyzeAccountingDocumentLineByBelongsTo(SmartList<AccountingDocumentLine> resultList, String accountingDocumentId, Map<String,Object> options);

 
  
 	public SmartList<AccountingDocumentLine> findAccountingDocumentLineByAccountingSubject(String accountingSubjectId, Map<String,Object> options);
 	public int countAccountingDocumentLineByAccountingSubject(String accountingSubjectId, Map<String,Object> options);
 	public Map<String, Integer> countAccountingDocumentLineByAccountingSubjectIds(String[] ids, Map<String,Object> options);
 	public SmartList<AccountingDocumentLine> findAccountingDocumentLineByAccountingSubject(String accountingSubjectId, int start, int count, Map<String,Object> options);
 	public void analyzeAccountingDocumentLineByAccountingSubject(SmartList<AccountingDocumentLine> resultList, String accountingSubjectId, Map<String,Object> options);

 
<<<<<<< HEAD
 }
=======
 
}
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854


