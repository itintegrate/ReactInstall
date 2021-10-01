import Header from '../../components/Header'
import PageFooter from '../../components/Footer'
import NavLift from '../../components/NavLift'


import React, { Component } from 'react'
import { Layout} from 'antd'
const { Sider, Content } = Layout





export default class Admin extends Component {

    render() {
        return (
            <Layout style={{height:'100%'}}>
                <Sider>
                    <NavLift /> 
                </Sider>                              
                <Layout>
                    <Header>Header</Header>
                    <Content style={{backgroundColor:"white"}}>main content</Content>
                    <PageFooter />
                </Layout>                
          </Layout>
        )
    }
}
