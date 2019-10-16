<<<<<<< HEAD

import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'


=======
import React from 'react'
import { Icon,Divider } from 'antd'

import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854


const menuData = {menuName:"货物", menuFor: "goods",
  		subItems: [
<<<<<<< HEAD
  {name: 'goodsMovementList', displayName:'货物移动', icon:'500px',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false},
=======
  {name: 'goodsMovementList', displayName:'货物移动', icon:'500px',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
  
  		],
}

<<<<<<< HEAD
const renderTextCell=(value, record)=>{

	if(!value){
		return '';
	}
	if(value==null){
		return '';
	}
	if(value.length>15){
		return value.substring(0,15)+"...("+value.length+"字)"
	}
	return value
	
}

const renderIdentifier=(value, record, targtObjectType)=>{

	return (<Link to={`/${targtObjectType}/${value}/dashboard`}>{value}</Link>)
	
}

const renderDateCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD');
}
const renderDateTimeCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD HH:mm');	
}

const renderImageCell=(value, record, title)=>{
	return (<ImagePreview imageTitle={title} imageLocation={value} />)	
}

const renderMoneyCell=(value, record)=>{
	if(!value){
		return '空'
	}
	if(value == null){
		return '空'
	}
	return (`￥${value.toFixed(2)}`)
}

const renderBooleanCell=(value, record)=>{

	return  (value? '是' : '否')

}

const renderReferenceCell=(value, record)=>{

	return (value ? value.displayName : '暂无') 

}

const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderTextCell(text,record,'goods') },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: 'RFID', debugtype: 'string', dataIndex: 'rfid', width: '11',render: (text, record)=>renderTextCell(text,record) },
  { title: '计量单位', debugtype: 'string', dataIndex: 'uom', width: '5',render: (text, record)=>renderTextCell(text,record) },
  { title: '最大包装', debugtype: 'int', dataIndex: 'maxPackage', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '到期时间', dataIndex: 'expireTime', render: (text, record) =>renderDateCell(text,record) },
  { title: 'SKU', dataIndex: 'sku', render: (text, record) => renderReferenceCell(text, record)},
  { title: '收货区', dataIndex: 'receivingSpace', render: (text, record) => renderReferenceCell(text, record)},
  { title: '货位', dataIndex: 'goodsAllocation', render: (text, record) => renderReferenceCell(text, record)},
  { title: '智能托盘', dataIndex: 'smartPallet', render: (text, record) => renderReferenceCell(text, record)},
  { title: '发货区', dataIndex: 'shippingSpace', render: (text, record) => renderReferenceCell(text, record)},
  { title: '运输任务', dataIndex: 'transportTask', render: (text, record) => renderReferenceCell(text, record)},
  { title: '双链小超', dataIndex: 'retailStore', render: (text, record) => renderReferenceCell(text, record)},
  { title: '订单', dataIndex: 'bizOrder', render: (text, record) => renderReferenceCell(text, record)},
  { title: '生超的订单', dataIndex: 'retailStoreOrder', render: (text, record) => renderReferenceCell(text, record)},
  { title: '包装', dataIndex: 'packaging', render: (text, record) => renderReferenceCell(text, record)},
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '10',render: (text, record)=>renderTextCell(text,record) },

]

=======

const settingMenuData = {menuName:"货物", menuFor: "goods",
  		subItems: [
  
  		],
}

>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
const fieldLabels = {
  id: '序号',
  name: '名称',
  rfid: 'RFID',
  uom: '计量单位',
  maxPackage: '最大包装',
  expireTime: '到期时间',
  sku: 'SKU',
  receivingSpace: '收货区',
  goodsAllocation: '货位',
  smartPallet: '智能托盘',
  shippingSpace: '发货区',
  transportTask: '运输任务',
  retailStore: '双链小超',
  bizOrder: '订单',
  retailStoreOrder: '生超的订单',
  packaging: '包装',
  currentStatus: '当前状态',

}

<<<<<<< HEAD

const GoodsBase={menuData,displayColumns,fieldLabels,displayColumns}
=======
const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '8', render: (text, record)=>renderTextCell(text,record,'goods') , sorter: true },
  { title: fieldLabels.name, debugtype: 'string', dataIndex: 'name', width: '8',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.rfid, debugtype: 'string', dataIndex: 'rfid', width: '11',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.uom, debugtype: 'string', dataIndex: 'uom', width: '5',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.maxPackage, debugtype: 'int', dataIndex: 'maxPackage', width: '6',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.expireTime, dataIndex: 'expireTime', render: (text, record) =>renderDateCell(text,record), sorter: true },
  { title: fieldLabels.sku, dataIndex: 'sku', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.receivingSpace, dataIndex: 'receivingSpace', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.goodsAllocation, dataIndex: 'goodsAllocation', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.smartPallet, dataIndex: 'smartPallet', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.shippingSpace, dataIndex: 'shippingSpace', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.transportTask, dataIndex: 'transportTask', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.retailStore, dataIndex: 'retailStore', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.bizOrder, dataIndex: 'bizOrder', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.retailStoreOrder, dataIndex: 'retailStoreOrder', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.packaging, dataIndex: 'packaging', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.currentStatus, debugtype: 'string', dataIndex: 'currentStatus', width: '10',render: (text, record)=>renderTextCell(text,record)},

]
// refernce to https://ant.design/components/list-cn/
const renderItemOfList=(goods,targetComponent)=>{

  const userContext = null
  return (
    <div key={goods.id}>
	
      <DescriptionList  key={goods.id} size="small" col="4">
        <Description term="序号">{goods.id}</Description> 
        <Description term="名称">{goods.name}</Description> 
        <Description term="RFID">{goods.rfid}</Description> 
        <Description term="计量单位">{goods.uom}</Description> 
        <Description term="最大包装"><div style={{"color":"red"}}>{goods.maxPackage}</div></Description> 
        <Description term="到期时间"><div>{ moment(goods.expireTime).format('YYYY-MM-DD')}</div></Description> 
        <Description term="SKU"><div>{goods.sku==null?appLocaleName(userContext,"NotAssigned"):`${goods.sku.displayName}(${goods.sku.id})`}
        </div></Description>
        <Description term="收货区"><div>{goods.receivingSpace==null?appLocaleName(userContext,"NotAssigned"):`${goods.receivingSpace.displayName}(${goods.receivingSpace.id})`}
        </div></Description>
        <Description term="货位"><div>{goods.goodsAllocation==null?appLocaleName(userContext,"NotAssigned"):`${goods.goodsAllocation.displayName}(${goods.goodsAllocation.id})`}
        </div></Description>
        <Description term="智能托盘"><div>{goods.smartPallet==null?appLocaleName(userContext,"NotAssigned"):`${goods.smartPallet.displayName}(${goods.smartPallet.id})`}
        </div></Description>
        <Description term="发货区"><div>{goods.shippingSpace==null?appLocaleName(userContext,"NotAssigned"):`${goods.shippingSpace.displayName}(${goods.shippingSpace.id})`}
        </div></Description>
        <Description term="运输任务"><div>{goods.transportTask==null?appLocaleName(userContext,"NotAssigned"):`${goods.transportTask.displayName}(${goods.transportTask.id})`}
        </div></Description>
        <Description term="双链小超"><div>{goods.retailStore==null?appLocaleName(userContext,"NotAssigned"):`${goods.retailStore.displayName}(${goods.retailStore.id})`}
        </div></Description>
        <Description term="订单"><div>{goods.bizOrder==null?appLocaleName(userContext,"NotAssigned"):`${goods.bizOrder.displayName}(${goods.bizOrder.id})`}
        </div></Description>
        <Description term="生超的订单"><div>{goods.retailStoreOrder==null?appLocaleName(userContext,"NotAssigned"):`${goods.retailStoreOrder.displayName}(${goods.retailStoreOrder.id})`}
        </div></Description>
        <Description term="当前状态">{goods.currentStatus}</Description> 
	
        
      </DescriptionList>
      <Divider style={{ height: '2px' }} />
    </div>
	)

}
	



const GoodsBase={menuData,displayColumns,fieldLabels,renderItemOfList}
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
export default GoodsBase



