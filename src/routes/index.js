import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './appRoutes';
import { Loading } from '../components/Loading';
import auth from '@react-native-firebase/auth';

export default function Routes() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscriber = auth()
            .onAuthStateChanged(response => {
                setUser(response);
                setLoading(false);
            });

        return subscriber;
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <NavigationContainer>
            {user ?
                <AppRoutes />
                :
                <SignIn />
            }
        </NavigationContainer>
    )
}