'use client';

import { useFieldArray, useForm } from 'react-hook-form';
import Label from '../../Form/Label';
import Button from '../../Form/Button';
import Image from 'next/image';
import InputText from '../../Form/InputText';
import Textarea from '../../Form/TextArea';
import useInterSectionObserver from '@/app/hooks/useIntersectionObserver';
import { observeGlobalBgChange } from '@/app/util';

export interface IForm {
  name: string;
  email: string;
  message: string;
}
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
    getValues,
    setError,
    setFocus,
    control,
  } = useForm<IForm>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const handleSubmit = (data: IForm) => {
    console.log(data);
    window.alert('시그널을 보내셨습니다 😎⚡️');
    reset({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="flex" ref={targetRef}>
      <div className="w-1/6">
        <Label style="py-3 mb-9">당신의 이름</Label>
        <Label style="py-2 mb-9">연락가능한 수단</Label>
        <Label style="py-2">전하고 싶은 말</Label>
      </div>

      <form onSubmit={onSubmit(handleSubmit)} className="flex-col w-3/4">
        <InputText<IForm>
          name="name"
          placeholder="YOUR NAME"
          control={control}
          rules={{
            required: '반드시 입력해주세요.',
            minLength: { value: 1, message: '1글자 이상 입력해주세요.' },
          }}
        />

        <InputText<IForm>
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

        <Textarea<IForm>
          name="message"
          placeholder="YOUR SIGNAL MESSAGE"
          control={control}
          rules={{ required: '반드시 입력해주세요.' }}
          errorStyle="pt-0 pb-1"
        />

        <Button type="submit" style="w-full py-2 px-5 text-2xl font-bold">
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
