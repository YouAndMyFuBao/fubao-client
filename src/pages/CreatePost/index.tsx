import React, { useState } from 'react';
import { createPostStyles } from './index.css';

export default function CreatePost() {
  const [postImage, setPostImage] = useState<File | null>(null);
  const [postText, setPostText] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImage = e.target.files[0];
      console.log(newImage);
      setPostImage(newImage);
    }
  };

  const handleDeleteButtonClick = () => {
    const responseConfirm = window.confirm('정말로 삭제하시겠습니까?');
    if (responseConfirm) {
      setPostImage(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPostText(e.target.value);
  };

  const handleSubmitPost = () => {
    if (postImage && postText.length > 0) {
      console.log('Image', postImage);
      console.log('Text', postText);
    } else {
      window.alert('이미지 혹은 텍스트가 누락되었는지 확인하세요.');
    }
  };

  return (
    <>
      <div className="wrapper">
        {postImage ? (
          <div className={createPostStyles.postWrapper}>
            <img
              className={createPostStyles.image.selectedPostImage}
              src={URL.createObjectURL(postImage)}
              alt="postImageSelected"
            />
            <button
              className={createPostStyles.image.deleteButton}
              type="button"
              onClick={handleDeleteButtonClick}
            >
              삭제X
            </button>
          </div>
        ) : (
          <div className={createPostStyles.postWrapper}>
            <label htmlFor="file" className={createPostStyles.image.nonePostImage}>
              <div className="btn-upload">사진을 업로드해주세요.</div>
            </label>
            <input
              type="file"
              id="file"
              accept="image/*"
              required
              className={createPostStyles.image.nonPostImageInput}
              onChange={handleImageChange}
            />
          </div>
        )}
        <div className={createPostStyles.text.postText}>
          <input
            type="text"
            className={createPostStyles.text.postTextInput}
            value={postText}
            onChange={handleInputChange}
          />
        </div>
        <button className={createPostStyles.submitButton} onClick={handleSubmitPost}>
          제출하기
        </button>
      </div>
    </>
  );
}
