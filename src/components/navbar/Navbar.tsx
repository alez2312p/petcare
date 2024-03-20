import React, { useState } from 'react';
import Image from 'next/image';
import styles from './navbar.module.css';
import { FiMenu } from "react-icons/fi";
import ThemeToggle from '../themeToggle/ThemeToggle';
import Link from 'next/link';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.container}>
            <div className={styles.content}>
                <Link href={"/"} className={styles.title}>
                    Pet Care
                </Link>
            </div>
            <div className={styles.contentNavbar}>
                <Link href={"/about"} className={styles.subtitle}>
                    Acerca de
                </Link><Link href={"/policy"} className={styles.subtitle}>
                    Póliza
                </Link><Link href={"/see-pets"} className={styles.subtitle}>
                    Ver Mascotas
                </Link><Link href={"/contact"} className={styles.subtitle}>
                    Contacto
                </Link>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
