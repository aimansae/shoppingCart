import TotalCart from "./components/TotalCart";

export default function page() {
  return (
    <section className="container flex mx-auto p-4 bg-background">
      <div className=" flex-row">
        <h1 className="text-2xl font-bold my-4">Desserts</h1>
        <TotalCart></TotalCart>
      </div>
    </section>
  );
}
