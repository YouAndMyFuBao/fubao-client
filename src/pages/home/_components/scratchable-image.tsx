import { useEffect, useRef, useState } from 'react';
import { Scratchable, ScratchableEvent } from 'scratchable';
import { css } from '@emotion/react';
import { postFubaoLove } from '@/apis/postFubaoLove';

interface ScratchableImageProps {
  onScratchEnd: () => void;
}

export default function ScratchableImage({ onScratchEnd }: ScratchableImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    setFirstRender(true);

    const scratchable = new Scratchable({
      container: ref.current,
      background: {
        type: 'linear-gradient',
        gradients: [
          { offset: 0, color: '#FA58D0' },
          { offset: 0.5, color: '#DA81F5' },
          { offset: 1, color: '#BE81F7' },
        ],
      },
      radius: 30,
    });

    const handler = (e: ScratchableEvent) => {
      if (e.percentage > 0.5) {
        scratchable.destroy();
        onScratchEnd();
        postFubaoLove();
        console.log('푸바오 사랑 보내기 완료');
      }
    };

    (async () => {
      await scratchable.render();
      scratchable.addEventListener('scratch', handler);
    })();

    return () => scratchable.removeEventListener('scratch', handler);
  }, [ref]);

  return (
    <div ref={ref} css={base}>
      <img
        src="/assets/img/fubao.jpeg"
        alt="fubao"
        width="298px"
        height="346px"
        style={{ borderRadius: '20px', visibility: firstRender ? 'visible' : 'hidden' }}
      />
    </div>
  );
}

const base = css({
  width: '298px',
  height: '346px',
  borderRadius: '20px',
  marginTop: '27px',
});
