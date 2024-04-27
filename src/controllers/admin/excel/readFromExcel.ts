import fs from "fs";
import * as XLSX from "xlsx";

function extractInfo(row: any) {
  if (!row[0]) return;
  return {
    rimModel: row[0] ?? "",
    stock: row[1] ?? 0,
    sizeR: row[5] ?? 0,
    studHoles: +row[6]?.split("x")[0] ?? 0,
    pcd: +row[6]?.split("x")[1] ?? 0,
    centerBore: row[7] ?? "",
    width: isNaN(+row[8]) ? 0 : +row[8],
    color: row[12] ?? "",
    description: "description",
    // imageUrl: `${row[18] ?? ""},${row[19] ?? ""},${row[20] ?? ""}`,
    imageUrl: `${row[18] ?? ""}`,

    price: +row[15] ?? 0,
    gram: +row[13] ?? 0,
    score: 1,
  };
}

export const readFromExcel = async (filePath: string) => {
  const workbook = XLSX.readFile(filePath);

  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const ref = worksheet["!ref"] as string;
  const range = XLSX.utils.decode_range(ref);

  const startRow = range.s.r + 2; // Start from the first row
  const endRow = range.e.r; // End at the last row

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
