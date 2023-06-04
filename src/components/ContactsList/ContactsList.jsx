import React from "react";
import css from './ContactsList.module.css'

const ContactsList = ({ contacts, onDeleteContacts }) => {
 return   (<ul className={css.ContactsListUl}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={css.ContactsListLi}>
                <p>{name} {number}</p>
                <button onClick={()=> onDeleteContacts(id)} className={css.ContactsListBtn}>Delete</button>
            </li>))}
    </ul>
    );
}

export default ContactsList;