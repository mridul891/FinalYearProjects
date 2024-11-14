import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";

export function Signin() {
  // ...

  return (
    <div className="w-full h-full bg-black flex flex-1 ">
      <form action="" className="text-white">
        <Label>Username</Label>
        <input placeholder="shadcn" className="text-black"/>
        <Label>Password</Label>
        <input placeholder="shadcn" className="text-black"/>
      </form>
    </div>
  );
}
