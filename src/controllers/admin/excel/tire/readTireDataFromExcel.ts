import fs from "fs";
import * as XLSX from "xlsx";

function extractInfo(row: any) {
  console.log(row);

  const images = [row[15], row[16], row[17], row[18]]
    .filter((value) => value)
    .join(";");

  if (!row[5]) return;
  return {
    tireWidth: row[7],
    tireAspectRatio: row[8],
    rimDiameter: row[9],
    marka: row[5] ? row[5].trim() : "",
    price: !!row[13] ? row[13] : 0,
    stock: !!row[1] ? row[1] : 0,
    imageUrl: images,
  };
}

export const readTireDataFromExcel = async (filePath: string) => {
  const workbook = XLSX.readFile(filePath);

  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
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
