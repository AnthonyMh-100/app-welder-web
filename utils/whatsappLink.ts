export const buildWhatsAppLink = (phone: string, message?: string): string => {
  const base = `https://wa.me/${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};