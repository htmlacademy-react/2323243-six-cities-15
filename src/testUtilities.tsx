import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';
import { Store } from 'redux';
import defaultStore from './store';

export const TestProvider = ({children, store = defaultStore}: PropsWithChildren<{store?: Store}>) => (
    <Provider store={store} >{children}</Provider>
)

export const implement = <EntityType,>(entity: Partial<EntityType>) => entity as EntityType
