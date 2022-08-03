import React from "react";
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/actions';


const ContactList = ({contacts, onDelete }) => (    
    <ul className={s.List} > 
       {contacts?.map(({id, name, number}) => (
       <li key ={id} className={s.ListItem} >        
         {name}: {number}
         <button className={s.BtnDelate} onClick={() => onDelete(id)} >Delete</button> 
         </li>
     ))}       
    </ul>
)
ContactList.propTypes = {
    onDelete: PropTypes.func.isRequired,
};

  const getVisibleContacts = (allItems, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
   
    return allItems && allItems.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter))
};
 
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: (id) => dispatch(actions.deleteContact(id)), 
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);