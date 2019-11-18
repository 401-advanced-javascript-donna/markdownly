import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ markdown, updateMarkdown }) {
  return (
    <section>
      <textarea className={styles.Editor} value={markdown} onChange={updateMarkdown} />
    </section>
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  updateMarkdown: PropTypes.func.isRequired
};

export default Editor;
