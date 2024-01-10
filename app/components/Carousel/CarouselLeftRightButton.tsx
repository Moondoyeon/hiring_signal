import Button from '@components/Form/Button';

export interface CarouselButtonProps {
  next: () => void;
  prev: () => void;
  curIdx: number;
  n: number;
  leftStyle: string;
  rightStyle: string;
}
export default function CarouselLeftRightButton({
  next,
  prev,
  curIdx,
  n,
  leftStyle,
  rightStyle,
}: CarouselButtonProps) {
  return (
    <>
      <Button
        onClick={prev}
        theme={curIdx === 0 ? 'grey' : 'black'}
        style={`z-10 absolute ${leftStyle}`}
        disabled={curIdx === 0}>
        &lt;
      </Button>
      <Button
        onClick={next}
        theme={curIdx === n - 1 ? 'grey' : 'black'}
        style={`z-10 absolute ${rightStyle}`}
        disabled={curIdx === n - 1}>
        &gt;
      </Button>
    </>
  );
}
