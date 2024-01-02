import { useEffect, useState } from 'react';
import { useLetterContext } from '@/hooks/useLetterContext';
import { letterFont } from '../../../public/fonts/fonts';
import * as Style from './letter-card.css';
import { IconDelete, IconUploadImage } from '../../../public/assets/svgs';

interface TextCountCardProps {
  variant: 'textCount';
  apiImage?: string;
  apiText?: string;
  apiDate?: string;
}

interface DateCardProps {
  variant: 'date';
  apiImage: string;
  apiText: string;
  apiDate: string;
}

type LetterCardProps = TextCountCardProps | DateCardProps;

export default function LetterCard(props: LetterCardProps) {
  const { letterImage, setLetterImage, letterText, setLetterText } = useLetterContext();
  const [letterTextLength, setLetterTextLength] = useState<number>(0);

  useEffect(() => {
    if (props.apiText) {
      setLetterText(props.apiText);
      setLetterTextLength(props.apiText.length);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImage = e.target.files[0];
      setLetterImage(newImage);
    }
  };

  const handleDeleteButtonClick = () => {
    setLetterImage(undefined);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaValue = e.target.value;
    if (textareaValue.length > 150) return;

    setLetterText(e.target.value);
    setLetterTextLength(e.target.value.length);
  };

  const ConditionalRenderTextCount = () => {
    if (letterImage) {
      console.log('letterImage', letterImage);
      return (
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
      );
    }
    if (props.apiImage) {
      console.log('props.apiImage', props.apiImage);
      return (
        <div css={Style.imageUploaded}>
          <div css={Style.imageUploaded.wrapper}>
            <img src={props.apiImage} css={Style.imageUploaded.image} alt="postImageSelected" />
          </div>
        </div>
      );
    }
    if (!letterImage && !props.apiImage) {
      console.log('letterImage', letterImage, 'props.apiImage', props.apiImage);
      return (
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
      );
    }
  };

  return (
    <>
      {props.variant === 'textCount' && (
        <div css={Style.letterWrapper} className={letterFont.className}>
          {ConditionalRenderTextCount()}
          <div css={Style.mainText.wrapper}>
            <textarea
              value={letterText}
              css={Style.mainText.textarea}
              onChange={handleInputChange}
              placeholder={
                '푸바오에게 보내는 내용을 입력해 주세요. \n보낸 편지는 푸바오가 직접 읽을거예요!'
              }
              style={letterFont.style}
            ></textarea>
          </div>
          <div css={Style.footer.wrapper}>
            <p css={Style.footer.textCounter}>{`(${letterTextLength} / 150)`}</p>
          </div>
        </div>
      )}
      {props.variant === 'date' && (
        <div css={Style.letterWrapper} className={letterFont.className}>
          <div css={Style.imageUploaded}>
            <div css={Style.imageUploaded.wrapper}>
              <img src={props.apiImage} css={Style.imageUploaded.image} alt="postImageSelected" />
            </div>
          </div>
          <div css={Style.mainText.wrapper}>{props.apiText}</div>
          <div css={Style.footer.wrapper}>
            <p css={Style.footer.date}>{props.apiDate}</p>
          </div>
        </div>
      )}
    </>
  );
}
