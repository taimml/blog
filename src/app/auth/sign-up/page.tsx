'use client';

import { authClient } from '@/lib/client/auth-client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z, { email } from 'zod/v4';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import {
  Form as ShadcnForm,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';



export default function SignUp() {
  const router = useRouter();
  const formSchema = z.object({
    email: z.email('Неккоректная почта'),
    name: z.string().min(2, 'Имя должно быть как минимум 2 символа'),
    password: z.string().min(8, 'Пароль должен быть как минимум 8 символов'),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {} as z.infer<typeof formSchema>,
  });

  const onFormSubmit = async (data: z.infer<typeof formSchema>) => {
    await authClient.signUp.email(
      {
        email: data.email,
        password: data.password,
        name: data.name,
      },
      {
        onSuccess: () => {
          toast.success('Вы успешно зарегистрировались');
          router.push('/');
        },
      }
    );
  };
  return (
    <div className="flex flex-col items-center">
      <p className="text-[21px]">Регистрация</p>
      <div>
        <ShadcnForm {...form}>
          <form onSubmit={form.handleSubmit(onFormSubmit)}>
            <div className="w-80 flex flex-col gap-6 mt-14 text-sm">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        placeholder="Почта"
                        className="border-b border-[#3F3F3F] bg-mydarkgray pb-1 pl-1 focus:outline-none focus:border-[#107EFF]"
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="name"
                        {...field}
                        placeholder="Имя"
                        className="border-b border-[#3F3F3F] bg-mydarkgray pb-1 pl-1 focus:outline-none focus:border-[#107EFF]"
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        placeholder="Пароль"
                        className="border-b border-[#3F3F3F] bg-mydarkgray pb-1 pl-1 focus:outline-none focus:border-[#107EFF] "
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col items-center text-xs">
              <Button
                type="submit"
                className="px-4 py-2 bg-[#3137C9] rounded-lg my-6"
              >
                Зарегистрироваться
              </Button>
              <Link href="/auth/sign-in" className='cursor-pointer'>
                войти
              </Link>
            </div>
          </form>
        </ShadcnForm>
      </div>
    </div>
  );
}
