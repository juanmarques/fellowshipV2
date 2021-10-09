import { FormEvent, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Eye } from 'react-feather';
import { EyeOff } from 'react-feather';
import { useAuth } from '../../hooks/AuthContext';

import ilustracaoLogin from '../../assets/login/ilustration-first.svg';
import ilustracaoLoginDown from '../../assets/login/ilustration-second.svg';
import logoImg from '../../logo.svg';

import { Signup } from '../Signup';
import { ForgotPassword } from '../Forgot-Password';
import { Button } from '../../components/Button';

import {
    Container,
    Content,
    ContentForm,
    Form,
    InputEmail,
    InputPassword,
    LabelEmail,
    LabelPassword
} from './styles'


export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useAuth();

    const handleShowPassword = () => {
        setShowPassword(showPassword ? false : true);
    };

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        const data = {
            email,
            password,
        }
        signIn(data);
    }

    return (
        <Container>
            <ToastContainer />
            <Content>
                <img src={ilustracaoLogin} alt="login" />
                <img src={ilustracaoLoginDown} alt="login" />

            </Content>

            <ContentForm>
                <Form id="sign-in" onSubmit={handleSignIn}>
                    <img src={logoImg} alt="logo" />
                    <InputEmail
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        required
                    />
                    <LabelEmail>Email</LabelEmail>

                    <InputPassword
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        required
                    />
                    <LabelPassword>Senha</LabelPassword>
                    {!showPassword ?
                        <Eye
                            size={18}
                            onClick={handleShowPassword}
                            style={{ position: 'absolute', marginTop: -43, right: '55', cursor: 'pointer' }}
                        />
                        :
                        <EyeOff
                            size={18}
                            onClick={handleShowPassword}
                            style={{ position: 'absolute', marginTop: -43, right: '55', cursor: 'pointer' }}
                        />
                    }
                    <Button title="Entrar" form="sign-in" style={{ width: '12rem', marginBottom: '2rem' }} />
                    <hr />
                    <h6>Ainda não tem conta? </h6>
                    <Signup />
                    <ForgotPassword />
                </Form>
            </ContentForm>
        </Container>
    );
}



