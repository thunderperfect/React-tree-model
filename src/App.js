import TreeModel from "tree-model";
import ReactJson from "react-json-view";

let tree = new TreeModel();

let root = tree.parse({
  id: 1,
  children: [
    {
      id: 11,
      children: [{ id: 111 }]
    },
    {
      id: 12,
      children: [{ id: 121 }, { id: 122 }]
    },
    {
      id: 13
    }
  ]
});

const testMe = () => {
  console.log("test");
};

export default function App() {
  return (
    <>
      <ReactJson src={root.model} />
      <button onClick={testMe}>test me </button>
    </>
  );
}
