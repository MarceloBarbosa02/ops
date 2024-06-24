export async function getAddressByZipCode(zipCode: string) {
  try {
    const formatZipCode = zipCode.replace(/[-]/g, "");
    const response = await fetch(
      `https://viacep.com.br/ws/${formatZipCode}/json/`
    );
    if (!response.ok) {
      throw new Error("CEP não encontrado");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
