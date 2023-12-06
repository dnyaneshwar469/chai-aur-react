import React, {useState} from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import {Button, Input, Logo} from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div>

        </div>
    )
}

export default Login
