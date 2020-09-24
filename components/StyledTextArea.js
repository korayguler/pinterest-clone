import { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import classMerge from 'classnames';
import styles from 'components/css/StyledTextArea.module.scss';
export default function StyedTextArea(props) {
  const [pinTextAreaInputVal, pinTextAreaInputValSet] = useState(0);
  useEffect(() => {});
  return (
    <>
      <div className={classMerge(styles.pinTextArea, props.className)}>
        <TextareaAutosize
          className={classMerge(
            styles.pinTextAreaInput,
            props.largeSize && styles.largeSize,
            props.smallSize && styles.smallSize,
          )}
          placeholder={props.placeholder}
          onChange={(e) => pinTextAreaInputValSet(e.target.value.length)}
          maxLength={props.inputCounter}
        />
      </div>

      <div className={styles.pinAreaInputCheck}>
        {props.inputCheckText && props.inputCheckText.length > 0 && (
          <p className={styles.inputCheckText}>{props.inputCheckText}</p>
        )}
        {props.inputCounter > 0 && (
          <span className={styles.pinAreaInputCounter}>
            {props.inputCounter - pinTextAreaInputVal}
          </span>
        )}
      </div>
    </>
  );
}
