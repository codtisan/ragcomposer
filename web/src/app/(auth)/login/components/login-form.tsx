"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Logo from "@/assets/RAGComposer.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ColourfulText } from "@/components/ui/colourful-text";
import Image from "next/image";
import { formSchema } from "@/configs/form-validation";

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleLoginSubmit = async (
    loginOptions: z.infer<typeof formSchema>,
  ) => {
    console.log(loginOptions);
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="pt-30">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleLoginSubmit)}
            className="space-y-8"
          >
            <div className="flex flex-col justify-center items-center gap-8">
              <div className="flex flex-row items-center">
                <Image src={Logo} alt="System Logo" width={100} height={100} />
                <h1 className="text-3xl">
                  <ColourfulText text="RAGComposer" />
                </h1>
              </div>
              <FormLabel className="text-3xl">Login</FormLabel>
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Email *</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Password *</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-80" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
