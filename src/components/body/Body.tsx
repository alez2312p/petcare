import Image from "next/image"
import styles from "./body.module.css"
export default function Body() {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/gato.png"
                        alt="gato" loading="lazy"
                        width={350}
                        height={350}
                        className={styles.image}
                    />
                    <h2 className={styles.title}>Pet Care Póliza</h2>
                    <p className={styles.subtitle}>Innovación y Seguridad en el Cuidado de tus Mascotas</p>
                </div>
                <div className={styles.descriptionContainer}>
                    <h2 className={styles.title}>
                        Bienvenido a Pet Care Póliza: Donde el Cuidado de tu Mascota se Transforma
                    </h2>
                    <div className={styles.texts}>
                        <p>

                            Descubre el futuro del seguro para mascotas con Pet Care Póliza, tu aliado en la protección y bienestar de tus compañeros más fieles. En nuestra plataforma descentralizada, combinamos la seguridad y transparencia de la tecnología blockchain con soluciones personalizadas para ofrecer lo mejor en cuidado y protección para tus mascotas.
                        </p>
                        <p>

                            Aquí, cada póliza es más que un seguro; es una promesa de tranquilidad, eficiencia y claridad en cada paso. Conócenos y descubre cómo podemos ayudarte a cuidar de quienes más amas con la innovación y confianza que solo Pet Care Póliza puede ofrecerte.
                        </p>
                        <p>

                            Explora. Protege. Ama. Bienvenido al cuidado de mascotas del mañana.
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}
