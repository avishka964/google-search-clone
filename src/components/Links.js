import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    {key: 'k01', url: '/search', text: 'All'},
    {key: 'k02', url: '/news', text: 'News'},
    {key: 'k03', url: '/images', text: 'Images'},
    {key: 'k04', url: '/videos', text: 'Videos'},
]

export const Links = () => {
    return (
        <div className='flex sm:justify-around justify-between items-center mt-4'>
            {links.map(({key , url, text}) => (
                <NavLink key={key} className='m-2 mb-0' to={url} activeClassName='text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2'>
                    {text}
                </NavLink>
            ))}
        </div>
    )
}
