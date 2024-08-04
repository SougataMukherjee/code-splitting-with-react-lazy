import { useEffect, useState, lazy, Suspense } from "react";
const Dropdown = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./DropDown")), 3000);
  });
});
export default function App() {
  // const [state, setState] = useState();
  // useEffect(() => {
  //   const importComponent = async () => {
  //     const module = await import("./DropDown");
  //     const DropDown = module.default;
  //     setState(<DropDown />);
  //   };

  //   importComponent();
  // }, []);
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Dropdown />
      </Suspense>
    </div>
  );
}
