import React from 'react'
import HomeContent from './HomeContent/HomeContent'
import { Button } from 'antd';
import { DatePicker } from 'antd';
import { SkinOutlined  } from '@ant-design/icons';
import { Col, Row } from 'antd';

const Home = () => {
    return (
        <>
            <HomeContent />
            <h1>Home</h1>
            <Button type="primary">Button</Button>
            <DatePicker />
            <SkinOutlined />

        </>
    )
}

export default Home