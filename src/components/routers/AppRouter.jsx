import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';
import { WordDefinition } from '../game/WordDefinition';
import { HomeScreen } from '../home/HomeScreen';
import { InstructionsScreen } from '../instructions/InstructionsScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <HomeScreen /> } />
                <Route path='/login' element={ <LoginScreen /> } />
                <Route path='/register' element={ <RegisterScreen /> } />
                <Route path='/instructions' element={ <InstructionsScreen /> } />
                <Route path='/game' element={ <WordDefinition /> } />

            </Routes>
        </BrowserRouter>
    )
}
