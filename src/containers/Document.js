import React from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { updateMarkdown } from '../actions/documentActions';
import { getMarkdown } from '../selectors/documentSelectors';

const Document = () => {

  const markdown = useSelector(state => getMarkdown(state));
  const dispatch = useDispatch();
  const updateMarkdownHandler = ({ target }) => dispatch(updateMarkdown(target.value));

  return (
    <>
        <div className={styles.Document}>
          <Editor markdown={markdown} updateMarkdown={updateMarkdownHandler} />
          <Preview markdown={markdown} />
        </div>
      </>
  );
}

Document.propTypes = {
  markdown: PropTypes.string,
  updateMarkdown: PropTypes.func
};

export default Document;
