import fs from "fs";
import * as XLSX from "xlsx";

function extractInfo(row: any) {
  const images = [row[15], row[16], row[17], row[18]]
    .filter((value) => value)
    .join(";");

  if (!row[5]) return;
  return {
    tireWidth: row[7] ?? 0,
    tireAspectRatio: row[8] ?? 0,
    rimDiameter: row[9] ?? 0,
    marka: row[5] ? row[5].trim() : "",
    price: !!row[13] ? row[13] : 0,
    stock: !!row[1] ? row[1] : 0,
    imageUrl: images,
  };
}

export const readTireDataFromExcel = async (filePath: string) => {
  const workbook = XLSX.readFile(filePath);

  const sheetName = process.env.TIRE_SHEET_NAME as string;
  const worksheet = workbook.Sheets[sheetName];

  if (!worksheet) {
    throw new Error("SHeet name must be TYRES");
  }

  const ref = worksheet["!ref"] as string;
  const range = XLSX.utils.decode_range(ref);

  const startRow = range.s.r + 2;
  const endRow = range.e.r;

  const data = [];

  for (let rowNum = startRow; rowNum < endRow; rowNum++) {
    const row = XLSX.utils.sheet_to_json(worksheet, { header: 1 })[rowNum];
    const item = extractInfo(row);
    if (item) {
      data.push(item);
    }
  }

  fs.unlinkSync(filePath);

  return data;
};
