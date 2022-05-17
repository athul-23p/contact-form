import { useState } from 'react';
import styles from './ContactCard.module.css';

function ContactCard({person}){
   
    const [status, setStatus] = useState(false);
    const handleClick = ()=> setStatus(!status);
    return (
        <div onClick={handleClick} className={styles.card_container} >
           
            <img src={person.img} alt="" className={ status ?`${styles.profile_pic} ${styles.img_large}` :styles.profile_pic} />
            <div className={styles.contact_details}>
                <p className={styles.name}>{person.first_name}  {person.last_name}</p>
                <p className={styles.grey}>{person.email}</p>
                <p className={status?"":styles.hide}>{person.phone}</p>
            </div>
        </div>
    )
}

export default ContactCard;