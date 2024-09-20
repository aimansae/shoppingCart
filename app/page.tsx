import Order from "./components/Order";

export default function page() {
  return (
    <section className="container flex mx-auto p-4 bg-background">
      <div className=" flex-row">
        <h1 className="text-2xl font-bold m-4">Desserts</h1>
        <Order></Order>
      </div>
    </section>
  );
}
