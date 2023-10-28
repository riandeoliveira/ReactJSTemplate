import { mainProvider } from "providers";
import { createUserService } from "./service";

export const handleCreateUser = async (): Promise<void> => {
  const created: boolean = await createUserService.handle();

  if (created) {
    mainProvider.toast({
      title: "Usuário criado com sucesso.",
      status: "success",
    });
  }
};
