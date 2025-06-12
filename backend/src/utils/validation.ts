export const validateTaskData = (data: any) => {
  const errors: string[] = [];

  if (!data.user_name || data.user_name.length < 3) {
    errors.push('user_name é obrigatório e deve ter no mínimo 3 caracteres');
  }
  if (!data.title || data.title.length < 3) {
    errors.push('title é obrigatório e deve ter no mínimo 3 caracteres');
  }
  if (!data.description || data.description.length < 3) {
    errors.push('description é obrigatório e deve ter no mínimo 3 caracteres');
  }

  return errors;
};
