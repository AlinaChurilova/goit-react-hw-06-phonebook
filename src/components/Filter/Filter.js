import React from "react";
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

const Filter = ({ value, onFilter }) => {
    return <label className={s.Label}>
            Find contacts by name 
                <input className={s.Input}
          type="text"
          value={value}
          onChange = {onFilter}
                />
            </label>
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}

const mapStateToProps = state => ({
  value: state.contacts.filter, 
})

const mapDispatchToProps = dispatch => ({
  onFilter: (e) => dispatch(actions.changeFilter(e.currentTarget.value)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter);