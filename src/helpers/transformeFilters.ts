interface InputItem {
  _count: { sizeR: number; pcd: number, studHoles: number; centerBore: number, width: number, color: number };
  sizeR: number;
  pcd: number;
  studHoles: number;
  centerBore: number | string; // Allow centerBore to be a string
  width: number
  color: number | string
}

interface OutputItem {
  count: number;
  sizeR?: number;
  pcd?: number;
  studHoles?: number;
  centerBore?: number;
  width?: number;
  color?: any;
}

interface TransformResult {
  sizeR: OutputItem[];
  pcd: OutputItem[];
  studHoles: OutputItem[];
  centerBore: OutputItem[];
  width: OutputItem[];
  color: OutputItem[];
}

type UpdateResultKey = 'sizeR' | 'pcd' | 'studHoles' | 'centerBore' | 'width' | 'color';

export const TransformArray = (inputArray: InputItem[]): TransformResult => {
  const result: TransformResult = { sizeR: [], pcd: [], studHoles: [], centerBore: [], width: [], color: [] };

  const updateResult = (key: UpdateResultKey, count: number, value?: number | string) => {
    const entry = result[key].find(
      (entry) => (value === undefined ? entry.count : entry[key]) === value
    );
    if (entry) {
      entry.count += count;
    } else {
      const newItem: OutputItem = { count };
      if (value !== undefined) {
        newItem[key] = value;
      }
      result[key].push(newItem);
    }
  };

  inputArray.forEach(({ _count, sizeR, pcd, studHoles, centerBore, width, color }) => {
    updateResult('sizeR', _count.sizeR, sizeR);
    updateResult('pcd', _count.pcd, pcd);
    updateResult('studHoles', _count.studHoles, studHoles);
    updateResult('width', _count.width, width);
    updateResult('color', _count.color, color);

    updateResult('centerBore', _count.centerBore, Number(centerBore)); // Convert centerBore to number
  });

  return result;
};
