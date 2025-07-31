// "use client";
// import React, { useActionState, useState } from 'react'
// import { Input } from './ui/input'
// import { Textarea } from './ui/textarea';
// import MDEditor from "@uiw/react-md-editor";
// import { Button } from './ui/button';
// import { Send } from 'lucide-react';
// import { formSchema } from '@/lib/validation';
// import {z} from 'zod'
//  import { useToast } from '@/hooks/use-toast';
// import { useRouter } from "next/navigation";
// import { createPitch } from '@/app/lib/actions';
 
// const StartupForm = () => {

//     const [errors, setErrors] = useState<Record<string, string>>({});
//     const [pitch, setPitch] = useState("");
//     const toast = useToast()
// const router = useRouter();
//  const handleFormSubmit = async (prevState: any, formData: FormData) => {

//     try {
//         const formValues = {
//         title: formData.get("title") as string,
//         description: formData.get("description") as string,
//         category: formData.get("category") as string,
//         link: formData.get("link") as string,
//         pitch,
//       };
//       await formSchema.parseAsync(formValues);
//             // const result = await createPitch(prevState, formData, pitch);

//       console.log(formValues, 'formValuesformValues')
 
//       const result = await createPitch(prevState, formData, pitch);

//       if (result.status == "SUCCESS") {
//         toast.toast({
//           title: "Success",
//           description: "Your startup pitch has been created successfully",
//         });

//         router.push(`/startup/${result.title}`);
//       }

//       return result;

        
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         const fieldErorrs = error.flatten().fieldErrors;

//         setErrors(fieldErorrs as unknown as Record<string, string>);

//        toast.toast({
//           title: "Error",
//           description: "Please check your inputs and try again",
//           variant: "destructive",
//         });

//         return { ...prevState, error: "Validation failed", status: "ERROR" };
        
//       }
//     toast.toast({
//         title: "Error",
//         description: "An unexpected error has occurred",
//         variant: "destructive",
//       });

//       return {
//         ...prevState,
//         error: "An unexpected error has occurred",
//         status: "ERROR",
//       };
//     }
//   }







//    const [state, formAction, isPending] = useActionState(handleFormSubmit, {
//     error: "",
//     status: "INITIAL",
//   });

//     return (
//         <form action={formAction} className='max-w-2xl mx-auto bg-white my-10 space-y-8 px-6;'>
//             <div>
//                 <label htmlFor='title' className='font-bold text-[18px] text-black uppercase'>
//                 </label>
//                 <Input id='title' name='title' className='border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important'
                     
//                     placeholder='STartup Title' />

//                 {errors.title && <p className='text-red-500 mt-2 ml-5;'>
//                     {errors.title}
//                 </p>}

//             </div>

//             <div>
//                 <label htmlFor="description" className="font-bold text-[18px] text-black uppercase;">
//                     Description
//                 </label>
//                 <Textarea
//                     id="description"
//                     name="description"
//                     className="border-[3px] border-black p-5 text-[18px] text-black font-semibold rounded-[20px] mt-3 placeholder:text-black-300 !important"
//                     required
//                     placeholder="Startup Description"
//                 />

//                 {errors.description && (
//                     <p className="text-red-500 mt-2 ml-5">{errors.description}</p>
//                 )}
//             </div>
//             <div>
//                 <label htmlFor="category" className="font-bold text-[18px] text-black uppercase;">
//                     Category
//                 </label>
//                 <Input
//                     id="category"
//                     name="category"
//                     className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important"
//                     required
//                     placeholder="Startup Category (Tech, Health, Education...)"
//                 />

//                 {errors.category && (
//                     <p className="text-red-500 mt-2 ml-5">{errors.category}</p>
//                 )}
//             </div>
//             <div>
//                 <label htmlFor="link" className="font-bold text-[18px] text-black uppercase;">
//                     Image URL
//                 </label>
//                 <Input
//                     id="link"
//                     name="link"
//                     className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important"
//                     required
//                     placeholder="Startup Image URL"
//                 />

//                 {errors.link && <p className="text-red-500 mt-2 ml-5">{errors.link}</p>}
//             </div>


//             <div data-color-mode="light">
//                 <label htmlFor="pitch" className="font-bold text-[18px] text-black uppercase;">
//                     Pitch
//                 </label>

//                 <MDEditor
//                     value={pitch}
//                     onChange={(value) => setPitch(value as string)}
//                     id="pitch"
//                     preview="edit"
//                     height={300}
//                     style={{ borderRadius: 20, overflow: "hidden" }}
//                     textareaProps={{
//                         placeholder:
//                             "Briefly describe your idea and what problem it solves",
//                     }}
//                     previewOptions={{
//                         disallowedElements: ["style"],
//                     }}
//                 />

//                 {errors.pitch && <p className="text-red-500 mt-2 ml-5">{errors.pitch}</p>}
//             </div>

//             <Button
//                 type="submit"
//                 className="bg-amber-800 border-[4px] border-black rounded-full p-5 min-h-[70px] w-full font-bold text-[18px] !important text-white"
//                 disabled={isPending}
//             >
//                 {isPending ? "Submitting..." : "Submit Your Pitch"}
//                 <Send className="size-6 ml-2" />
//             </Button>

//         </form>
//     )
// }

// export default StartupForm
"use client";

import React, { useActionState, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { createPitch } from "@/app/lib/actions";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");
  const toast = useToast();
  const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      await formSchema.parseAsync(formValues);

      const result = await createPitch(prevState, formData, pitch);

      if (result.status === "SUCCESS") {
        toast.toast({
          title: "Success",
          description: "Your startup pitch has been created successfully",
        });

        router.push(`/startup/${result._id}`);
      }

      return result;
    } catch (error) {
      console.log(error , 'errorerrorerrorerrorerror')
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string[] | undefined> = {
  title: ['Title is required', 'Title must be at least 3 characters'],
  description: ['Description is required'],
  link: undefined,
  category: ['Category is required'],
};
        // setErrors(fieldErrors as Record<string, string>);

        toast.toast({
          title: "Error",
          description: "Please check your inputs and try again",
          variant: "destructive",
        });

        return {
          ...prevState,
          error: "Validation failed",
          status: "ERROR",
        };
      }

      toast.toast({
        title: "Error",
        description: "An unexpected error has occurred",
        variant: "destructive",
      });

      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form
      action={formAction}
      className="max-w-2xl mx-auto bg-white my-10 space-y-8 px-6 mt-10"
    >
      <div>
        <label
          htmlFor="title"
          className="font-bold text-[18px] text-black uppercase"
        >
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300"
          placeholder="Startup Title"
        />
        {errors.title && (
          <p className="text-red-500 mt-2 ml-5">{errors.title}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="font-bold text-[18px] text-black uppercase"
        >
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="border-[3px] border-black p-5 text-[18px] text-black font-semibold rounded-[20px] mt-3 placeholder:text-black-300"
          placeholder="Startup Description"
           
        />
        {errors.description && (
          <p className="text-red-500 mt-2 ml-5">{errors.description}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="category"
          className="font-bold text-[18px] text-black uppercase"
        >
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300"
          placeholder="Startup Category (Tech, Health, Education...)"
          required
        />
        {errors.category && (
          <p className="text-red-500 mt-2 ml-5">{errors.category}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="link"
          className="font-bold text-[18px] text-black uppercase"
        >
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300"
          placeholder="Startup Image URL"
          required
        />
        {errors.link && (
          <p className="text-red-500 mt-2 ml-5">{errors.link}</p>
        )}
      </div>

      <div data-color-mode="light">
        <label
          htmlFor="pitch"
          className="font-bold text-[18px] text-black uppercase"
        >
          Pitch
        </label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value || "")}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />
        {errors.pitch && (
          <p className="text-red-500 mt-2 ml-5">{errors.pitch}</p>
        )}
      </div>

      <Button
        type="submit"
        className=" border-[4px] border-black rounded-full p-5 min-h-[70px] w-full font-bold text-[18px] text-white text-[36px] font-bold tracking-tight mix-blend-exclusion text-white whitespace-nowrap"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit Your Pitch"}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
};

export default StartupForm;
