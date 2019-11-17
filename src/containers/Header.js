import React from 'react';
import PropTypes from 'prop-types';
import { getFiles } from '../selectors/headerSelectors';
import { addFile, deleteTabs } from '../actions/headerActions';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/form/Form';
import Tabs from '../components/tabs/Tabs';
import { switchTabs } from '../actions/documentActions';
import styles from './Header.css';

const Header = () => {

  const dispatch = useDispatch();
  const tabs = useSelector(state => getFiles(state));
  const handleSubmit = title => dispatch(addFile(title));
  const changeTabs = title => dispatch(switchTabs(title));
  const deleteTab = title => dispatch(deleteTabs(title));


  return (
    <div className={styles.Header}>
      <h1>Markdown Editor</h1>
      <Form handleSubmit={handleSubmit} />
      <Tabs tabs={tabs} changeTabs={changeTabs} deleteTab={deleteTab} />
    </div>
  );
};

Header.propTypes = {
  tabs: PropTypes.array,
  handleClick: PropTypes.func,
  title: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  markdown: PropTypes.string,
  changeTabs: PropTypes.func,
  deleteTab: PropTypes.func
};

export default Header;
