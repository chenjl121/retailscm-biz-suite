package com.skynet.infrastructure;

<<<<<<< HEAD
=======
import java.util.List;

>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
public interface CacheService {
	public Object get(String key, Class<?> clazz) ;
	public void put(String key, Object value, int ttlInSeconds) ;
	public void remove(String key) ;
<<<<<<< HEAD
	
=======

	default void lpush(String key, Object value , int ttlInSeconds){};
	default void rpush(String key, Object value , int ttlInSeconds){};
	default void ltrime(String key, int start, int end){};
	default <T> List<T> lget(String key, Class<T> clazz){return  null;};
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
}
