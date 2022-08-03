import React from 'react';
import { IValues } from '../interfaces/IValues';

const MyContext = React.createContext<IValues | undefined>(undefined)

export default MyContext