import { ISignalForm } from '@/types';

export const getSignalCount = async () => {
  const res = await fetch(`/api/signal`, { method: 'GET' }).then((r) => r.json());
  return res;
};
// const getSignalStatus = async (id: string | null) => {
//   const res = await fetch(`/api/signal/${id}`, { method: 'GET' }).then((r) => r.json());
//   return res;
// };

export const postSignal = async ({ name, email, message }: ISignalForm) => {
  const res = await fetch('/api/signal', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
  }).then((r) => r.json());
  return res;
};
