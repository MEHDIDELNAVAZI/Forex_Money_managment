import { useEffect, useState } from "react";

function App() {
  const [balance, setbalance] = useState<number>(0);
  const [risk, setrisk] = useState<number>(0);
  const [protectivestop, setprotectivestop] = useState<number>(0);
  const [valuofperpiponlot, setvaluofperpiponlot] = useState<number>(0);

  return (
    <>
      <div className=" text-blue-600 p-10 border w-[50%]  border-gray-400">
        <table className="min-w-full">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 text-blue-700">BALANCE ($)</th>
              <th className="py-2">RISK(%)</th>
              <th className="py-2">RISK OF MONEY ($)</th>
              <th className="py-2">PROTECTIVE STOP(PIP)</th>
              <th className="py-2">PIP VALUES ($)</th>
              <th className="py-2">LOT</th>
              <th className="py-2">VALUE OF PIP PER 1 LOT($)</th>
            </tr>
          </thead>
          <tr>
            <td>
              <input
                type="number"
                value={balance}
                onChange={(e) => {
                  setbalance(parseFloat(e.target.value));
                }}
                min={0}
              />
            </td>
            <td>
              <input
                type="number"
                onChange={(e) => {
                  setrisk(parseFloat(e.target.value));
                }}
                value={risk}
                min={0}
              />
            </td>
            <td>{(balance * risk) / 100}$</td>
            <td>
              <input
                type="number"
                onChange={(e) => {
                  setprotectivestop(parseFloat(e.target.value));
                }}
              />
            </td>
            <td>{(balance * risk) / 100 / protectivestop}</td>
            <td>
              {(balance * risk) / 100 / protectivestop / valuofperpiponlot}
            </td>
            <td>
              <input
                type="number"
                onChange={(e) => {
                  setvaluofperpiponlot(parseFloat(e.target.value));
                }}
                value={valuofperpiponlot}
                min={0}
              />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
export default App;
