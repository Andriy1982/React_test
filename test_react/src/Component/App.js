import React from "react";
import Layout from "../Component/Layout/Layout";
import MyClass from "./MyClass";

export default function App() {
  return (
    <Layout>
      <MyClass initialValue={0} step={5} />
    </Layout>
  );
}
