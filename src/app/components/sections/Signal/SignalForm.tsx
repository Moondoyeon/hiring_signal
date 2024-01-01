'use client';

// import { useFieldArray,  } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import Label from '../../Form/Label';
import Button from '../../Form/Button';
import InputText from '../../Form/InputText';

import useInterSectionObserver from '@/hooks/useIntersectionObserver';
import { observeGlobalBgChange } from '@/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signalStatusState } from '@/recoil';
import { useSetRecoilState } from 'recoil';
import { postSignal } from '@/utils/fetcher';
import { ISignalCount, ISignalForm } from '@/types';
import { RiFlashlightFill } from '@remixicon/react';
import Textarea from '@/components/Form/TextArea';

export default function SignalForm() {
  const targetRef = useInterSectionObserver({
    handleIntersect: observeGlobalBgChange('peach-mode'),
    threshold: 0.5,
  });
  const {
    reset,
    handleSubmit: onSubmit,
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
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['signalCount'] });
      const previous = queryClient.getQueriesData<ISignalCount>({ queryKey: ['signalCount'] });

      queryClient.setQueriesData({ queryKey: ['signalCount'] }, (old: ISignalCount | undefined) => {
        const newObj = { count: 0 };
        if (old) {
          let preValue = old.count;
          preValue++;
          newObj.count = preValue;
        }
        return newObj;
      });

      return { previous };
    },
    onError: (_, __, context) => {
      queryClient.setQueriesData({ queryKey: ['signalCount'] }, context?.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['signalCount'] });
    },
  });

  const setSignalStatus = useSetRecoilState(signalStatusState);

  const handleSubmit = (data: ISignalForm) => {
    signalMutation.mutate(data);
    setSignalStatus(true);
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
          placeholder="COMPANY NAME"
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
          placeholder="SIGNAL MESSAGE"
          control={control}
          rules={{ required: '반드시 입력해주세요.' }}
          errorStyle="pt-0 mobile:mb-2"
        />

        <Button
          type="submit"
          style="w-full py-2 px-5 text-2xl font-semibold mobile:text-lg mobile:h-10">
          <div className="flex justify-center items-center">
            <RiFlashlightFill color="hotpink" />
            <span className="mx-1">SEND YOUR SIGNAL</span>
            <RiFlashlightFill color="hotpink" />
          </div>
        </Button>
      </form>
    </section>
  );
}
