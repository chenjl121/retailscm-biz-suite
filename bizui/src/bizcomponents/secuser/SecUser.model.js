
<<<<<<< HEAD

=======
import React from 'react'
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
import pathToRegexp from 'path-to-regexp'
import { routerRedux } from 'dva/router'
import { notification } from 'antd'
import GlobalComponents from '../../custcomponents';
<<<<<<< HEAD

import modeltool from '../../utils/modeltool'
const {setupModel,hasError,handleClientError,handleServerError,keepValueWithKeySuffix}=modeltool

=======
import appLocaleName from '../../common/Locale.tool'
import modeltool from '../../utils/modeltool'
const {setupModel,hasError,handleClientError,handleServerError,keepValueWithKeySuffix}=modeltool

const notifySuccess=(userContext)=>{

	notification.success({
        message: appLocaleName(userContext,'Success'),
        description: appLocaleName(userContext,'Success'),
      })

}

>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854

export default {

  namespace: '_secUser',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
      	const modelName = 'secUser'
      	const parameter = {dispatch,history,location,modelName}
        //console.log("setupModel",setupModel,typeof(setupModel))
      	setupModel(parameter)

      })
    },
  },
  effects: {
    *view({ payload }, { call, put, select }) { 
    
      const cachedData = yield select(state => state._secUser)
      //if the data in the cache, just show it, there is no delay
      const link = payload.pathname
      //if the data in the cache, just show it, there is no delay
      if(cachedData.class){
        //yield put({ type: 'breadcrumb/gotoLink', payload: { displayName:cachedData.displayName,link }} )
        yield put({ type: 'updateState', payload: cachedData })
        
        if(payload.useCache){
        	return //use cache for returning page
        }
        
      }else{
        yield put({ type: 'showLoading', payload })
      }
      
      const {SecUserService} = GlobalComponents;
      const data = yield call(SecUserService.view, payload.id)
      
      const displayName = payload.displayName||data.displayName
      
      
      yield put({ type: 'breadcrumb/gotoLink', payload: { displayName,link }} )
      

      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) { 
      const {SecUserService} = GlobalComponents;
      //yield put({ type: 'showLoading', payload })
      const data = yield call(SecUserService.load, payload.id, payload.parameters)
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
    
    *doJob({ payload }, { call, put }) { 
<<<<<<< HEAD
=======
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {TaskService} = GlobalComponents;
      //yield put({ type: 'showLoading', payload })      
      const {serviceNameToCall, id, parameters} = payload;
      if(!serviceNameToCall){
<<<<<<< HEAD
      	handleClientError("没有提供后台服务的名字, 该服务没有注册")
      	return;
      }
      
=======
      	handleClientError(appLocaleName(userContext,'ServiceNotRegistered'))
      	return;
      }
      "react/dva_object_model.jsp"
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      
      const data = yield call(serviceNameToCall, id, parameters)
      if(handleServerError(data)){
      	return
      }
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
       
    
    
    *gotoCreateForm({ payload }, { put }) {
      const { id, role } = payload
      yield put(routerRedux.push(`/secUser/${id}/list/${role}CreateForm`))
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, role, selectedRows, currentUpdateIndex } = payload
      const state = { id, role, selectedRows, currentUpdateIndex }
      const location = { pathname: `/secUser/${id}/list/${role}UpdateForm`, state }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type,listName } = payload
      yield put(routerRedux.push(`/secUser/${id}/list/${type}List/${listName}`))
    },




    *addUserApp({ payload }, { call, put }) {
<<<<<<< HEAD
=======
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {SecUserService} = GlobalComponents;

      const { id, role, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SecUserService.addUserApp, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/secUser/${id}/list/${role}CreateForm'))
<<<<<<< HEAD
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
<<<<<<< HEAD
      const location = { pathname: `/secUser/${id}/list/\UserAppList/用户应用程序列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateUserApp({ payload }, { call, put }) {
=======
      const location = { pathname: `/secUser/${id}/list/UserAppList/用户应用程序+${appLocaleName(userContext,'List')}`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateUserApp({ payload }, { call, put }) {
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {SecUserService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SecUserService.updateUserApp, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
<<<<<<< HEAD
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      
      if (continueNext) {
        return
      }
<<<<<<< HEAD
      const location = { pathname: `/secUser/${id}/list/\UserAppList/用户应用程序列表`, state: newPlayload }
=======
      const location = { pathname: `/secUser/${id}/list/UserAppList/用户应用程序列表`, state: newPlayload }
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      yield put(routerRedux.push(location))
    },
    *gotoNextUserAppUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeUserAppList({ payload }, { call, put }) {
<<<<<<< HEAD
=======
     const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {SecUserService} = GlobalComponents; 
      const { id, role, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SecUserService.removeUserAppList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
<<<<<<< HEAD
        
     
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
    },




    *addLoginHistory({ payload }, { call, put }) {
<<<<<<< HEAD
=======
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {SecUserService} = GlobalComponents;

      const { id, role, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SecUserService.addLoginHistory, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/secUser/${id}/list/${role}CreateForm'))
<<<<<<< HEAD
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
<<<<<<< HEAD
      const location = { pathname: `/secUser/${id}/list/\LoginHistoryList/登录历史列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateLoginHistory({ payload }, { call, put }) {
=======
      const location = { pathname: `/secUser/${id}/list/LoginHistoryList/登录历史+${appLocaleName(userContext,'List')}`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateLoginHistory({ payload }, { call, put }) {
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {SecUserService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SecUserService.updateLoginHistory, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
<<<<<<< HEAD
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      
      if (continueNext) {
        return
      }
<<<<<<< HEAD
      const location = { pathname: `/secUser/${id}/list/\LoginHistoryList/登录历史列表`, state: newPlayload }
=======
      const location = { pathname: `/secUser/${id}/list/LoginHistoryList/登录历史列表`, state: newPlayload }
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      yield put(routerRedux.push(location))
    },
    *gotoNextLoginHistoryUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeLoginHistoryList({ payload }, { call, put }) {
<<<<<<< HEAD
=======
     const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {SecUserService} = GlobalComponents; 
      const { id, role, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SecUserService.removeLoginHistoryList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
<<<<<<< HEAD
        
     
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
    },

  },
  
  reducers: {
    updateState(state, action) {
      const payload = { ...action.payload, loading: true }
      const valueToKeep = keepValueWithKeySuffix(state,"Parameters") 
      return { ...valueToKeep, ...payload}
    },
    showLoading(state, action) {
      // const loading=true
      const payload = { ...action.payload, loading: true }
      const valueToKeep = keepValueWithKeySuffix(state,"Parameters") 
      return { ...valueToKeep, ...payload}
    },
  },
}

