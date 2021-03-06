import { useState } from 'react';
import { serialize } from 'v8';
import styles from './styles.module.css';

type Props = {
    mainColor: string
    onSearch: (searchValue: string) => void
}

export const SearchInput = ({ mainColor, onSearch }: Props) => {

    const [focused, setFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter') {
            onSearch(searchValue);
            console.log(searchValue);
        }
    }


    return (
        <div className={styles.container}
            style={{ borderColor: focused ? mainColor : '#ececec' }}
        >
            <div 
                className={styles.button}
                onClick={() => onSearch(searchValue)}
            >

            </div>
                <input 
                    type="text" 
                    placeholder="Pesquisar..." 
                    className={styles.input}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onKeyUp={handleKeyUp}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
        </div>
    )
}