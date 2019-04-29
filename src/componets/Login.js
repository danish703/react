import React,{Component} from 'react'
import {Container,Content,Form,Item,Label,Input} from 'native-base'

class Login extends Component{
    onEmailChanged(){

    }

    render(){
        return(
            <Container>
                <Content>
                <Form>
                    <Item floatingLabel>
                    <Label>Email</Label>
                    <Input  onChangeText={this.onEmailChanged.bind(this)}/>
                    </Item>
                    <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input />
                    </Item>
                </Form>
                <Button full success><Text>Login</Text></Button>
                </Content>
            </Container>
        )
    }

} 
export default Login