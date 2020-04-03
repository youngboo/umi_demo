import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import React, { useState, useEffect } from 'react';
import { useRequest } from '@umijs/hooks';
import Style from './index.less';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const LoginForm = () => {
  const [submit, setSubmit] = useState(undefined);

  useEffect(() => {
    const { data, error, loading } = useRequest('/api/login');
    console.log(data, 'data');
    return () => {
      console.log('clean up', data);
    };
  }, [submit]);
  const requestUserInfo = () => {};
  const onFinish = (values: any) => {
    setSubmit(values);
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default () => {
  return (
    <Row className={Style.login}>
      <Col>登录</Col>
      <Col>
        <LoginForm />
      </Col>
    </Row>
  );
};
