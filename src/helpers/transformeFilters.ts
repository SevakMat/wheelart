interface InputItem {
  _count: { sizeR: number; pcd: number, studHoles: number; centerBore: number };
  sizeR: number;
  pcd: number;
  studHoles: number;
  centerBore: number | string; // Allow centerBore to be a string
}

interface OutputItem {
  count: number;
  sizeR?: number;
  pcd?: number;
  studHoles?: number;
  centerBore?: number;


}

interface TransformResult {
  sizeR: OutputItem[];
  pcd: OutputItem[];
  studHoles: OutputItem[];
  centerBore: OutputItem[];

}

type UpdateResultKey = 'sizeR' | 'pcd' | 'studHoles' | 'centerBore';

export const TransformArray = (inputArray: InputItem[]): TransformResult => {
  const result: TransformResult = { sizeR: [], pcd: [], studHoles: [], centerBore: [] };

  const updateResult = (key: UpdateResultKey, count: number, value?: number) => {
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

  inputArray.forEach(({ _count, sizeR, pcd, studHoles, centerBore }) => {
    updateResult('sizeR', _count.sizeR, sizeR);
    updateResult('pcd', _count.pcd, pcd);
    updateResult('studHoles', _count.studHoles, studHoles);
    updateResult('centerBore', _count.centerBore, Number(centerBore)); // Convert centerBore to number
  });

  return result;
};
