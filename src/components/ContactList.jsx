import ContactCard from './ContactCard';

function ContactList({contacts}){
    return (
        <div>
            {
                contacts.map(person => <ContactCard person={person} key={person.id} />)
            }
        </div>
    )
}


export default ContactList;