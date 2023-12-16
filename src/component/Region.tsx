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
      <select value={code} onChange={onRegionChange}>
        {regions}
      </select>
    </div>
  );
};
