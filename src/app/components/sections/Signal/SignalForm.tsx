'use client';

// import { useFieldArray,  } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import Label from '../../Form/Label';
import Button from '../../Form/Button';
import Image from 'next/image';
import InputText from '../../Form/InputText';
import Textarea from '../../Form/TextArea';
import useInterSectionObserver from '@/app/hooks/useIntersectionObserver';
import { observeGlobalBgChange } from '@/app/util';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signalStatusState } from '@/app/recoil';
import { useSetRecoilState } from 'recoil';
import { postSignal } from '@/app/util/fetcher';
import { ISignalForm } from '@/app/types';

export default function SignalForm() {
  const targetRef = useInterSectionObserver({
    handleIntersect: observeGlobalBgChange('peach-mode'),
    threshold: 0.5,
  });
  const {
    // register,
    // formState: { errors },
    reset,
    handleSubmit: onSubmit,
    // getValues,
    // setError,
    // setFocus,
    control,
  } = useForm<ISignalForm>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const queryClient = useQueryClient();
  const signalMutation = useMutation({
    mutationFn: postSignal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['signalCount'] });
    },
  });

  const setSignalStatus = useSetRecoilState(signalStatusState);

  const handleSubmit = (data: ISignalForm) => {
    setSignalStatus(true);
    signalMutation.mutate(data);
    window.alert('시그널을 보내셨습니다 😎⚡️');
    reset({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section ref={targetRef}>
      <form onSubmit={onSubmit(handleSubmit)} className="flex-col w-full">
        <Label style="py-2" htmlFor="name">
          당신의 이름
        </Label>
        <InputText<ISignalForm>
          id="name"
          name="name"
          placeholder="YOUR NAME"
          control={control}
          rules={{
            required: '반드시 입력해주세요.',
            minLength: { value: 1, message: '1글자 이상 입력해주세요.' },
          }}
        />
        <Label style="py-2" htmlFor="email">
          연락가능한 수단
        </Label>
        <InputText<ISignalForm>
          id="email"
          name="email"
          placeholder="EMAIL ADDRESS"
          control={control}
          rules={{
            required: '반드시 입력해주세요.',
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: '이메일 형식에 맞지 않습니다.',
            },
          }}
        />
        <Label style="py-2" htmlFor="message">
          전하고 싶은 말
        </Label>
        <Textarea<ISignalForm>
          id="message"
          name="message"
          placeholder="YOUR SIGNAL MESSAGE"
          control={control}
          rules={{ required: '반드시 입력해주세요.' }}
          errorStyle="pt-0 mobile:mb-2"
        />

        <Button
          type="submit"
          style="w-full py-2 px-5 text-2xl font-bold mobile:text-lg mobile:h-10">
          <Image
            src="/icons/signal.png"
            alt="signal"
            width={38}
            height={20}
            className="inline mr-2 pb-1"
          />
          SEND YOUR SIGNAL
          <Image
            src="/icons/signal.png"
            alt="signal"
            width={38}
            height={20}
            className="inline ml-1 pb-1"
          />
        </Button>
      </form>
    </section>
  );
}
