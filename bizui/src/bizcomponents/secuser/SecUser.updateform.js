import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './SecUser.updateform.less'
import SecUserBase from './SecUser.base'
<<<<<<< HEAD
=======
import appLocaleName from '../../common/Locale.tool'
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
]


class SecUserUpdateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentWillMount() {
    const selectedRow = this.getSelectedRow()
    if (!selectedRow) {
      return
    }
    this.setState({
      convertedImagesValues: mapFromImageValues(selectedRow,imageKeys)
    })
  }

  componentDidMount() {

  }

  shouldComponentUpdate() {
    return true
  }

  getSelectedRow() {
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props
    const { selectedRows, currentUpdateIndex } = this.props
    if (!selectedRows) {
      return
    }
    if (currentUpdateIndex >= selectedRows.length) {
      return
    }
    const convertiedValues = selectedRows.map((item) => {
      return {
        ...item,
        verificationCodeExpire: moment(item.verificationCodeExpire),
        lastLoginTime: moment(item.lastLoginTime),

      }
    })
    const selectedRow = convertiedValues[currentUpdateIndex]
    return selectedRow
  }

  handleChange = (event, source) => {
    console.log('get file list from change in update change: ', source)
    const { fileList } = event
    const { convertedImagesValues } = this.state
    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change: ', source)
  }


  handlePreview = (file) => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  render() {
    const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    const { convertedImagesValues } = this.state
    const { setFieldsValue } = this.props.form
<<<<<<< HEAD
=======
    const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
    const {fieldLabels} = SecUserBase
    const capFirstChar = (value)=>{
    	//const upper = value.replace(/^\w/, c => c.toUpperCase());
  		const upper = value.charAt(0).toUpperCase() + value.substr(1);
  		return upper
  	}
    const submitUpdateForm = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }
<<<<<<< HEAD

=======
		
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
        const { owner, role } = this.props
        const secUserId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, secUserId, ...imagesValues }

        
        const cappedRoleName = capFirstChar(role)
        dispatch({
          type: `${owner.type}/update${cappedRoleName}`,
          payload: {
            id: owner.id,
            role: role,
            parameters,
            selectedRows,
            currentUpdateIndex: 0,
            continueNext: false,
          },
        })
      })
    }
    
    const submitUpdateFormAndContinue = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const secUserId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, secUserId, ...imagesValues }

        // TODO
        const { currentUpdateIndex } = this.props
        
        if (currentUpdateIndex >= selectedRows.length - 1) {
          return
        }
        this.setState({
          currentUpdateIndex: currentUpdateIndex + 1,
        })
        //setFieldsValue(selectedRows[currentUpdateIndex + 1])
        const newIndex = currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateSecUser`,
          payload: {
            id: owner.id,
            type: 'secUser',
            parameters,
            selectedRows,
            currentUpdateIndex: newIndex,
            continueNext: true,
          },
        })
      })
    }
    
    const skipToNext = () => {
      const { currentUpdateIndex } = this.props
      const { owner } = this.props
        
      const newIndex = currentUpdateIndex + 1
      dispatch({
        type: `${owner.type}/gotoNextSecUserUpdateRow`,
        payload: {
          id: owner.id,
          type: 'secUser',
          selectedRows,
          currentUpdateIndex: newIndex,
          continueNext: true,
          update: false,
        },
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: {
          id: owner.id,
          type: 'secUser',
<<<<<<< HEAD
          listName:'SEC的用户列表' 
=======
          listName:appLocaleName(userContext,"List") 
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
        },
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      const scrollToField = (fieldKey) => {
        const labelNode = document.querySelector(`label[for='${fieldKey}']`)
        if (labelNode) {
          labelNode.scrollIntoView(true)
        }
      }
      const errorList = Object.keys(errors).map((key) => {
        if (!errors[key]) {
          return null
        }
        return (
          <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
            <Icon type="cross-circle-o" className={styles.errorIcon} />
            <div className={styles.errorMessage}>{errors[key][0]}</div>
            <div className={styles.errorField}>{fieldLabels[key]}</div>
          </li>
        )
      })
      return (
        <span className={styles.errorIcon}>
          <Popover
<<<<<<< HEAD
            title="表单校验信息"
=======
            title={appLocaleName(userContext,"FieldValidateInfo")}
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
            content={errorList}
            overlayClassName={styles.errorPopover}
            trigger="click"
            getPopupContainer={trigger => trigger.parentNode}
          >
            <Icon type="exclamation-circle" />
          </Popover>
          {errorCount}
        </span>
      )
    }
    
    if (!selectedRows) {
<<<<<<< HEAD
      return (<div>缺少被更新的对象</div>)
=======
      return (<div>{appLocaleName(userContext,"NoTargetItems")}</div>)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
    }
	const selectedRow = this.getSelectedRow()

	const formItemLayout = {
<<<<<<< HEAD
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    }
    const switchFormItemLayout = {
      labelCol: { span: 14 },
      wrapperCol: { span: 4 },
    }

    return (
      <PageHeaderLayout
        title={"更新SEC的用户"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新SEC的用户"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
=======
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
    }
    const switchFormItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
    }
	
	const internalRenderTitle = () =>{
      const linkComp=<a onClick={goback}  > <Icon type="double-left" style={{marginRight:"10px"}} /> </a>
      return (<div>{linkComp}{appLocaleName(userContext,"Update")}安全用户: {(currentUpdateIndex+1)}/{selectedRows.length}</div>)
    }

	return (
      <PageHeaderLayout
        title={internalRenderTitle()}
        content={`${appLocaleName(userContext,"Update")}${(currentUpdateIndex+1)}/${selectedRows.length}`}
        wrapperClassName={styles.advancedForm}
      >
        <Card title={appLocaleName(userContext,"BasicInfo")} className={styles.card} bordered={false}>
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
          <Form >
            <Row gutter={16}>
            

<<<<<<< HEAD
              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.id} {...formItemLayout}>
                  {getFieldDecorator('id', {
                    initialValue: selectedRow.id,
                    rules: [{ required: true, message: '请输入序号' }],
                  })(
                    <Input placeholder="请输入序号" disabled/>
=======
              <Col lg={24} md={24} sm={24}>
                <Form.Item label={fieldLabels.id} {...formItemLayout}>
                  {getFieldDecorator('id', {
                    initialValue: selectedRow.id,
                    rules: [{ required: true, message: appLocaleName(userContext,"PleaseInput") }],
                  })(
                    <Input size="large" placeholder="ID" disabled/>
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
                    
                  )}
                </Form.Item>
              </Col>

<<<<<<< HEAD
              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.login} {...formItemLayout}>
                  {getFieldDecorator('login', {
                    initialValue: selectedRow.login,
                    rules: [{ required: true, message: '请输入登录' }],
                  })(
                    <Input placeholder="请输入登录" />
=======
              <Col lg={24} md={24} sm={24}>
                <Form.Item label={fieldLabels.login} {...formItemLayout}>
                  {getFieldDecorator('login', {
                    initialValue: selectedRow.login,
                    rules: [{ required: true, message: appLocaleName(userContext,"PleaseInput") }],
                  })(
                    <Input size="large" placeholder="登录" />
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
                    
                  )}
                </Form.Item>
              </Col>

<<<<<<< HEAD
              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mobile} {...formItemLayout}>
                  {getFieldDecorator('mobile', {
                    initialValue: selectedRow.mobile,
                    rules: [{ required: true, message: '请输入手机' }],
                  })(
                    <Input placeholder="请输入手机" />
=======
              <Col lg={24} md={24} sm={24}>
                <Form.Item label={fieldLabels.mobile} {...formItemLayout}>
                  {getFieldDecorator('mobile', {
                    initialValue: selectedRow.mobile,
                    rules: [{ required: true, message: appLocaleName(userContext,"PleaseInput") }],
                  })(
                    <Input size="large" placeholder="手机号码" />
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
                    
                  )}
                </Form.Item>
              </Col>

<<<<<<< HEAD
              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.email} {...formItemLayout}>
                  {getFieldDecorator('email', {
                    initialValue: selectedRow.email,
                    rules: [{ required: false, message: '请输入电子邮件' }],
                  })(
                    <Input placeholder="请输入电子邮件" />
=======
              <Col lg={24} md={24} sm={24}>
                <Form.Item label={fieldLabels.email} {...formItemLayout}>
                  {getFieldDecorator('email', {
                    initialValue: selectedRow.email,
                    rules: [{ required: false, message: appLocaleName(userContext,"PleaseInput") }],
                  })(
                    <Input size="large" placeholder="电子邮件" />
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
                    
                  )}
                </Form.Item>
              </Col>

<<<<<<< HEAD
              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.pwd} {...formItemLayout}>
                  {getFieldDecorator('pwd', {
                    initialValue: selectedRow.pwd,
                    rules: [{ required: true, message: '请输入PWD' }],
                  })(
                    <Input placeholder="请输入PWD" />
=======
              <Col lg={24} md={24} sm={24}>
                <Form.Item label={fieldLabels.pwd} {...formItemLayout}>
                  {getFieldDecorator('pwd', {
                    initialValue: selectedRow.pwd,
                    rules: [{ required: true, message: appLocaleName(userContext,"PleaseInput") }],
                  })(
                    <Input size="large" placeholder="密码" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={24} md={24} sm={24}>
                <Form.Item label={fieldLabels.weixinOpenid} {...formItemLayout}>
                  {getFieldDecorator('weixinOpenid', {
                    initialValue: selectedRow.weixinOpenid,
                    rules: [{ required: true, message: appLocaleName(userContext,"PleaseInput") }],
                  })(
                    <Input size="large" placeholder="微信openid" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={24} md={24} sm={24}>
                <Form.Item label={fieldLabels.weixinAppid} {...formItemLayout}>
                  {getFieldDecorator('weixinAppid', {
                    initialValue: selectedRow.weixinAppid,
                    rules: [{ required: true, message: appLocaleName(userContext,"PleaseInput") }],
                  })(
                    <Input size="large" placeholder="微信Appid" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={24} md={24} sm={24}>
                <Form.Item label={fieldLabels.accessToken} {...formItemLayout}>
                  {getFieldDecorator('accessToken', {
                    initialValue: selectedRow.accessToken,
                    rules: [{ required: true, message: appLocaleName(userContext,"PleaseInput") }],
                  })(
                    <Input size="large" placeholder="访问令牌" />
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
                    
                  )}
                </Form.Item>
              </Col>

<<<<<<< HEAD
              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.verificationCode} {...formItemLayout}>
                  {getFieldDecorator('verificationCode', {
                    initialValue: selectedRow.verificationCode,
                    rules: [{ required: true, message: '请输入验证码' }],
                  })(
                    <Input placeholder="请输入验证码" />
=======
              <Col lg={24} md={24} sm={24}>
                <Form.Item label={fieldLabels.verificationCode} {...formItemLayout}>
                  {getFieldDecorator('verificationCode', {
                    initialValue: selectedRow.verificationCode,
                    rules: [{ required: true, message: appLocaleName(userContext,"PleaseInput") }],
                  })(
                    <Input size="large" placeholder="验证码" />
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
                    
                  )}
                </Form.Item>
              </Col>

<<<<<<< HEAD
              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.verificationCodeExpire} {...formItemLayout}>
                  {getFieldDecorator('verificationCodeExpire', {
                    initialValue: selectedRow.verificationCodeExpire,
                    rules: [{ required: true, message: '请输入验证码过期' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入验证码过期" />
=======
              <Col lg={24} md={24} sm={24}>
                <Form.Item label={fieldLabels.verificationCodeExpire} {...formItemLayout}>
                  {getFieldDecorator('verificationCodeExpire', {
                    initialValue: selectedRow.verificationCodeExpire,
                    rules: [{ required: true, message: appLocaleName(userContext,"PleaseInput") }],
                  })(
                    <DatePicker size="large" showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="验证码过期" />
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
                    
                  )}
                </Form.Item>
              </Col>

<<<<<<< HEAD
              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.lastLoginTime} {...formItemLayout}>
                  {getFieldDecorator('lastLoginTime', {
                    initialValue: selectedRow.lastLoginTime,
                    rules: [{ required: true, message: '请输入最后登录时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入最后登录时间" />
=======
              <Col lg={24} md={24} sm={24}>
                <Form.Item label={fieldLabels.lastLoginTime} {...formItemLayout}>
                  {getFieldDecorator('lastLoginTime', {
                    initialValue: selectedRow.lastLoginTime,
                    rules: [{ required: true, message: appLocaleName(userContext,"PleaseInput") }],
                  })(
                    <DatePicker size="large" showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="最后登录时间" />
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
                    
                  )}
                </Form.Item>
              </Col>

<<<<<<< HEAD
            </Row>
          </Form>  
        </Card>
=======
            
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
       
        
        
        


<<<<<<< HEAD
        <FooterToolbar>
          {getErrorInfo()}
          <Button type="primary" onClick={submitUpdateForm} loading={submitting} htmlType="submit">
            更新
          </Button>
          <Button type="primary" onClick={submitUpdateFormAndContinue} loading={submitting} disabled={currentUpdateIndex + 1 >= selectedRows.length}>
            更新并装载下一个
          </Button>
          <Button type="default" onClick={skipToNext} loading={submitting} disabled={currentUpdateIndex + 1 >= selectedRows.length}>
            略过
          </Button>
          <Button type="default" onClick={goback} loading={submitting}>
            取消
=======
			</Row>
          </Form>
        </Card>







        <FooterToolbar>
          {getErrorInfo()}
          <Button type="primary" onClick={submitUpdateForm} loading={submitting} htmlType="submit">
            {appLocaleName(userContext,"Update")}
          </Button>
          <Button type="primary" onClick={submitUpdateFormAndContinue} loading={submitting} disabled={currentUpdateIndex + 1 >= selectedRows.length}>
            {appLocaleName(userContext,"UpdateAndContinue")}
          </Button>
          <Button type="default" onClick={skipToNext} loading={submitting} disabled={currentUpdateIndex + 1 >= selectedRows.length}>
            {appLocaleName(userContext,"Skip")}
          </Button>
          <Button type="default" onClick={goback} loading={submitting}>
            {appLocaleName(userContext,"Cancel")}
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
          </Button>
        </FooterToolbar>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
}))(Form.create()(SecUserUpdateForm))



