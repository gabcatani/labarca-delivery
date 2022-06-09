import { SearchInput } from '../../components/SearchInput';
import styles from '../../styles/Home.module.css';

const Home = () => {

  const handleSearch = (searchValue: string) => {
    console.log(searchValue);
  }

  return (
    <div className={styles.container}>
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <div className={styles.headerTopLeft}>
                    <div className={styles.headerTittle}>
                      Seja Bem-Vindo 👋
                    </div>
                    <div className={styles.headerSubTittle}>
                      O que deseja para hoje ? 
                    </div>
                </div>
                <div className={styles.headerTopRight}>
                    <div className={styles.menuButton}>
                      <div className={styles.menuButtonLine}></div>
                      <div className={styles.menuButtonLine}></div>
                      <div className={styles.menuButtonLine}></div>
                    </div>
                </div>

            </div>
            <div className={styles.headerBottom}>
                <SearchInput 
                  mainColor="#FB9400"
                  onSearch={(handleSearch)=> null}
                />
            </div>
        </header>
    </div>
  )
}

export default Home