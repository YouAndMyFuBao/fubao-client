import { useState } from 'react';
import { useLetterContext } from '@/hooks/useLetterContext';
import { LineBreak } from '@/utils/textLineBreak';
import { letterFont } from '../../../public/fonts/fonts';
import * as Style from './letter-card.css';
import { IconDelete, IconUploadImage } from '../../../public/assets/svgs';

interface LetterCardProp {
  variants: 'textCount' | 'date';
  textCounter?: string;
}

export default function LetterCard({ variants }: LetterCardProp) {
  const { letterImage, setLetterImage, letterText, setLetterText } = useLetterContext();
  const [letterTextLength, setLetterTextLength] = useState<number>(0);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImage = e.target.files[0];
      setLetterImage(newImage);
    }
  };

  const handleDeleteButtonClick = () => {
    setLetterImage(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaValue = e.target.value;
    if (textareaValue.length > 150) return;

    setLetterText(e.target.value);
    setLetterTextLength(e.target.value.length);
  };

  return (
    <>
      {variants === 'textCount' && (
        <div css={Style.letterWrapper} className={letterFont.className}>
          {letterImage ? (
            <div css={Style.imageUploaded.wrapper}>
              <img
                src={URL.createObjectURL(letterImage)}
                css={Style.imageUploaded.image}
                alt="postImageSelected"
              />
              <button type="button" onClick={handleDeleteButtonClick}>
                <IconDelete css={Style.imageUploaded.deleteImageIcon} />
              </button>
            </div>
          ) : (
            <div css={Style.noneImageUploaded.wrapper}>
              <label htmlFor="file" css={Style.noneImageUploaded.label}>
                <IconUploadImage css={Style.noneImageUploaded.icon} />
              </label>
              <input
                type="file"
                id="file"
                accept="image/*"
                required
                onChange={handleImageChange}
                css={Style.noneImageUploaded.input}
              />
            </div>
          )}

          <div css={Style.mainText.wrapper}>
            <textarea
              value={letterText}
              css={Style.mainText.textarea}
              onChange={handleInputChange}
              // placeholder={
              //   '푸바오에게 보내는 내용을 입력해 주세요. \n보낸 편지는 푸바오가 직접 읽을거예요!'
              // }
              className={letterFont.className}
            ></textarea>
            {!letterText && (
              <LineBreak
                text={
                  '푸바오에게 보내는 내용을 입력해 주세요. \n 보낸 편지는 푸바오가 직접 읽을거예요! '
                }
                css={Style.mainText.pPlaceholder}
              />
            )}
          </div>
          <div css={Style.footer.wrapper}>
            <p css={Style.footer.textCounter}>{`(${letterTextLength} / 150)`}</p>
          </div>
        </div>
      )}
    </>
  );
}
