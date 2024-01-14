import React from 'react'
import styles from './styles.module.css'
import { Button, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export const ExampleComponent = ({ text }) => {
  return (
    <div className={styles.test}>
      Example Component: {text}
      <Button type='primary'>Test Antd</Button>
      <Input size='large' placeholder='large size' prefix={<UserOutlined />} />
    </div>
  )
}
