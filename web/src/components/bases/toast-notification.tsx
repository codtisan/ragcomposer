import { toast } from "sonner";

export const DisplaySuccessNotification = (message: string) => {
  return toast.success(message, {
    action: {
      label: "Cancel",
      onClick: () => console.log("Cancel"),
    },
  });
};

export const DisplayErrorNotification = (message: string) => {
  return toast.error(message, {
    action: {
      label: "Cancel",
      onClick: () => console.log("Cancel"),
    },
  });
};

export const DisplayInfoNotification = (message: string) => {
  return toast.info(message, {
    action: {
      label: "Cancel",
      onClick: () => console.log("Cancel"),
    },
  });
};

export const DisplayWarningNotification = (message: string) => {
  return toast.warning(message, {
    action: {
      label: "Cancel",
      onClick: () => console.log("Cancel"),
    },
  });
};
