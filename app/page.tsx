import TotalCart from "./components/TotalCart";

export default function page() {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-2xl font-bold my-4">Desserts</h1>
      <div className=" flex flex-col">
        <TotalCart></TotalCart>
      </div>
    </section>
  );
}
