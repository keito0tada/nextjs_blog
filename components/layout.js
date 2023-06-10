import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Keito Tada'
export const siteTitle = 'Next.js Sample Website';

export default function Layout({children, home}){
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a website"
                />
                
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority 
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt=""
                        />
                        <h1>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link>
                        <h2>
                            <Link href="/">
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <div>
                    <Link href="/">Back to home</Link>
                </div>
            )}
        </div>
    )
}