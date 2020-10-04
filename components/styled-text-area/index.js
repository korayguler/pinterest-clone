//REACT
import { useState, useEffect } from 'react';
//STYLES
import style from './style.module.scss';
//HELPERS
import TextareaAutosize from 'react-textarea-autosize';
import classMerge from 'classnames';
export default function StyedTextArea(props) {
  const [pinTextAreaInputVal, pinTextAreaInputValSet] = useState(0);
  useEffect(() => {});
  return (
    <>
      <div className={classMerge(style.pinTextArea, props.className)}>
        <TextareaAutosize
          className={classMerge(
            style.pinTextAreaInput,
            props.largeSize && style.largeSize,
            props.smallSize && style.smallSize,
          )}
          placeholder={props.placeholder}
          onChange={(e) => pinTextAreaInputValSet(e.target.value.length)}
          maxLength={props.inputCounter}
        />
      </div>

      <div className={style.pinAreaInputCheck}>
        {props.inputCheckText && props.inputCheckText.length > 0 && (
          <p className={style.inputCheckText}>{props.inputCheckText}</p>
        )}
        {props.inputCounter > 0 && (
          <span className={style.pinAreaInputCounter}>
            {props.inputCounter - pinTextAreaInputVal}
          </span>
        )}
      </div>
    </>
  );
}
