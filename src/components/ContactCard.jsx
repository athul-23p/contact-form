import { useState } from 'react';
import styles from './ContactCard.module.css';

function ContactCard({person}){
    console.log(person);
    const [status, setStatus] = useState(false);
    const handleClick = ()=> setStatus(!status);
    return (
        <div onClick={handleClick} className={styles.card_container} >
            {/* <div> */}
            {/* </div> */}
            <img src="person.profile_pic" alt="" className={styles.profile_pic} />
            <div>
                <p className={styles.name}>{person.first_name}  {person.last_name}</p>
                <p className={styles.grey}>{person.email}</p>
                <p className={status?"":styles.hide}>{person.phone}</p>
            </div>
        </div>
    )
}

export default ContactCard;