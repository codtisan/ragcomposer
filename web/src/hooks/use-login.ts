import { BackendBaseUrl } from "@/configs/backend-services";
import { formSchema } from "@/configs/form-validation";
import axios from "axios";
import { z } from "zod";

export const UseLogin = async (loginOptions: z.infer<typeof formSchema>) => {
  try {
    const response = axios.post(BackendBaseUrl, loginOptions);
    return response;
  } catch (e) {
    console.error(e);
  }
};
