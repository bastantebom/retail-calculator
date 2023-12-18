import type { FC } from "react";
import { Regions } from "../helper";

export type RegionProps = {
  code: string;
  onRegionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Region: FC<RegionProps> = ({ code, onRegionChange }) => {
  const regions = Regions.map((region, index) => (
    <option key={index} value={region.code} disabled={!index}>
      {region.name}
    </option>
  ));

  return (
    <div>
      <label>Region</label>
      <div className="flex">
        <select value={code} onChange={onRegionChange} className="border p-2">
          {regions}
        </select>
      </div>
    </div>
  );
};
