import React from 'react';
import { createPostStyles } from './index.css';

export default function CreatePost() {
  return (
    <>
      <div className="wrapper">
        <div className={createPostStyles.postWrapper}>
          <button className={createPostStyles.postImage}>사진을 업로드해주세요.</button>
          <div className={createPostStyles.postText}>
            <input type="text" className={createPostStyles.postTextInput} />
          </div>
        </div>
        <button className={createPostStyles.submitButton}>제출하기</button>
      </div>
    </>
  );
}
